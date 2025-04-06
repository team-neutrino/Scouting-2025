let actionList = [];
let zoom = false;
let madeBubbles = false;
let regenOpen = false;
let resetMenuVisible = false;
let oldMatches = []; //Make me sync up with old data for the regenerate old qr stuff

function load(loadOut, windowLocation) {
  const targetElements = Array.from(document.querySelectorAll('div.flex-container *')).filter(element => {
  const children = element.children;
  return (
    element.tagName !== 'SVG' && // Exclude <svg> elements
    !(element.tagName === 'DIV' && children.length > 0 && children[0].tagName === 'SVG') && // Exclude <div> where the first child is <svg>
    (children.length === 0 || // Childless element
      (children.length === 1 && children[0].tagName === 'SPAN')) // Only one child, and it's a <span>
  );
});



  if(loadOut) {
    targetElements.reverse();
  }
  for(let b in targetElements) {
    setTimeout(() => {
      if(loadOut) {
        targetElements[b].style.opacity = "0";
        targetElements[b].style.transform = "scale(0.5, 0.5)";
        window.location.href = `./${windowLocation}.html`;
      } else {
        targetElements[b].style.opacity = "1";
        targetElements[b].style.transform = "scale(1, 1)";
      }
    }, 15*b);
  }
}

function buttonEfffect(button) { 
  actionList.push(button.innerText);
  let buttonBg = getComputedStyle(button).backgroundColor;
  let terminal = document.getElementById("terminal");
  let buttonBgRGBA = buttonBg;
  buttonBg = buttonBg.substring(0, buttonBg.length - 8) + ")";
  buttonBg = buttonBg.replace("a" , "");
  //alert(buttonBg);
  button.style.boxShadow = "0 0 10vh " + buttonBg;
  terminal.style.backgroundColor = buttonBgRGBA;
  setTimeout(() => {
    button.style.boxShadow = "";
    terminal.style.backgroundColor = "";
  }, 1000);
  var logText = actionList.slice().reverse().join("\n");
  document.getElementById("terminal").value = logText;
  //alert(button.innerText);
}

function qrZoom() {
  let qr = document.getElementById('qrArea');
  if(zoom) {
    qr.style.transform = "scale(1, 1)";
    zoom = false;
    return;
  }
  if(!zoom) {
    qr.style.transform = "scale(1.25, 1.25)";
    
    zoom = true;
    return;
  }
}

function reset(action) {
  let resetQr = document.getElementById('resetQr');
  let qrHtml = '<div class="qr-holder" id="qrArea"  onclick="qrZoom()" style="opacity:0;transform:scale(1.1, 1.1) rotate(3deg)"> \n </div>';
  let resetHTML = '<div class="reset-pop-up" id="resetPopUp" style="opacity:0;transform:scale(0.9, 0.9) rotate(-3deg)"> \n <div class="reset-pop-up-top"> \n <h2>Do You Really Want To Reset?</h2> \n </div> \n <div class="reset-pop-up-bottom"> \n <button class="reset-pop-up-button color1" onclick="toQuotes()" id="yesButton">Yes</button> \n<button class="reset-pop-up-button color2" onclick="reset(\'no\')" id="noButton">No</button> \n </div> \n </div>';
  if(regenOpen) {
    regenQR();
  }
  if(action == 'reset') {
    resetMenuVisible = true;
    let qrArea = document.getElementById('qrArea');
    qrArea.style.transition = 'transform 0.4s ease-out, opacity 0.25s ease-out';
    qrArea.style.opacity = 0;
    qrArea.style.transform = 'scale(1.1, 1.1) rotate(3deg)';
    setTimeout(() => {
      resetQr.innerHTML = "";
      resetQr.innerHTML = resetHTML;
    }, 260);
    setTimeout(() => {
      document.getElementById("resetPopUp").style.removeProperty("opacity");
      document.getElementById("resetPopUp").style.removeProperty("transform");
    }, 300);
  }
  if(action == 'no') {
    resetMenuVisible = false;
    let resetPopUp = document.getElementById("resetPopUp");
    resetPopUp.style.opacity = 0;
    resetPopUp.style.transform = 'scale(0.9, 0.9) rotate(-3deg)';
    setTimeout(() => {
      resetQr.innerHTML = "";
      resetQr.innerHTML = qrHtml;
      initQRCode();
    }, 260);
    setTimeout(() => {
      document.getElementById("qrArea").style.removeProperty("opacity");
        document.getElementById("qrArea").style.removeProperty("transform");
    }, 300);
  }
  
}

function toQuotes() {
  /*body.innerHTML += '<svg width="100vw" height="120vh" style="top:110vh;animation: slide-in 2.5s linear;box-shadow: 0px 0px 100px white;"> \n <rect width="100vw" height="120vh" x="0" y="0" rx="0" ry="20" fill="white" /> \n </svg>';*/
  document.getElementById("yesButton").style.transform = "scale(1.2, 1.2)";
  document.getElementById('changeStyle').innerHTML = "";
  document.getElementById('waveHolder').style.animationName = "slide-in-no-fade";
  setTimeout(() => {
    document.getElementById('path').style.animationDuration = "0.5s";
    document.getElementById('waveBottom').style.animationDuration = "0.5s";
    document.getElementById('path').style.animationName = "color-shift";
    document.getElementById('waveBottom').style.animationName = "color-shift";
    
  }, 2800);
  let takeout = getQuote();
    let quote = takeout[0];
    let author = takeout[1];
    let length = takeout[2];
  setTimeout(() => {
    
    document.getElementById('body').innerHTML = '<div class="quoteDiv" id="insertQuote"></div>';
    let insertQuote = document.getElementById('insertQuote');
    let repeat = quote.length;
    for(let i = 0; i < repeat; i++) {
      
      setTimeout(() => {
        insertQuote.innerHTML += quote[i];
      }, 15*i);
        
    }
    setTimeout(() => {
    insertQuote.innerHTML += "<br><br><strong>" + author + "</strong>";
}, 20 * repeat);

  }, 3400);
  
  setTimeout(() => {
    insertQuote.style.transition = "opacity 1s ease, transform 1s ease";
    insertQuote.style.opacity = "0";
    insertQuote.style.transform = "scale(1.5, 1.5)";
  }, 3500+length);
  setTimeout(() => {
    window.location.href = `./index.html`;
  }, 3500+length+1000);
  
  
}

  
  

function makeBubble() {
  let offset = Math.random()*110;
  let size = Math.random() * (50 - 5) + 5;
  let topOffset = ((Math.random() * (30 - 5) + 5)/2)+100;
  let time= Math.random() * (2 - 0) + 0;
  return `<svg width="100" height="100"  id="bubble" style="right:${offset+10}vw;top:${topOffset}vh;animation: slide-in ${time + 0.8}s linear;animation-delay: ${time};"> \n <circle cx="50" cy="50" r="${size}" stroke="white" stroke r="${size}" stroke="white" stroke-width="4" fill="white" /> \n </svg>`;
}
            // <div class="oldMatch" id="m1" onclick="makeOldQr(this.id)">Match 1; 3928; JD</div>
            // <div class="oldMatch" id="m2" onclick="makeOldQr(this.id)">Match 2; 3928; JD</div>
            // <div class="oldMatch" id="m3" onclick="makeOldQr(this.id)">Match 3; 3928; JD</div>
            // <div class="oldMatch" id="m4" onclick="makeOldQr(this.id)">Match 4; 3928; JD</div>
            // <div class="oldMatch" id="m5" onclick="makeOldQr(this.id)">Match 5; 3928; JD</div>


function makeOldMatches() {
  for(let i = 1; i < 30; i++) {
    oldMatches.push(i);
  } 
}
  makeOldMatches(); // delete me for regen stuff
function regenQR() {
  let container = document.getElementById('resetQr');
  let regenHTML = '<h2 class="matchHeader">What Match?</h2> \n<div class="matchSelect" id="matchSelect"> \n</div>';
  if(resetMenuVisible) {
      regenHTML = '<h2 class="matchHeader">Ya Ha Ha! You found me!</h2>';
  }
  if(!regenOpen) {

    const boxes = [...container.children];
    const firstRects = boxes.map(box => box.getBoundingClientRect());
    
    
    const newBox = document.createElement('div');
    newBox.classList.add("oldQrs");
      newBox.innerHTML = regenHTML;
    newBox.setAttribute('id', 'oldQr');
    container.appendChild(newBox);
    if(!resetMenuVisible) {
      addOldMatches();
    }
    
    const lastRects = [...container.children].map(box => box.getBoundingClientRect());
    // Step 3: Apply FLIP animation
    boxes.forEach((box, i) => {
      const dx = firstRects[i].left - lastRects[i].left;
      console.log(dx);
      const dy = firstRects[i].top - lastRects[i].top;
      console.log(dy);
      box.style.transition = 'none';
      box.style.transform = `translate(${dx}px, ${dy}px)`;
      let newBoxx = document.getElementById('oldQr');
      newBoxx.style.transform = `translate(${dx*4}px, ${dy}px)`;
      setTimeout(() => {
        requestAnimationFrame(() => {
            box.style.transition = 'transform 0.5s ease';
            box.style.transform = "";
            newBoxx.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            newBoxx.style.transform = "";
          });
      }, 1);
      
    });
    
    
    regenOpen = true;
  } else {
    regenOpen = false;
    const boxes = [...container.children];
    const firstRects = boxes.map(box => box.getBoundingClientRect());
    
    document.getElementById('oldQr').style.transform = 'translate(50vw, 0)'
    document.getElementById('oldQr').style.opacity = '0'
    
    setTimeout(() => {
    container.removeChild(document.getElementById('oldQr'));
    
    const lastRects = [...container.children].map(box => box.getBoundingClientRect());
    
    // Step 3: Apply FLIP animation
    boxes.forEach((box, i) => {
      const dx = firstRects[i].left - lastRects[i].left;
      console.log(dx);
      const dy = firstRects[i].top - lastRects[i].top;
      console.log(dy);
      box.style.transition = 'none';
      box.style.transform = `translate(${dx}px, ${dy}px)`;
      setTimeout(() => {
        requestAnimationFrame(() => {
            box.style.transition = 'transform 0.5s ease';
            box.style.transform = "";
          });
      }, 1);
    });
  }, 200);
    
    
    
  }

  
}

function addOldMatches() {
  let matchSelect = document.getElementById('matchSelect');
  for(let i in oldMatches) {
    const newElement = document.createElement('div');
    newElement.classList.add("oldMatch");
    newElement.setAttribute('id', 'm'+i);
    newElement.setAttribute('onclick', 'makeOldQr(this.id)');
    newElement.innerText = 'Match ' + i;
    matchSelect.appendChild(newElement);
  }
}