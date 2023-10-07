console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("songs/1.mp3");
let playingGifOn = document.getElementById("playingGifOn");
let masterSongName = document.getElementById("masterSongName");
masterSongName.innerHTML = "Let me love you";
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Let me love you",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Love me like you do",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Memories",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "alone",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "dance monkey",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "cheap thrills",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
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

songItems.forEach((element, i) => {
  // console.log(element + " " + i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
  // element.getElementsByClassName("timestamp")[0].innerHTML = parseInt(
  //   audioElement.duration
  // );
});

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
audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerHTML = songs[songIndex - 1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      playingGifOn.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  console.log(songIndex);
  masterSongName.innerHTML = songs[songIndex - 1].songName;
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 1;
  } else {
    songIndex -= 1;
  }
  console.log(songIndex);
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerHTML = songs[songIndex - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
