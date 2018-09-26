var modalBox = document.createElement('div');
modalBox.style.width = "40vw";
modalBox.style.height = "80vh";
modalBox.style.marginLeft = "auto";
modalBox.style.marginRight = "auto";
modalBox.style.marginTop = "10vh";
modalBox.style.border = "1px solid black";
modalBox.style.borderRadius = "5%";

document.body.appendChild(modalBox);












var clockhours = document.getElementById('clockhours');
var clockminutes = document.getElementById('clockminutes');
var clockseconds = document.getElementById('clockseconds');
var clockwrapper = document.getElementById('clockwrapper');

clockhours.style.color = "white"
clockhours.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
clockminutes.style.color = "white"
clockminutes.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
clockseconds.style.color = "white"
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

    var timehex = h + m + s;

    clockhours.innerText = h;
    clockminutes.innerText = m;
    clockseconds.innerText = s;

    clockwrapper.style.backgroundColor = "#" + timehex;
  }, 1000)
}

// Page loading in calls the updateTimeAndColor function
window.addEventListener('load', updateTimeAndColor);
