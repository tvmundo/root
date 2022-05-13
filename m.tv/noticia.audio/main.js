let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Elon Musk suspende temporariamente a compra do Twitter ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1522733694766702593/OdHdenTl?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Elon%20Musk%20suspende%20temporariamente%20a%20compra%20do%20Twitter.mp3"
  },
  {
    name: "Fome - Temer - Bolsonaro ",
    artist: "247 -IMG twitter",
    image: "https://pbs.twimg.com/card_img/1525049732317388801/faX59Fts?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Medidas%20fome%20e%20pobreza%20ao%20Brasil%20foram%20implantadas%20por%20Temer.mp3"
  },
  {
    name: "Preço do diesel ",
    artist: "Roberto Requião - twitter",
    image: "https://pbs.twimg.com/profile_images/1505707903558328322/GgvlHvrD_400x400.jpg",
    path: "audio/Preço do disel - Copia.mp4"
  },
  {
    name: "Inflação se alastra",
    artist: "UOL",
    image: "https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v4",
    path: "audio/UOL. 12 de maio de 2022.mp4"
  },
  {
    name: " Mundo",
    artist: "Coreia do Norte dispara míssil balístico",
    image: "https://cdni.russiatoday.com/actualidad/public_images/2022.05/thumbnail/627cde9c59bf5b08f1783971.jpeg",
    path: "audio/Coreia do Norte dispara míssil balístico.mp4",
  },
  {
    name: " Mundo",
    artist: "Coreia do Norte dispara míssil balístico",
    image: "https://cdni.russiatoday.com/actualidad/public_images/2022.05/thumbnail/627cde9c59bf5b08f1783971.jpeg",
    path: "audio/Som.mp3",
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Notícia " + (track_index + 1) + " de " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


