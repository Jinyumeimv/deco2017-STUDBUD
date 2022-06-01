// Get the items from DOM
let stopWatch = document.getElementById("spopup");
let popup = document.getElementById("stopWatch");

// Add the click funtion to the stop watch button which on the navigation bar, it can be used to active the stopwatch.
popup.addEventListener("click", function(){
    console.log("lala");
    stopWatch.classList.toggle("active");
});

window.onload = function () {
    var seconds = 00;
    var secs = 00;
    var tens = 00; 
    var actualTens = document.getElementById("tens")
    var actualSecs = document.getElementById("seconds")
    var buttonStart = document.getElementById('stopwatch_start');
    var buttonStop = document.getElementById('stopwatch_stop');
    var buttonReset = document.getElementById('stopwatch_reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       console.log(a);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  // reset the function can make the stopwatch back to the initial and the stopwatch can be restarted.
    buttonReset.onclick = function() {
       clearInterval(Interval);
        tens = "00";
        secs = "00";
        actualTens.innerHTML = tens;
        actualSecs.innerHTML = secs;
    }
    
     
    
    function startTimer () {
      tens++; 
      // Use if function to make the stopwatch can running. 
      if(tens <= 9){
        actualTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        actualTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("secs");
        secs++;
        actualSecs.innerHTML = "0" + secs;
        tens = 0;
        actualTens.innerHTML = "0" + 0;
      }
      
      if (secs > 9){
        actualSecs.innerHTML = secs;
      }
    
    }
    
  
  }