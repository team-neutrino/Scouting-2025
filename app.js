var scorer = 0
let extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'red']
//Cluttering of Field (C 1-5), Driver Skill (D 1-5), Accuracy (AR 1-5), Align Time (AT 1-5)]
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = [""]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
var OU = "1";
var selectedOption = "";
var blue1 = [ 6647,
2080,
3656,
3473,
6621,
5013,
230,
8595,
2383,
5193,
3130,
3197,
86,
5987,
3339,
1768,
3473,
3656,
9496,
3197,
33,
2200,
5985,
2960,
1153,
9450,
781,
4728,
467,
195,
973,
70,
9245,
2470,
2706,
2522,
6652,
6324,
3882,
1038,
1700,
3130,
9545,
9635,
5736,
2783,
86,
10479,
7632,
2491,
230,
51,
9635,
8570,
1506,
5817,
7421,
5013,
10224,
4907,
3339,
3794,
6621,
9496,
1241,
3130,
3928,
9450,
540,
3794,
70,
86,
33,
3197,
2200,
467,
5736,
2706,
3928,
2783,
4145,
3473,
4009,
1700,
8570,
5985,
2075,
2383,
8177,
70,
3882,
2539,
7632,
1038,
9134,
2470,
5193,
1700,
2767,
6652,
3045,
3882,
2080,
8595,
9635,
51,
1768,
1241,
5987,
973,
3339,
781,
1902,
7421,
9134,
1768,
7902,
2706,
5193,
5181,
2522,
2783,
5987,
5736,
195];
var blue2 = [ 1241,
7421,
4728,
2783,
6652,
9134,
2539,
973,
467,
9245,
195,
4009,
2706,
2080,
7902,
2075,
5181,
8570,
5193,
4145,
195,
10479,
5736,
70,
9245,
3814,
3882,
86,
540,
801,
51,
3970,
3045,
5987,
1902,
33,
2485,
9134,
9450,
2877,
973,
1768,
1241,
801,
6873,
781,
5817,
2383,
3473,
2200,
3814,
6647,
467,
1700,
9496,
7902,
3970,
2075,
2485,
86,
1153,
2960,
2470,
1902,
5817,
9635,
10479,
51,
4907,
1768,
2539,
2383,
2767,
2960,
3339,
9450,
9496,
781,
888,
1506,
540,
1038,
3045,
33,
3970,
9245,
2767,
7902,
10157,
540,
6873,
5987,
5013,
7421,
1153,
7902,
3130,
3656,
4145,
2200,
801,
10479,
2522,
10157,
3794,
888,
2470,
4728,
3197,
10224,
5985,
3814,
2075,
2877,
3794,
6647,
3656,
6324,
4009,
9545,
3814,
10224,
230,
86,
8177];
var blue3 = [3045,
2470,
2075,
3882,
5181,
5987,
1700,
8570,
3928,
9635,
2960,
33,
10157,
6647,
230,
1241,
9450,
8177,
781,
2539,
3928,
9134,
3970,
7632,
2522,
6873,
2877,
6324,
4009,
8595,
6621,
5013,
9545,
2491,
10479,
5985,
1153,
4145,
10157,
6647,
2767,
4728,
8595,
3970,
2539,
5985,
10224,
7421,
6621,
8177,
3130,
9545,
1241,
5736,
4009,
2783,
4145,
8177,
2767,
2080,
540,
2383,
5736,
4728,
2706,
5013,
801,
6652,
3473,
888,
3656,
1038,
9245,
5181,
8595,
5013,
9545,
2080,
4907,
70,
2877,
5817,
9134,
1902,
3814,
8595,
2200,
4907,
230,
801,
6621,
1506,
2783,
781,
1902,
2485,
3473,
888,
3339,
2383,
1506,
6324,
1902,
7632,
2706,
2485,
8177,
2491,
9496,
6652,
195,
1153,
3882,
6621,
3130,
2485,
2491,
1506,
6873,
5817,
51,
801,
70,
973,
3197];
var red1 = [ 6324,
5985,
3339,
2485,
2767,
7902,
3794,
1153,
1902,
1506,
888,
10479,
2522,
4728,
4907,
6873,
2877,
3814,
8595,
801,
5013,
3130,
10157,
2485,
2470,
7421,
3656,
2539,
6647,
230,
3197,
9496,
2080,
5181,
3473,
5817,
5736,
8177,
195,
7902,
2075,
51,
2960,
540,
9245,
888,
1506,
6652,
33,
3794,
973,
2877,
801,
9134,
9450,
1902,
7632,
2539,
781,
2491,
1038,
6873,
2200,
10157,
4009,
9545,
5985,
781,
1506,
3814,
6873,
6621,
2485,
2075,
3045,
1241,
8177,
801,
10157,
195,
4728,
2491,
2960,
6324,
2485,
6652,
1153,
10224,
2877,
5817,
9545,
3045,
8570,
4728,
5181,
3970,
10224,
33,
1768,
3814,
6873,
9245,
2539,
4009,
6647,
9134,
4907,
2767,
2783,
3970,
1700,
86,
4145,
888,
9450,
2383,
10479,
3928,
2080,
2200,
467,
1153,
4145,
540,
3970];
var red2 = [ 4907,
51,
2706,
801,
8177,
781,
3970,
4145,
7632,
2491,
5736,
70,
1038,
2767,
2783,
10224,
6324,
7421,
5817,
4009,
2491,
1506,
6621,
9635,
9545,
2783,
4907,
5193,
8570,
1038,
10157,
3130,
2383,
7632,
2200,
3339,
1506,
10224,
5193,
70,
4009,
3045,
1902,
3656,
9496,
2706,
5013,
2470,
2080,
2485,
3928,
5987,
1768,
4728,
888,
6652,
3045,
3473,
2522,
8595,
6324,
33,
6647,
973,
7632,
4145,
8177,
1700,
9134,
2080,
1153,
8570,
2877,
2522,
3882,
230,
7632,
973,
6873,
6621,
3794,
2539,
3882,
5987,
5181,
3197,
5193,
9450,
9635,
51,
2491,
467,
2522,
3928,
5985,
8595,
3197,
1241,
2960,
195,
8570,
6621,
540,
5181,
7421,
3656,
3130,
2383,
3928,
9545,
3473,
230,
5736,
8595,
9245,
5013,
9496,
2767,
3339,
4907,
2075,
1700,
6652,
5985,
1241];
var red3 = [ 9496,
10224,
9450,
86,
540,
6873,
2200,
1768,
2877,
3814,
5817,
9545,
6652,
3882,
51,
540,
973,
1902,
467,
2383,
3045,
1038,
3794,
1700,
888,
2767,
1768,
7902,
3928,
9134,
1241,
2075,
1700,
888,
2960,
9635,
3794,
467,
8570,
3814,
4907,
230,
3928,
5987,
5181,
4145,
3197,
3339,
1153,
2522,
3882,
195,
5181,
2706,
5985,
10157,
5193,
9245,
10479,
70,
3197,
3656,
467,
195,
230,
2783,
5193,
2491,
7421,
6324,
2470,
5987,
3970,
7902,
10224,
10479,
T
3130,
9635,
1768,
2470,
6647,
2522,
7421,
3339,
3656,
86,
5736,
2080,
10479,
2706,
973,
6324,
9245,
6647,
4009,
3794,
86,
9496,
2075,
2877,
5817,
9450,
5013,
7902,
5193,
33,
70,
2200,
1038,
467,
2960,
9635,
2539,
7632,
10157,
8570,
2470,
1038,
4728,
33,
2960,
3473,
3045,
781];
var ipadID = localStorage.getItem("iPadId");
let savedComments = [];
var incmatchnumber = "1";
var matchSave = 0;
var scoutSave = "";
var OldCompressedList = [];
var OldExtraDataList = [];
var countt = [];
var curentAction = "";
var MakeqrExtraData = [];
var MakeqrCompList = [];
var rUsure = "";
var matchnum = 1;
var team = "";
var match = "";
var savescout = sessionStorage.getItem("scoutInitials");
var num = 0;
let activeAnimations = [];
let nonDblClick = true;
var Notes = "";
var Notes2 = "";
var answer = "";

/* Function List
--- Direct Button Functions ---
changeMatchNumber: Used to change the match number
changeTeamNumber: Used to change the team number
addAction: Called everytime a button is pushed.
Undo: Pops items off of all the lists.
moveTableLeft: Used to move backwards in the table structure
moveTableRight: Used to move forward in the table structure
updateComments: Add comments
resetButton: Resets all the variables
--- Indirect Functions ---
init: Initialize everything
updateLog: Updates the human list of actions done.
updateAvail: This was created to enable/disable (validation) scoring buttons based on how many game pieces the robot has.
--- Notes ---
The updateReview and updateList using the organizedActionList variable in 2022 code was legacy code that was used to show the scouter the total # they put in. This might be useful to have on a review page.
Combined lowerCounter and raiseCounter functions into the updateAvail function to make it easier.
*/

function replaceLeave() {
  var leaveAction = actionList.indexOf("Leave");



  if (leaveAction > -1) {
    actionList.splice(leaveAction, 1);
  }
  var leaveCompressed = compressedList.indexOf(1);

  if (leaveCompressed > -1) {
    compressedList.splice(leaveCompressed, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceDisabled() {
  var disabledAction = actionList.indexOf("Disabled");



  if (disabledAction > -1) {
    actionList.splice(disabledAction, 1);
  }
  var disabledCompressed = compressedList.indexOf(24);

  if (disabledCompressed > -1) {
    compressedList.splice(disabledCompressed, 1);
  }

  console.log(actionList);
  updateLog();

}

function rgbaFromRgb(rgb, alpha) {
  // Extract RGB values
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) return rgb;

  // Convert RGB to RGBA
  const rgba = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`;
  return rgba;
}

function addButtonGlowEffect(id) {
  /* if(!activeAnimations.includes(id)) {
     activeAnimations.push(id);
   const button = document.getElementById(id);
   const buttonBgColor = window.getComputedStyle(button).getPropertyValue('background-color');
   const backgroundColorWithAlpha = rgbaFromRgb(buttonBgColor, 0.75);
   console.log(backgroundColorWithAlpha);
   console.log(buttonBgColor);
   button.style.boxShadow = `0px 0px 100vh 10vw ${backgroundColorWithAlpha}`;
   // After 1 second, change the blur to the defualt blur
   setTimeout(() => {
     button.style.boxShadow = `0px 0px 0px rgba(0, 0, 0, 0)`;
   }, 1000);
   
   // After 3 seconds, remove both classes
   setTimeout(() => {
     button.removeAttribute('style');
     activeAnimations.splice(activeAnimations.indexOf(id), 1);
   }, 2000);
   
 }*/
}

function addAction(action, number) { //Used for buttons that have a data validation script
  actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
  compressedList.push(number); //Add it to the compressedList (QR Code)//
  updateLog(); //Update what the scouter sees on the app (actionList)
  addButtonGlowEffect(action);
  saveData();
	console.log(compressedList);
	
}

function alliancePick(alliance) {
  addButtonGlowEffect(alliance);
  if (alliance == "Red Alliance") {
    document.getElementById('indexTable').style['-webkit-backdrop-filter'] = 'hue-rotate(170deg)';
    document.getElementById('indexTable').style['backdrop-filter'] = 'hue-rotate(170deg)';
  }
  if (alliance == "Blue Alliance") {
    document.getElementById('indexTable').style['-webkit-backdrop-filter'] = 'hue-rotate(0deg)';
    document.getElementById('indexTable').style['backdrop-filter'] = 'hue-rotate(0deg)';

  }
  if (alliance == "No Alliance") {
    document.getElementById('indexTable').style['-webkit-backdrop-filter'] = 'saturate(0%)';
    document.getElementById('indexTable').style['backdrop-filter'] = 'saturate(0%)';

  }
  // else {
  //   document.getElementById('indexTable').style['-webkit-backdrop-filter'] = 'hue-rotate(-40deg)';
  //   document.getElementById('indexTable').style['backdrop-filter'] = 'hue-rotate(-30deg)';
  // }
  extraData[4] = alliance;
  console.log(extraData);
}

function GO(iPadID, matchsaver, scoutsaver, id) {
  getBoxData();
  var message = "You need to add ";
  var allClear = 1;
  var team = document.getElementById("teamNum");
  var match = document.getElementById("matchNum");
  var scout = document.getElementById("scout");
  scoutSave = document.getElementById("scout").value;
  matchSave = document.getElementById("matchNum").value;
  if (extraData[0] === "" || extraData[1] === "" || extraData[2] === "") {
    if (extraData[0] === "") {
      message += "a team number, ";
      team.style.border = "5px solid red";
    }
    if (extraData[1] === "") {
      message += "a match number, ";
      match.style.border = "5px solid red";
    }
    if (extraData[2] === "") {
      message += "your initials, ";
      scout.style.border = "5px solid red";
    }
    message = message.substring(0, message.length - 3);
    message += "!";
    //console.log(message);
    //  alert(message);
    allClear = 0;
    sessionStorage.setItem("selectedOption", JSON.stringify(selectedOption))

    console.log(sessionStorage);

    extraData[4] = "red";
  }
  localStorage.setItem("iPadId", iPadID)
  sessionStorage.setItem("scoutInitials", scoutsaver)
  sessionStorage.setItem("matchNum", matchsaver)
  actionList[0] = extraData[4];
  saveData();
  if (allClear == 1) {
    window.location.href = "./" + "auton" + ".html";
  }
  //console.log(displaySavedData());
}


/* function indexOut(id) {
  let team = document.getElementById('teamNum');
  let scout = document.getElementById('scout');
  let match = document.getElementById('matchNum');
  team.style.textShadow = "0px 0px 2vh white";
  team.style.boxShadow = "0px 0px 200vh 2vw white";
  team.style.width = "9vw";
  setTimeout (() => {
    team.style.fontSize = "0vh";
    team.style.width = "0vw";
    team.style.opacity = "0";
  }, 1500);
  setTimeout(() => {
  scout.style.textShadow = "0px 0px 2vh white";
  scout.style.width = "9vw";
  scout.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    scout.style.fontSize = "0vh";
    scout.style.width = "0vw";
    scout.style.opacity = "0";
  }, 1500);
  }, 200);
  setTimeout(() => {
  match.style.textShadow = "0px 0px 2vh white";
  match.style.width = "9vw";
  match.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    match.style.fontSize = "0vh";
    match.style.width = "0vw";
    match.style.opacity = "0";
  }, 1500);
  }, 400);
  setTimeout(() => {
  let button = document.getElementById(id);
  button.style.transform = "scale(1.2)";
  button.style.boxShadow = `0px 0px 1000vh 100vw black`;
  document.getElementById('iPadIDarea').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('iPadIDarea').style.opacity = "0";
  document.getElementById('row1').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row2').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row3').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row4').style.transition = "opacity 0.5s ease-in-out";
  
  for(let i = 4; i > 0 ; i--) {
    setTimeout(() => {
      document.getElementById('row' + i).style.opacity = "0";
    }, i);
    }
    setTimeout(() => {
      button.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      
      document.getElementById('body').style.background = "black";
    }, 450);
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 800);
  }, 2000);
} */

function flip() {
  document.getElementById('flit').style.transform
}
function indexOut(page) {
  let team = document.getElementById('teamNum');
  let scout = document.getElementById('scout');
  let match = document.getElementById('matchNum');
  document.getElementById('indexTable').setAttribute("onclick", "window.location.href ='./" + page + ".html'");
  team.style.textShadow = "0px 0px 2vh white";
  team.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout(() => {
    team.style.fontSize = "0vh";
    team.style.width = "0vw";
    team.style.opacity = "0";
  }, 250);
  setTimeout(() => {
    scout.style.textShadow = "0px 0px 2vh white";
    scout.style.boxShadow = "0px 0px 200vh 2vw white";
    setTimeout(() => {
      scout.style.fontSize = "0vh";
      scout.style.width = "0vw";
      scout.style.opacity = "0";
    }, 250);
  }, 150);
  setTimeout(() => {
    match.style.textShadow = "0px 0px 2vh white";
    match.style.boxShadow = "0px 0px 200vh 2vw white";
    setTimeout(() => {
      match.style.fontSize = "0vh";
      match.style.width = "0vw";
      match.style.opacity = "0";
    }, 250);
  }, 300);
  setTimeout(() => {
    let button = document.getElementById('goButton');
    button.style.transform = "scale(1.2)";
    button.style.boxShadow = `0px 0px 1000vh 100vw black`;
    document.getElementById('iPadIDarea').style.transition = "opacity 0.5s ease-in-out";
    document.getElementById('iPadIDarea').style.opacity = "0";
    document.getElementById('regenMatch').style.transition = "opacity 0.5s ease-in-out";
    document.getElementById('regenMatch').style.opacity = "0";
    document.getElementById('row1').style.transition = "opacity 0.5s ease-in-out";
    document.getElementById('row2').style.transition = "opacity 0.5s ease-in-out";
    document.getElementById('row3').style.transition = "opacity 0.5s ease-in-out";
    document.getElementById('row4').style.transition = "opacity 0.5s ease-in-out";

    for (let i = 4; i > 0; i--) {
      setTimeout(() => {
        document.getElementById('row' + i).style.opacity = "0";
      }, i);
    }
    setTimeout(() => {
      button.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      document.getElementById('fadeOnTrans1').style.opacity = "0";
      document.getElementById('fadeOnTrans2').style.opacity = "0";
      document.getElementById('body').style.background = "black";
    }, 450);
    setTimeout(() => {
      window.location.href = "./" + page + ".html";
    }, 800);
  }, 500);
}

function qrOut(id) {
  let button = document.getElementById(id);
  button.style.transform = "scale(1.2)";
  button.style.boxShadow = `0px 0px 1000vh 100vw black`;
  setTimeout(() => {
    document.getElementById('tableQR').style.opacity = '0';
    document.getElementById('body').style.background = 'black';
    button.style.opacity = "0";
  }, 1200);

}

function getBoxData() {
  extraData[0] = document.getElementById('teamNum').value;
  extraData[1] = document.getElementById('matchNum').value;
  extraData[2] = document.getElementById('scout').value;
  saveData();
  console.log(extraData);
}

function saveData() {
  sessionStorage.setItem("actionList", JSON.stringify(actionList));
  sessionStorage.setItem("compressedList", JSON.stringify(compressedList));
  sessionStorage.setItem("extraData", JSON.stringify(extraData));
  sessionStorage.setItem("selectedOption", JSON.stringify(selectedOption));
  sessionStorage.setItem("Notes", JSON.stringify(Notes));
  sessionStorage.setItem("Notes2", JSON.stringify(Notes2));
}

function displaySavedData() {
  let compList = sessionStorage.getItem("compressedList");
  compList = JSON.parse(compList);
  let actList = sessionStorage.getItem("actionList");
  actList = JSON.parse(actList);
  let exData = sessionStorage.getItem("extraData");
  exData = JSON.parse(exData);
  return "compressed list: " + compList + " action list: " + actList + " extra data: " + exData;
}
function getData() {
  console.log(displaySavedData());
  let unparsedActionList = sessionStorage.getItem("actionList");
  let unparsedExtradata = sessionStorage.getItem("extraData");
  let unparsedCompressedList = sessionStorage.getItem("compressedList");
  let unparsedSoption = sessionStorage.getItem("selectedOption");
  let unparsedNotes = sessionStorage.getItem("Notes");
  let unparsedNotes2 = sessionStorage.getItem("Notes2");
  selectedOption = JSON.parse(unparsedSoption);
  Notes = JSON.parse(unparsedNotes);
  Notes2 = JSON.parse(unparsedNotes2)
  actionList = JSON.parse(unparsedActionList);
  compressedList = JSON.parse(unparsedCompressedList);
  extraData = JSON.parse(unparsedExtradata);
  console.log(actionList);
  console.log(compressedList);
  console.log(extraData);
  if(document.getElementById('teamLog1') !== null) {
  updateLog();
  }
}

function loadPage() {
  getData();
  displayBoxData();
}

function qualLoad() {
  getData();
  document.getElementById('teamNumberBox').value = extraData[0];
  document.getElementById('matchNumberBox').value = extraData[1];
  addStarRate("clutter;" + extraData[5]);
  addStarRate("driver;" + extraData[6]);
  addStarRate("accuracy;" + extraData[7]);
  addStarRate("defence;" + extraData[8]);
}

function displayBoxData() {
  if (extraData[0] !== undefined) {
    document.getElementById('teamNumberBox').value = extraData[0];
	  console.log(document.getElementById('teamNumberBox').value);
  }
  if (extraData[1] !== undefined) {
    document.getElementById('matchNumberBox').value = extraData[1];
  }
	  console.log(document.getElementById('teamNumberBox').value);
  if (extraData[3] !== undefined) {
    document.getElementById('coment').value = extraData[3];
  }
}

function updateLog() {
  var logText = actionList.slice().reverse().join("\n");
  document.getElementById("teamLog1").value = logText;
}

function commentEdit(comment) {
  extraData[3] = comment;
  saveData();
}
function Undo() {
  var lastAction = actionList.pop();

  if (lastAction) {
    document.getElementById('teamLog1').style.border = '3px solid red';
    setTimeout(() => {
      document.getElementById('teamLog1').style.border = '3px solid white';
      document.getElementById('teamLog1').style.transition = 'border 1s ease-in-out';
    }, 100);
    setTimeout(() => {
      document.getElementById('teamLog1').removeAttribute('style');
    }, 1100);
    compressedList.pop();
    updateLog();
  } else {
    console.log("Nothing to undo");
  }
}
function pullIPadID() {
  document.getElementById("iPadIDarea").value = localStorage.getItem("iPadId");
  console.log(sessionStorage.getItem("matchNum"));
  savescout = sessionStorage.getItem("scoutInitials");

	console.log(sessionStorage.getItem('matchNumber'));
	if(sessionStorage.getItem('matchNumber') !== null) {
  incmatchnumber = sessionStorage.getItem('matchNumber');
		console.log("used the incremented match number");
		console.log("new match number value: " + incmatchnumber);
	}
  document.getElementById("matchNum").value = incmatchnumber;
  document.getElementById("scout").value = savescout;
}


/*function reset(id) {
  if (confirm(getQuote()) == true) {
    sessionStorage.removeItem("actionList");
    sessionStorage.removeItem("compressedList");
    sessionStorage.removeItem("extraData");
    console.log('1: ', sessionStorage.getItem("matchNum"));
    incmatchnumber = parseInt(sessionStorage.getItem("matchNum"));
    console.log('2: ', incmatchnumber);
    savescout = sessionStorage.getItem("scoutInitials");
    incmatchnumber++; //increses the variable by one
    console.log('3: ', incmatchnumber);
    sessionStorage.setItem("matchNum", incmatchnumber);
    sessionStorage.setItem("scoutInitials", savescout); 
    qrOut(id);
}
}
*/

function setTeam(matchnumb, id) {

  var teamnumb = document.getElementById("teamNum");

  var ipadID = id
	console.log(sessionStorage.getItem('matchNumber'));
	if(sessionStorage.getItem('matchNumber') !== null) {
  matchnum = sessionStorage.getItem('matchNumber');
		console.log("used the incremented match number");
	}
  matchnum = parseInt(matchnumb);

  if (blue1[0] != -12) {
    if (ipadID == 1) {

      document.getElementById("teamNum").value = blue1[matchnum - 1];
      console.log(blue1[matchnum - 1]);
    }
    if (ipadID == 2) {
      document.getElementById("teamNum").value = blue2[matchnum - 1];
      console.log(blue2[matchnum - 1]);
    }
    if (ipadID == 3) {
      document.getElementById("teamNum").value = blue3[matchnum - 1];
      console.log(blue3[matchnum - 1]);
    }
    if (ipadID == 4) {
      document.getElementById("teamNum").value = red1[matchnum - 1];
      console.log(red1[matchnum - 1]);
    }
    if (ipadID == 5) {
      document.getElementById("teamNum").value = red2[matchnum - 1];
      console.log(red2[matchnum - 1]);
    }
    if (ipadID == 6) {
      document.getElementById("teamNum").value = red3[matchnum - 1];
      console.log(red3[matchnum - 1]);
    }
  }
}

function setTeampull(matchnumb) {
  console.log("test")
  var teamnumb = document.getElementById("teamNum");

  var ipadID = localStorage.getItem("iPadId")

/*	console.log(sessionStorage.getItem('matchNumber'));
	if(sessionStorage.getItem('matchNumber') !== null) {
  matchnum = sessionStorage.getItem('matchNumber');
		console.log("used the incremented match number");
		console.log("new match number value: " + matchnum);
	}*/
  matchnum = parseInt(matchnumb);

  if (blue1[0] != -12) {
    if (ipadID == 1) {
      console.log("testagain")
      document.getElementById("teamNum").value = blue1[matchnum - 1];
      console.log(blue1[matchnum - 1]);
    }
    if (ipadID == 2) {
      document.getElementById("teamNum").value = blue2[matchnum - 1];
      console.log(blue2[matchnum - 1]);
    }
    if (ipadID == 3) {
      document.getElementById("teamNum").value = blue3[matchnum - 1];
      console.log(blue3[matchnum - 1]);
    }
    if (ipadID == 4) {
      document.getElementById("teamNum").value = red1[matchnum - 1];
      console.log(red1[matchnum - 1]);
    }
    if (ipadID == 5) {
      document.getElementById("teamNum").value = red2[matchnum - 1];
      console.log(red2[matchnum - 1]);
    }
    if (ipadID == 6) {
      document.getElementById("teamNum").value = red3[matchnum - 1];
      console.log(red3[matchnum - 1]);
    }
  }
}



function saveQR() {
  var compSavename = "comp" + extraData[1];
  var EDsaveName = "ED" + extraData[1];
  localStorage.setItem(compSavename, JSON.stringify(compressedList));
  localStorage.setItem(EDsaveName, JSON.stringify(extraData));
}

function loadTransition(times, page) {
  /*if(sessionStorage.getItem("fastLoad") == 'true') {
    for(let i = 1; i < times+1; i++) {
      document.getElementById('row' + i).style.transition = "none";
      document.getElementById('row' + i).style.opacity = "1";
      document.getElementById('row' + i).style.transform = "scale(1)";
    }
    sessionStorage.setItem("fastLoad", false);
  } else { 
  for(let i = 1; i < times+1; i++) {
    setTimeout(() => {
      document.getElementById('row' + i).style.opacity = "1";
      document.getElementById('row' + i).style.transform = "scale(1)";
    }, i*10);
    }
}*/
}

function leaveTransition(times, page) {
  /*setTimeout(() => {
      document.getElementById('body').setAttribute("onclick", "skipTransition('" + page + "');");
    }, 10); 
  let k = times;
  for(let i = 1; i < times+1; i++) {
    setTimeout(() => {
      document.getElementById('row' + k).style.transition = "opacity 1s ease-in-out, transform 0.5s cubic-bezier(.5,0,1,.24)"
      document.getElementById('row' + k).style.opacity = "0";
      document.getElementById('row' + k).style.transform = "scale(0.9)";
      k--;
    },i*1);
    }
    setTimeout(() => {
      window.location.href = window.location.href = './' + page + '.html';
    }, times*100); */

}
function skipTransition(page) {
  window.location.href = window.location.href = './' + page + '.html';
  sessionStorage.setItem("fastLoad", true);
}


function getOU() {
  const min = 3;
  const max = 11;
  Notes = (Math.random() * (max - min) + min).toFixed(2); // Rounds to 2 decimal places
  const min2 = 6;
  const max2 = 15;
  Notes2 = (Math.random() * (max2 - min2) + min2).toFixed(2); // Rounds to 2 decimal places

  const options = ["Teleop Speaker", "Teleop Amp", "Total Notes"];

  // Function to pick a random option
  function getRandomOption() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  // Assign the random option to a variable
  selectedOption = getRandomOption();

  // Create the OU variable based on the selected option
  let OU;
  if (selectedOption === "Teleop Speaker" || selectedOption === "Teleop Amp") {
    OU = `${"Over or Under"} ${Notes} ${selectedOption} ${"?"}`;
  } else if (selectedOption === "Total Notes") {
    OU = `${"Over or Under"} ${Notes2} ${selectedOption} ${"?"}`;
  }
  document.getElementById('OU').value = OU
}

function check() {
  console.log("check")
  var Aspeakercount = actionList.filter(item => item === "Speaker (A)").length;
  var Aampcount = actionList.filter(item => item === "Amp (A)").length;
  var Tspeakercount = actionList.filter(item => item === "Speaker (T)").length;
  var Tampcount = actionList.filter(item => item === "Amp (T)").length;
  var Totalnotes = Aspeakercount + Aampcount + Tspeakercount + Tampcount;
  if (selectedOption === "Teleop Speaker") {
    if (Tspeakercount > Notes) {
      answer = "Over";
      console.log("Over");
      console.log(selectedOption);
      console.log(Notes);
    } else {
      answer = "Under";
      console.log(selectedOption);
      console.log(Notes);
      console.log("Under");

    }
  } else if (selectedOption === "Teleop Amp") {
    if (Tampcount > Notes) {
      answer = "Over";
      console.log(selectedOption);
      console.log(Notes);
      console.log("Over");
    } else {
      answer = "Under";
      console.log(selectedOption);
      console.log(Notes);
      console.log("Under");

    }

  } else if (selectedOption === "Total Notes") {
    if (Totalnotes > Notes2) {
      answer = "Over";
      console.log(selectedOption);
      console.log(Notes2);
      console.log("Answer: Over");
    } else {
      answer = "Under";
      console.log(selectedOption);
      console.log(Notes2);
      console.log("Answer: Under");

    }

  }
  if (answer == extraData[4]) {
    extraData[4] = "Correct";
    console.log(extraData[4]);
  } else {
    extraData[4] = "Wrong";
    console.log(extraData[4]);
  }
}

// //Star function on the qualitative page
// document.addEventListener("DOMContentLoaded", function () {
//   const qualBoxes = document.querySelectorAll(".qualBox");

//   qualBoxes.forEach(box => {
//       const stars = box.querySelectorAll(".star");
//       const ratingValueElement = box.querySelector("p"); // Get the correct <p> inside the box

//       stars.forEach(star => {
//           star.addEventListener("click", function () {
//               let selectedValue = parseInt(star.getAttribute("data-value"));
//               let ratingId = ratingValueElement.id; // Get the ID of the <p> tag

//               // Update stars in this specific box
//               stars.forEach(s => {
//                   let starValue = parseInt(s.getAttribute("data-value"));
//                   s.classList.toggle("filled", starValue <= selectedValue);
//               });

//               // Update the rating display in this specific box
//               ratingValueElement.textContent = `Selected Rating: ${selectedValue}`;
//               logStarRating(ratingId, selectedValue);
//               // Log the updated extraData (for debugging)
//               console.log("Updated extraData:", extraData);
//           });
//       });
//   });
// });

function replaceClimb(action, number) {
  var index19 = actionList.indexOf("Deep Climb");
  var index20 = actionList.indexOf("Deep Fail");
  var index21 = actionList.indexOf("Shallow Climb");
  var index22 = actionList.indexOf("Shallow Fail");
  var index23 = actionList.indexOf("Park");
  var index = actionList.indexOf(action)

  if (index > -1){
    actionList.splice(index, 1)
  }
  if (index19 > -1) {
    actionList.splice(index19, 1);
  }
  if (index20 > -1 && action != "Park") {
    actionList.splice(index20, 1);
  }
  if (index21 > -1) {
    actionList.splice(index21, 1);
  }
  if (index22 > -1 && action != "Park") {
    actionList.splice(index22, 1);
  }
  if (index23 > -1 && (action == "Deep Climb" || action == "Shallow Climb")) {
    actionList.splice(index23, 1);
  }


  var compressed19 = compressedList.indexOf(19);
  var compressed20 = compressedList.indexOf(20);
  var compressed21 = compressedList.indexOf(21);
  var compressed22 = compressedList.indexOf(22);
  var compressed23 = compressedList.indexOf(23);
  var compressed = compressedList.indexOf(number);

  if(compressed > -1){
    compressedList.splice(compressed, 1)
  }
  if (compressed19 > -1) {
    compressedList.splice(compressed19, 1);
  }
  if (compressed20 > -1 && (number != 23)) {
    compressedList.splice(compressed20, 1);
  }
  if (compressed21 > -1) {
    compressedList.splice(compressed21, 1);
  }
  if (compressed22 > -1 && number != 23) {
    compressedList.splice(compressed22, 1);
  }
  if (compressed23 > -1 && (number == 19 || number == 21)) {
    compressedList.splice(compressed23, 1);
  }

  console.log(actionList);
  updateLog();

}

function ChangeBorder(boxId) {
  var x = boxId;
  document.getElementById(boxId).style.border = "solid #AA00FF";
  setTimeout(() => {
    document.getElementById(boxId).style.border = "solid rgb(255, 255, 255)";
  }, 500);
}
// //Star function on the qualitative page
// document.addEventListener("DOMContentLoaded", function () {
//   const qualBoxes = document.querySelectorAll(".qualBox");

//   qualBoxes.forEach(box => {
//       const stars = box.querySelectorAll(".star");
//       const ratingValueElement = box.querySelector("p"); // Get the correct <p> inside the box

//       stars.forEach(star => {
//           star.addEventListener("click", function () {
//               let selectedValue = parseInt(star.getAttribute("data-value"));
//               let ratingId = ratingValueElement.id; // Get the ID of the <p> tag

//               // Update stars in this specific box
//               stars.forEach(s => {
//                   let starValue = parseInt(s.getAttribute("data-value"));
//                   s.classList.toggle("filled", starValue <= selectedValue);
//               });

//               // Update the rating display in this specific box
//               ratingValueElement.textContent = `Selected Rating: ${selectedValue}`;
//               logStarRating(ratingId, selectedValue);
//               // Log the updated extraData (for debugging)
//               console.log("Updated extraData:", extraData);
//           });
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const ratingContainers = document.querySelectorAll(".qualBox");
  
//   ratingContainers.forEach(container => {
//       const stars = container.querySelectorAll(".star");
//       const ratingDisplay = container.querySelector(".rating");
//       const ratingCategory = container.getAttribute("data-rating");
      
//s.forEach(star => {
//           star.addEventListener("click", function () {
//               const selectedRating = this.getAttribute("data-value");
//               ratingDisplay.textContent = `Selected Rating: ${selectedRating}`;
//               console.log(`Rating updated for category ${ratingCategory}: ${selectedRating}`);
//           });
//       });
//   });
// });


function logStarRating(id, rating){
  if(id === 'ratingValue1') {
  extraData[5] = rating;
} else if(id === 'ratingValue2') {
extraData[6] = rating;
} else if(id === 'ratingValue3') {
extraData[7] = rating;
} else if(id === 'ratingValue4') {
extraData[8] = rating;
}
};

function ChangeRatingValue(selectedRating, value){
  if(!isNaN(value)){
    document.getElementById(selectedRating).innerText = "Selected Rating: " + value;
  } else {
    document.getElementById(selectedRating).innerText = "Selected Rating: 0";
  }
}

function addStarRate(id) {
  let rateText = id.split(";")[0];
  console.log(rateText);
  let value = Number(id.split(";")[1]);
  const ogValue = value;
  console.log(value);
  console.log("Clearing Stars...");
  let listOfClasses = "";
  if(value > 0) {
    listOfClasses = Array.from(document.getElementById(id).classList);
  }
  
  if(listOfClasses.includes("lastClicked")) {
    value = 0;
  }

  //Clears all the filled values regardless if they have them, screw optimizations
  for(let i = 1; i < 6; i++) {
    let starID = rateText + ";" + i;
    document.getElementById(starID).classList.remove("filled");
  }
  console.log("Filling Stars...");

  //Fills the stars that need it
    for(let i = 1; i < value+1; i++) {
      let starID = rateText + ";" + i;
      document.getElementById(starID).classList.add("filled");
    }
  //Basicly a fancy if statement
  switch (rateText) {
    case "clutter":
      console.log("Updating Clutter Star Rating to " + value);
      extraData[5] = value;
      ChangeRatingValue("ratingValue1", value)
      break;
    case "driver":
      console.log("Updating Driver Skill Star Rating. " + value);
      extraData[6] = value;
      ChangeRatingValue("ratingValue2", value)
      break;
    case "accuracy":
      console.log("Updating Accuracy Star Rating " + value);
      extraData[7] = value;
      ChangeRatingValue("ratingValue3", value)
      break;
    case "defence":
      console.log("Updating Defence Star Rating " + value);
      extraData[8] = value;
      ChangeRatingValue("ratingValue4", value)
      break;
  }

  console.log(extraData);
  
  if(ogValue > 0) {
    updateLastClicked(id);
  } else {
    resetAllClicked(rateText + ";" + 1);
  }
    
  saveData();
}

function resetQual() {
  const goOn = confirm("Are you sure you want to reset the stars?");
  if(goOn) {
    addStarRate("defence;0");
    addStarRate("clutter;0");
    addStarRate("driver;0");
    addStarRate("accuracy;0");
  }
}

function resetAllClicked(elementID) {
  const element = document.getElementById(elementID);
  const parentElement = element.parentNode;
  const parentId = parentElement.id;
  
  const nodesList = parentElement.getElementsByClassName("lastClicked");
  
  const nodes = Array.from(nodesList);
  
   for(let i in nodes) {
     nodes[i].classList.remove("lastClicked");
  }
  const check = parentElement.getElementsByClassName("lastClicked");
}

function updateLastClicked(elementID) {
  
  const listOfClasses = Array.from(document.getElementById(elementID).classList);
  
  
  const element = document.getElementById(elementID);
  const parentElement = element.parentNode;
  const parentId = parentElement.id;
  
  const nodesList = parentElement.getElementsByClassName("lastClicked");
  
  const nodes = Array.from(nodesList);
  
   for(let i in nodes) {
     nodes[i].classList.remove("lastClicked");
  }
  
  const check = parentElement.getElementsByClassName("lastClicked");
  
  if(listOfClasses.includes("lastClicked")) {
    document.getElementById(elementID).classList.remove("lastClicked");
  } else {
    document.getElementById(elementID).classList.add("lastClicked");
  }
  
}

function leaveCheck() {

	if(compressedList.includes(1)) {
		console.log("Leave Pressed");
	} else if(compressedList.includes(0) || compressedList.includes(2) || compressedList.includes(3) || compressedList.includes(4) || compressedList.includes(5) || compressedList.includes(6) || compressedList.includes(7) || compressedList.includes(8) || compressedList.includes(9) || compressedList.includes(25)) {
		console.log("Someone forgot to press the button :(");
		replaceLeave();
		addAction("Leave", 1);
	} else {
		let leave = confirm("Has your robot left? \n\nOk = Yes  \nCancel = No");
		if(leave) {
			console.log("Someone forgot to press it :(");
			replaceLeave();
			addAction("Leave", 1);
	}
	}
}

let zoom = false;
let madeBubbles = false;
let regenOpen = false;
let resetMenuVisible = false;



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
	  qr.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    return;
  }
  if(!zoom) {
    qr.style.transform = "scale(1.25, 1.25)";
    qr.style.backgroundColor = "white";
    zoom = true;
    return;
  }
}

/*function reset(action) {
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
  
}*/

function toQuotes() {
  /*body.innerHTML += '<svg width="100vw" height="120vh" style="top:110vh;animation: slide-in 2.5s linear;box-shadow: 0px 0px 100px white;"> \n <rect width="100vw" height="120vh" x="0" y="0" rx="0" ry="20" fill="white" /> \n </svg>';*/
  document.getElementById("yesButton").style.transform = "scale(1.2, 1.2)";
  document.getElementById('changeStyle').innerHTML = "";
  document.getElementById('waveHolder').style.animationName = "slide-in-no-fade";
	extraData[1] = parseInt(extraData[1])
	console.log(extraData[1] + " adding 1 gives.. " + (extraData[1]+1));
	sessionStorage.setItem('matchNumber', extraData[1]+1);
	console.log("New Match Number: " + sessionStorage.getItem('matchNumber'));
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
    insertQuote.innerHTML += "<button onclick='resetToIndex()' class='continuieButton' id='contineButton'>Continue</button>";
    var sums = Array(27).fill(0);
    for (const item of compressedList) {
      sums[item]++;
    }
    //alert(sums);
    localStorage.setItem("oldCompList" + extraData[1], sums);
    localStorage.setItem("oldExtraData" + extraData[1], extraData);
}, 20 * repeat);

  }, 3400);
  
  setTimeout(() => {
    
    
    
    //alert(compressedList);
    
    //window.location.href = `./index.html`;
    
    
    
  }, 3500+length);
  
  
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


function resetToIndex() {
  
  document.getElementById('contineButton').innerText = "";
  document.getElementById('contineButton').style.transform = 'scale(7,30)';

  setTimeout(() => {
    window.location.href = `./index.html`;
  }, 750);
  setTimeout(() => {
    
  }, 850);
  
}
