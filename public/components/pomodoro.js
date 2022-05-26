let box = document.getElementById("pomodorotimer");
let size = document.getElementById("full_screen");
let countDown = document.getElementsByTagName("p");

size.addEventListener("click", function(){
    console.log("lala");
    box.classList.toggle("active");
});


var start = document.getElementById("start");
var giveUp = document.getElementById("giveup");

var focusMins = document.getElementById("f_minutes");
var breakMins = document.getElementById("b_minutes");

var focusSec = document.getElementById("f_seconds");
var breakSec = document.getElementById("b_seconds");

var cycles = document.getElementById("cycle");

var startTimer;

start.addEventListener('click', function(){
  if(startTimer === undefined){
    startTimer = setInterval(timer,1000)
  }else{
  alert("Timer is already running");
  console.log(lala);
  }
})

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
  if(focusSec.innerText !=0){
    focusSec.innerText--;
  }else if(focusMins.innerText !=0 && focusSec.innerText == 0){
    focusSec.innerText = 59;
    focusMins.innerText--;
  }

  if(focusMins.innerText == 0 && focusSec.innerText == 0){
    // if(breakSec.innerText !=0){
       breakSec.innerText--;
    }else if(breakMins.innertext != 0 && breakSec.innerText == 0){
    breakSec.innerText = 59;
    breakMins.innerText--;
  }
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