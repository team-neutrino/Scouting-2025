let actionList = [];
let zoom = false;

function load(loadOut, windowLocation) {
  const targetElements = Array.from(document.querySelectorAll('*')).filter(element => {
  const children = element.children;
  return (
    children.length === 0 || // Childless element
      (children.length === 1 && children[0].tagName === 'SPAN') // Only one child, and it's a <span>
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
  let termnial = document.getElementById("termnial");
  let buttonBgRGBA = buttonBg;
  buttonBg = buttonBg.substring(0, buttonBg.length - 8) + ")";
  buttonBg = buttonBg.replace("a" , "");
  //alert(buttonBg);
  button.style.boxShadow = "0 0 10vh " + buttonBg;
  termnial.style.backgroundColor = buttonBgRGBA;
  setTimeout(() => {
    button.style.boxShadow = "";
    termnial.style.backgroundColor = "";
  }, 1000);
  var logText = actionList.slice().reverse().join("\n");
  document.getElementById("termnial").value = logText;
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

function reset() {
  document.getElementById('dimmer').style.removeProperty("display");
  document.getElementById('dimmer').style.removeProperty("opacity");
}