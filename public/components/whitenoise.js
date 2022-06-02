// Build an array to get the music name, image, and sound. It can make the code easier.
// Based on the property of the parcel, I cannot get images and music based on the sample way, therefore, I use a new URL('src', import.meta.url) to find my images and sounds.
let AllWhiteNoise = [
    {
      name:"Falme",
      img: new URL('../images/sunset.png', import.meta.url),
      music: new URL('../Flame.mp3', import.meta.url)
    },
    
    {
      name:"Rain",
      img: new URL('../images/rainimg.png', import.meta.url),
      music: new URL('../rain.mp3', import.meta.url)
    },
  
    {
      name:"Sea Waves",
      img: new URL('../images/sea.png', import.meta.url),
      music: new URL('../sea.mp3', import.meta.url)
    }
  ];

let box = document.getElementById("whitenoise");
let size = document.getElementById("big");

// Add the click function to the open in full button.
size.addEventListener("click", function(){
    console.log("lala");
    box.classList.toggle("active");
});

// get the elements in the HTML
const whiteNoise = document.querySelector("#whitenoise");
whiteNoiseImg = whiteNoise.querySelector("#img_area > img");
whiteNoiseName = whiteNoise.querySelector("#whitename");
whiteNoiseSound = whiteNoise.querySelector("#audio");
playBtn = whiteNoise.querySelector("#play");
previousBtn = whiteNoise.querySelector("#previous");
nextBtn = whiteNoise.querySelector("#next");
progressArea = whiteNoise.querySelector("#progress");
progressBar = whiteNoise.querySelector("#progressbar");

// Set the number of the music, it can be identify and play the relavent white noise
let musicIndex = 1;

//   let AllWhiteNoise;

// Load the whitenoise
window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
})

// Select the music from the array, the array is [0, 1, 2], so if I want to choose I need to set the white noise index to minus 1。
// And get the value from array property
function loadMusic(indexNum){
  whiteNoiseName.innerText = AllWhiteNoise[indexNum-1].name;
  whiteNoiseImg.src = AllWhiteNoise[indexNum-1].img;
  whiteNoiseSound.src = AllWhiteNoise[indexNum-1].music;
}

function previousWhiteNoise(){
   musicIndex--;
   loadMusic(musicIndex);
   playMusic();
};

function nextWhiteNoise(){
  musicIndex++;
  loadMusic(musicIndex);
  playMusic();
};

// Changing the play and pause buttons after clicking, and clicking the play button can play the white noise and the pause button can stop the white noise.
function playMusic(){
  whiteNoise.classList.add("paused");
  playBtn.querySelector("i").innerText = "pause_circle";
  whiteNoiseSound.play();
}

playBtn.addEventListener("click", ()=>{
  const isWhiteNoisePaused = whiteNoise.classList.contains("paused");
  isWhiteNoisePaused ? pauseMusic() : playMusic();
});

function pauseMusic(){
  whiteNoise.classList.remove("paused");
  playBtn.querySelector("i").innerText = "play_circle";
  whiteNoiseSound.pause();
}


// Add the next and previous button, after click can change the white noise
previousBtn.addEventListener("click", ()=>{
  previousWhiteNoise();
});

nextBtn.addEventListener("click", ()=>{
  nextWhiteNoise();
});

// make the progress bar and duration time can be dragged, but I'm not achieving it.
// Using meth to count the duration and the time.
whiteNoiseSound.addEventListener("timeupdate", (e)=>{
  console.log(e);
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration)*100;
  progressBar.style.width = `${progressWidth}%`;
});


// I want to adding some js to adjust the progress bar, but I didn't make it.
progressArea.addEventListener("click", (e)=>{
 let clickedOffSetX = e.offsetX;
 whiteNoiseSound.currentTime = clickedOffSetX;
})