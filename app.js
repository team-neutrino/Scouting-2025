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
var blue1 = [3928,
  1939,
  1997,
  4766,
  1806,
  4187,
  9031,
  7662,
  5801,
  4766,
  5809,
  2996,
  9031,
  1939,
  1710,
  1756,
  4187,
  3184,
  4213,
  5141,
  4522,
  1810,
  6419,
  4646,
  8112,
  1997,
  1756,
  3284,
  167,
  1785,
  5968,
  7662,
  6419,
  2996,
  9316,
  1785,
  1763,
  2357,
  1736,
  3284,
  1785,
  1939,
  1763,
  4187,
  3928,
  1939,
  1987,
  7662,
  9031,
  3284,
  4646,
  2718,
  8825,
  1723,
  3184,
  2718,
  4766,
  1806,
  8825,
  5968,
  5576,
  1987,
  4766,
  1736,
  1810,
  5968];
var blue2 = [167,
  8825,
  5809,
  9570,
  1785,
  1763,
  1987,
  1736,
  5968,
  1763,
  1785,
  1806,
  5141,
  1736,
  1763,
  2996,
  2357,
  8825,
  1710,
  5126,
  1756,
  2718,
  3184,
  5809,
  4522,
  4213,
  6419,
  9316,
  9570,
  5576,
  3928,
  8112,
  1939,
  5141,
  8825,
  4187,
  4213,
  4766,
  5968,
  1997,
  9316,
  167,
  6419,
  4646,
  5809,
  8112,
  1806,
  1723,
  2357,
  8112,
  1987,
  4766,
  4522,
  2996,
  5801,
  4646,
  5576,
  1810,
  7662,
  1723,
  3928,
  2718,
  5801,
  5126,
  2357,
  1939];
var blue3 = [6419,
  1987,
  5141,
  7662,
  2357,
  9316,
  1756,
  167,
  8825,
  1810,
  1710,
  1997,
  7662,
  4646,
  9570,
  5126,
  3928,
  1723,
  5801,
  1987,
  3928,
  8825,
  9316,
  5576,
  5126,
  1723,
  2357,
  4646,
  5801,
  1736,
  4213,
  1763,
  2718,
  5576,
  1997,
  9570,
  4522,
  8112,
  1710,
  4187,
  2996,
  1756,
  9031,
  4213,
  9570,
  1785,
  167,
  5576,
  5126,
  1710,
  3184,
  9316,
  1806,
  5809,
  4187,
  5141,
  4522,
  1756,
  3284,
  6419,
  9031,
  9570,
  5809,
  3184,
  2996,
  3284];
var red1 = [4213,
  1756,
  8112,
  1736,
  5801,
  4522,
  4646,
  9570,
  5141,
  9316,
  4187,
  2718,
  1987,
  9316,
  5968,
  4522,
  167,
  5576,
  8112,
  1736,
  1997,
  1723,
  1806,
  3284,
  2996,
  3928,
  3184,
  1710,
  1810,
  5809,
  2357,
  4646,
  1810,
  9031,
  5809,
  1723,
  6419,
  5576,
  5809,
  5126,
  3928,
  5141,
  5801,
  5126,
  8825,
  1710,
  3184,
  9316,
  6419,
  5801,
  9570,
  1785,
  167,
  4213,
  1763,
  5126,
  9570,
  4213,
  2357,
  2996,
  1763,
  1806,
  1756,
  167,
  5141,
  1997];
var red2 = [1810,
  5968,
  3184,
  3284,
  5126,
  1710,
  3928,
  3284,
  3184,
  5126,
  4522,
  5576,
  4213,
  5801,
  4766,
  1810,
  1997,
  6419,
  9570,
  2996,
  2357,
  9031,
  4187,
  1785,
  7662,
  4766,
  5968,
  2718,
  9031,
  8825,
  4522,
  1806,
  1710,
  5801,
  167,
  3284,
  4646,
  1987,
  9031,
  9570,
  7662,
  1723,
  2718,
  1810,
  1736,
  1756,
  2996,
  5141,
  4187,
  1763,
  1997,
  1756,
  5576,
  1939,
  1987,
  3928,
  9316,
  1736,
  1710,
  167,
  1785,
  9316,
  7662,
  1723,
  8112,
  6419];
var red3 = [5576,
  4646,
  9031,
  2718,
  1723,
  2996,
  8112,
  6419,
  4213,
  1939,
  1723,
  2357,
  3284,
  8112,
  1785,
  5809,
  2718,
  1806,
  5968,
  1763,
  7662,
  4766,
  1939,
  167,
  1987,
  5141,
  1763,
  1806,
  1939,
  4187,
  3184,
  4766,
  1987,
  1736,
  5126,
  1756,
  1810,
  5801,
  2718,
  8825,
  3184,
  1806,
  4522,
  3284,
  2357,
  1997,
  4766,
  5968,
  1736,
  3928,
  1810,
  5141,
  5968,
  7662,
  1997,
  1785,
  9031,
  5809,
  1939,
  8112,
  4646,
  4213,
  4187,
  1710,
  8825,
  4522];
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

function replaceFail() {
  var index7 = actionList.indexOf("Climb");
  var index8 = actionList.indexOf("Failed Climb");


  if (index7 > -1) {
    actionList.splice(index7, 1);
  }
  if (index8 > -1) {
    actionList.splice(index8, 1);
  }



  var compressed7 = compressedList.indexOf(11);
  var compressed8 = compressedList.indexOf(10);



  if (compressed7 > -1) {
    compressedList.splice(compressed7, 1);
  }
  if (compressed8 > -1) {
    compressedList.splice(compressed8, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceHarmony() {
  var index9 = actionList.indexOf("Harmony");
  var index8 = actionList.indexOf("Failed Climb");


  if (index9 > -1) {
    actionList.splice(index9, 1);
  }
  if (index8 > -1) {
    actionList.splice(index8, 1);
  }



  var compressed9 = compressedList.indexOf(15);
  var compressed8 = compressedList.indexOf(10);



  if (compressed9 > -1) {
    compressedList.splice(compressed9, 1);
  }
  if (compressed8 > -1) {
    compressedList.splice(compressed8, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceLeave() {
  var leaveAction = actionList.indexOf("Leave");



  if (leaveAction > -1) {
    actionList.splice(leaveAction, 1);
  }
  var leaveCompressed = compressedList.indexOf(14);

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
  var disabledCompressed = compressedList.indexOf(13);

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
  incmatchnumber = parseInt(sessionStorage.getItem("matchNum"));
  savescout = sessionStorage.getItem("scoutInitials");
  console.log(incmatchnumber);
  if (isNaN(incmatchnumber)) {
    console.log("its NaN :(");
    incmatchnumber = 1;
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

function logStarRating(id, rating){
  if(id === 'ratingValue1') {
  extraData[4] = rating;
} else if(id === 'ratingValue2') {
extraData[5] = rating;
} else if(id === 'ratingValue3') {
extraData[6] = rating;
} else if(id === 'ratingValue4') {
extraData[7] = rating;
}
};

function replaceClimb() {
  var index19 = actionList.indexOf("Deep Climb");
  var index20 = actionList.indexOf("Deep Fail");
  var index21 = actionList.indexOf("Shallow Climb");
  var index22 = actionList.indexOf("Shallow Fail");
  var index23 = actionList.indexOf("Park");


  if (index19 > -1) {
    actionList.splice(index19, 1);
  }
  if (index20 > -1) {
    actionList.splice(index20, 1);
  }
  if (index21 > -1) {
    actionList.splice(index21, 1);
  }
  if (index22 > -1) {
    actionList.splice(index22, 1);
  }
  if (index23 > -1) {
    actionList.splice(index23, 1);
  }


  var compressed19 = compressedList.indexOf(19);
  var compressed20 = compressedList.indexOf(20);
  var compressed21 = compressedList.indexOf(21);
  var compressed22 = compressedList.indexOf(22);
  var compressed23 = compressedList.indexOf(23);



  if (compressed19 > -1) {
    compressedList.splice(compressed19, 1);
  }
  if (compressed20 > -1) {
    compressedList.splice(compressed20, 1);
  }
  if (compressed21 > -1) {
    compressedList.splice(compressed21, 1);
  }
  if (compressed22 > -1) {
    compressedList.splice(compressed22, 1);
  }
  if (compressed23 > -1) {
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
      
//       stars.forEach(star => {
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



function addStarRate(id) {
  let rateText = id.split(";")[0];
  console.log(rateText);
  let value = Number(id.split(";")[1]);
  console.log(value);
  console.log("Clearing Stars...");

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
      break;
    case "driver":
      console.log("Updating Driver Skill Star Rating. " + value);
      extraData[6] = value;
      break;
    case "accuracy":
      console.log("Updating Accuracy Star Rating " + value);
      extraData[7] = value;
      break;
    case "defence":
      console.log("Updating Defence Star Rating " + value);
      extraData[8] = value;
      break;
  }

  console.log(extraData);
  saveData();
}

