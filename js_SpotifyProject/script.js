console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("songs/1.mp3");
let playingGifOn = document.getElementById("playingGifOn");

let songs = [
  {
    songName: "Let me love you",
    filePath: "songs/1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "Let me love you",
    filePath: "songs/2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "Let me love you",
    filePath: "songs/3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "Let me love you",
    filePath: "songs/4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "Let me love you",
    filePath: "songs/5.mp3",
    coverPath: "5.jpg",
  },
  {
    songName: "Let me love you",
    filePath: "songs/6.mp3",
    coverPath: "6.jpg",
  },
  // {
  //   songName: "Let me love you",
  //   filePath: "songs/7.mp3",
  //   coverPath: "7.jpg",
  // },
  // {
  //   songName: "Let me love you",
  //   filePath: "songs/8.mp3",
  //   coverPath: "8.jpg",
  // },
  // {
  //   songName: "Let me love you",
  //   filePath: "songs/9.mp3",
  //   coverPath: "9.jpg",
  // },
  // {
  //   songName: "Let me love you",
  //   filePath: "songs/10.mp3",
  //   coverPath: "10.jpg",
  // },
];
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    playingGifOn.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    playingGifOn.style.opacity = 0;
  }
});
//Listen of Events
myProgressBar.addEventListener("timeupdate", () => {
  console.log(timeUpdate);
});
