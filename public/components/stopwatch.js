// Get the items from DOM
let stopWatch = document.getElementById("spopup");
let popup = document.getElementById("stopWatch");

// Add the click funtion to the stop watch button which on the navigation bar, it can be used to active the stopwatch.
popup.addEventListener("click", function(){
    console.log("lala");
    stopWatch.classList.toggle("active");
});

window.onload = function () {
    var secs = 00;
    var tens = 00;  

    var actualSecs = document.getElementById("seconds");
    var actualTens = document.getElementById("tens");
   
    var buttonStart = document.getElementById('stopwatch_start');
    var buttonStop = document.getElementById('stopwatch_stop');
    var buttonReset = document.getElementById('stopwatch_reset');
    var Interval ;
  
    // Start the stopwatch through click the start button
    buttonStart.onclick = function() {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      console.log(a);
    }
    
    // End the stopwatch through click the stop button
    buttonStop.onclick = function() {
     clearInterval(Interval);
    }
    
  // reset the function can make the stopwatch back to the initial and the stopwatch can be restarted.
    buttonReset.onclick = function() {
       clearInterval(Interval);
        secs = "00";
        tens = "00";
        actualSecs.innerHTML = secs;
        actualTens.innerHTML = tens;
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