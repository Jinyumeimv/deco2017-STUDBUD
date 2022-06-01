let box = document.getElementById("pomodorotimer");
let size = document.getElementById("full_screen");
let countDown = document.getElementsByTagName("p");

size.addEventListener("click", function(){
    console.log("lala");
    box.classList.toggle("active");
});

// var the element and get the DOM elements.
var start = document.getElementById("start");
var giveUp = document.getElementById("giveup");

var focusMins = document.getElementById("f_minutes");
var breakMins = document.getElementById("b_minutes");

var focusSec = document.getElementById("f_seconds");
var breakSec = document.getElementById("b_seconds");

var cycles = document.getElementById("cycle");

var startTimer;
// After clicking the start button, the countdown will run and if the user clicks it again, the system will alert the user that: Timer is already running. Which can avoid repeat operations. 
start.addEventListener('click', function(){
  if(startTimer === undefined){
    startTimer = setInterval(timer,1000)
  }else{
  alert("Timer is already running");
  console.log(lala);
  }
})
// give up the Pomodoro timer which is running, the time will back to the initial time. And the user can start a new timer or stop focusing.
giveUp.addEventListener('click', function(){
  focusMins.innerText = 25;
  focusSec.innerText = "00";

  breakMins.innerText = 5;
  breakSec.innerText= "00";
  
  stopInterval()
  startTimer = undefined;
  console.log(hehe);
})

function timer(){
  // Use the if function to discuss the focus time and the rest time separately. When the if function ends, the if else function starts to run, so the pomodoro timer can start the countdown.
  if(focusSec.innerText !=0){
    focusSec.innerText--;
  }else if(focusMins.innerText !=0 && focusSec.innerText == 0){
    focusSec.innerText = 59;
    focusMins.innerText--;
  }

  if(focusMins.innerText == 0 && focusSec.innerText == 0){
       breakSec.innerText--;
    }else if(breakMins.innertext != 0 && breakSec.innerText == 0){
    breakSec.innerText = 59;
    breakMins.innerText--;
  }

  // When all the numbers are equal to 0, the cycle starts to increase by one and then counts down a second time.
  if(focusMins.innerText == 0 && focusSec.innerText == 0 && breakMins.innerText == 0 && breakSec.innerText == 0 ){
  focusMins.innerText = 25;
  focusSec.innerText = "00";

  breakMins.innerText = 5;
  breakSec.innerText= "00";

  cycles.innerText ++;
}
}



function stopInterval(){
  clearInterval(startTimer);
}