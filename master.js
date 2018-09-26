//Created elements are enclosed in a function to call them at a later time.
function showModal() {
// Modal "Wrapper"
var modalBox = document.createElement('div');
modalBox.style.width = "500px";
modalBox.style.height = "600px";
modalBox.style.backgroundColor = "white";
modalBox.style.marginLeft = "auto";
modalBox.style.marginRight = "auto";
modalBox.style.marginTop = "10vh";
modalBox.style.borderTop = "5px solid #7FFADC"
// modalBox.style.border = "1px solid black";
modalBox.style.borderRadius = "1%";
modalBox.style.textAlign = "center";

document.body.appendChild(modalBox);

// 'X' button
var xButton = document.createElement('div');
xButton.innerText = "X";
xButton.style.color = "#192249";
xButton.style.font = "17px Helvetica";
xButton.style.width = "20px";
xButton.style.height = "20px";
xButton.style.border = "1px solid #192249";
xButton.style.borderRadius = "9%";
xButton.style.marginTop = "10px";
xButton.style.marginRight = "10px";
xButton.style.float = "right";
xButton.addEventListener('click', function() {
  modalBox.style.display = "none";
});
xButton.style.cursor = "pointer";

modalBox.appendChild(xButton);

// 'SIGN IN' text
var h1text = document.createElement('h1');
h1text.innerText = "SIGN IN";
h1text.style.color = "#192249";
h1text.style.font = "bold 36px Helvetica";
h1text.style.marginTop = "125px";
h1text.style.letterSpacing = "1px";

modalBox.appendChild(h1text);

// USERNAME BOX
var username = document.createElement('input');
username.setAttribute("type", "text");
username.style.height = "30px";
username.style.width = "330px";
username.style.font = "13px Helvetica";
username.style.marginTop = "65px";

modalBox.appendChild(username);

// PASSWORD BOX
var password = document.createElement('input');
password.setAttribute("type", "password");
password.style.height = "30px";
password.style.width = "325px";
password.style.font = "13px Helvetica";
password.style.marginTop = "40px";

modalBox.appendChild(password);

// SUBMIT BUTTON - link to clock
var submitButton = document.createElement('div');
submitButton.style.width = "325px";
submitButton.style.backgroundColor = "#7FFADC";
submitButton.innerText = "SUBMIT (CLOCK)";
submitButton.style.textAlign = "center";
submitButton.style.verticalAlign = "center";
submitButton.style.font = "lighter 20px Helvetica";
submitButton.style.color = "#192249";
submitButton.style.borderRadius = "5px";
submitButton.style.paddingTop = "20px";
submitButton.style.paddingBottom = "20px";
submitButton.style.marginTop = "40px";
submitButton.style.marginLeft = "auto";
submitButton.style.marginRight = "auto";
submitButton.style.letterSpacing = "5px";
submitButton.addEventListener('click', function() {
  location.href = "clock.html"
});
submitButton.style.cursor = "pointer";

modalBox.appendChild(submitButton);
}

// Calls showModal after 3 seconds (brings up the "popup").
function start() {
  setTimeout(showModal, 3000);
}

// Runs start function upon load.
window.addEventListener('load', start);

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var clockhours = document.getElementById('clockhours');
var clockminutes = document.getElementById('clockminutes');
var clockseconds = document.getElementById('clockseconds');
var clockwrapper = document.getElementById('clockwrapper');
var centerwrapper = document.getElementById('centerwrapper');

// Styling
clockhours.style.color = "white";
clockhours.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
clockminutes.style.color = "white";
clockminutes.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
clockseconds.style.color = "white";
clockseconds.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";

var currenthours = hoursTwoDigits();
var currentminutes = minutesTwoDigits();
var currentseconds = secondsTwoDigits();

// Function that returns the current hour in two digits (if between 0 and 10)
function hoursTwoDigits() {
  var currentdateandtime = new Date();
  var h = currentdateandtime.getHours().toString();

  if(0 <= h && h < 10) {
    return "0" + h;
  }
  else {
    return h;
  }
}

// Function that returns the current minutes in two digits (if between 0 and 10)
function minutesTwoDigits() {
  var currentdateandtime = new Date();
  var m = currentdateandtime.getMinutes().toString();

  if(0 <= m && m < 10) {
    return "0" + m;
  }
  else {
    return m;
  }
}

// Function that returns the current seconds in two digits (if between 0 and 10)
function secondsTwoDigits() {
  var currentdateandtime = new Date();
  var s = currentdateandtime.getSeconds().toString();

  if(0 <= s && s < 10) {
    return "0" + s;
  }
  else {
    return s;
  }
}

// Function that updates the time and color, interval of 1000ms = 1s
function updateTimeAndColor() {
  setInterval(function() {
    var h = hoursTwoDigits();
    var m = minutesTwoDigits();
    var s = secondsTwoDigits();

    //concatenate the three into 1 six-digit string
    var timehex = h + m + s;

    clockhours.innerText = h;
    clockminutes.innerText = m;
    clockseconds.innerText = s;

    clockwrapper.style.backgroundColor = "#" + timehex;
  }, 1000)
}

// Page loading in calls the updateTimeAndColor function
window.addEventListener('load', updateTimeAndColor);

centerwrapper.addEventListener('click', function() {
  location.href = "landing.html"
});
