"use strict";
const musicTitleEl = document.getElementById("music_title");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "music/podozdu.mp3",
    displayName: "Я тебя подожду",
  },
  {
    path: "music/poslpoema.mp3",
    displayName: "Последняя поэма",
  },
  {
    path: "music/polustanochek.mp3",
    displayName: "На полустаночке",
  },
  {
    path: "music/omedvedah.mp3",
    displayName: "О медведях",
  },
  {
    path: "music/parohodi.mp3",
    displayName: "Как провожают пароходы",
  },
  {
    path: "music/nedayuyti.mp3",
    displayName: "Не дай ему уйти",
  },
  {
    path: "music/treugolnik.mp3",
    displayName: "Треугольник",
  },
  {
    path: "music/oskazke.mp3",
    displayName: "О сказке",
  },
  {
    path: "music/dobriyti.mp3",
    displayName: "Если добрый ты",
  },
  {
    path: "music/malish.mp3",
    displayName: "Малыш",
  },
  {
    path: "music/stoykto.mp3",
    displayName: "Стой, кто идёт",
  },
  {
    path: "music/koroli.mp3",
    displayName: "Короли",
  },
  {
    path: "music/krasnotal.mp3",
    displayName: "Зацветает краснотал",
  },
  {
    path: "music/dlyvseh.mp3",
    displayName: "Музыка для всех",
  },
  {
    path: "music/malprinc.mp3",
    displayName: "Маленький принц",
  },
  {
    path: "music/netprekr.mp3",
    displayName: "Нет прекрасней",
  },
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);

