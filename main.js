const playbutton = document.querySelector("#play-button");
const playbuttonicon = document.querySelector("#play-button-icon");
const song = document.querySelector("#song");
const progressBar = document.querySelector("#progress-bar");
const nextbutton = document.querySelector("#next-button");
const cover = document.querySelector("#cover");

const songs = [
  {
    id: 0,
    name: "Fourth of July",
    src: "./assets/songs/fourth-of-july.mp3",
    cover: "./assets/images/fourth-of-july.jpeg",
  },
  {
    id: 1,
    name: "Glimpse of us",
    src: "./assets/songs/glimpse-of-us.mp3",
    cover: "./assets/images/glimpse-of-us.jpeg",
  },
  {
    id: 2,
    name: "Indigo night",
    src: "./assets/songs/indigo-night.mp3",
    cover: "./assets/images/indigo-night.jpeg",
  },
  {
    id: 3,
    name: "Remembrance",
    src: "./assets/songs/remembrance.mp3",
    cover: "./assets/images/remembrance.jpeg",
  },
  {
    id: 4,
    name: "Summertime-sadness",
    src: "./assets/songs/summertime-sadness.mp3",
    cover: "./assets/images/summertime-sadness.jpeg",
  },
]

let index = 0;
let isPlaying = false;

nextbutton.onclick = () => {
  index++;

  song.src = songs[index].src;
  cover.src = songs[index].cover;
}

playbutton.onclick = (e) => {
  if (!isPlaying) {
    song.play();

    playbuttonicon.classList.remove("fa-play")
    playbuttonicon.classList.add("fa-pause")

  } else {
    song.pause();

    playbuttonicon.classList.remove("fa-pause")
    playbuttonicon.classList.add("fa-play")
  }

  isPlaying = !isPlaying;
}

song.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.target;

  const percentage = (currentTime / duration) * 100;
  progressBar.style.width = `${percentage}%`;

});