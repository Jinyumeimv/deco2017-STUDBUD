let AllWhiteNoise = [
    {
      name:"Falme",
      img: "sunset.png",
      music:"Flame.mp3"
    },
    
    {
      name:"Rain",
      img: "rainimg.png",
      music:"rain.mp3"
    },
  
    {
      name:"Sea Waves",
      img: "sea.png",
      music:"sea.mp3"
    }
  ];

let box = document.getElementById("whitenoise");
let size = document.getElementById("big");

size.addEventListener("click", function(){
    console.log("lala");
    box.classList.toggle("active");
});

const whiteNoise = document.querySelector("#whitenoise");
whiteNoiseImg = whiteNoise.querySelector("#img_area > img");
whiteNoiseName = whiteNoise.querySelector("#whitename");
whiteNoiseSound = whiteNoise.querySelector("#audio");
playBtn = whiteNoise.querySelector("#play");
previousBtn = whiteNoise.querySelector("#previous");
nextBtn = whiteNoise.querySelector("#next");
progressArea = whiteNoise.querySelector("#progress");
progressBar = whiteNoise.querySelector("#progressbar");

let musicIndex = 1;

//   let AllWhiteNoise;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
})

function loadMusic(indexNum){
  whiteNoiseName.innerText = AllWhiteNoise[indexNum-1].name;
  whiteNoiseImg.src = `./images/${AllWhiteNoise[indexNum-1].img}`;
  whiteNoiseSound.src = `${AllWhiteNoise[indexNum-1].music}`;
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

function playMusic(){
  whiteNoise.classList.add("paused");
  playBtn.querySelector("i").innerText = "pause_circle";
  whiteNoiseSound.play();
}

function pauseMusic(){
  whiteNoise.classList.remove("paused");
  playBtn.querySelector("i").innerText = "play_circle";
  whiteNoiseSound.pause();
}

playBtn.addEventListener("click", ()=>{
  const isWhiteNoisePaused = whiteNoise.classList.contains("paused");
  isWhiteNoisePaused ? pauseMusic() : playMusic();
});

previousBtn.addEventListener("click", ()=>{
  previousWhiteNoise();
});

nextBtn.addEventListener("click", ()=>{
  nextWhiteNoise();
});

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