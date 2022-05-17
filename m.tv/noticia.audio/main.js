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
name: "Caracas confirma que Washington autorizou petrolíferas americanas e europeias a "negociar e reiniciar operações" na Venezuela. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FS_NPsHWQAIIgnj?format=jpg&name=medium",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/Caracas%20confirma%20que%20Washington%20autorizou%20petro.mp3"
  },
  {
name: "TSE firma acordo com Telegram para combater fake news ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524424485780213760/vOF1WxrD?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/TSE%20firma%20acordo%20com%20Telegram%20para%20combater%20fake%20news.mp3"
  },
  {
name: "Ex-ministro Santos Cruz sofre princípio de enfarte e é internado em Brasília ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1525355160289136640/KHqyfonw?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/Ex-ministro%20Santos%20Cruz%20sofre%20princípio%20de%20enfarte.mp3"
  },
  {
name: "Arthur do Val é cassado e perde direitos políticos por oito anos ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FS_dabrWIAEa93Y?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/Arthur%20do%20Val%20é%20cassado%20e%20perde%20direitos%20políticos.mp3"
  },
  {
name: "Queda de avião na China pode ter sido proposital, diz jornal. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FOZEQvVXsAoXHOP?format=jpg&name=medium",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/Queda%20de%20avião%20na%20China%20pode%20ter%20sido%20proposital.mp3"
  },
  {
name: "Bolsonaro diz ao lado de Collor que velha política acabou. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FS-ynzsWAAUVVy9?format=jpg&name=medium",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/bolsonaro%20e%20collor%20kkkkk.mp3"
  },
  {
name: "265 combatentes do batalhão Azov e militares ucranianos da fábrica de Azovstal se renderam em um dia, informou o Ministério da Defesa da Rússia ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSf-pdgX0AEpLxJ?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/265%20combatentes%20do%20batalhão%20Azov%20e%20militares%20ucranianos%20da%20fábrica%20de%20Azovstal%20se%20renderam.mp3"
  },
  {
name: "Três policiais civis que fizeram disparos com arma de fogo na Cracolândia, no centro da capital paulista, na última quinta-feira (12), foram identificados. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSwlPADXwAEk8f6?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/15/3%20policiais%20civis%20que%20fizeram%20disparos%20com%20arma%20de%20fogo%20na%20Cracolândia%20foram%20identificados.mp3"
  },
  {
name: "Com medo de suspensão, grupos bolsonaristas tentam maquiar ameaças no app Telegram ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524092415447117825/fwymsZmj?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/15/Com%20medo%20de%20suspensão%2C%20grupos%20bolsonaristas%20tentam.mp3"
  },
  {
name: "Justiça do Rio de Janeiro tenta penhorar bens do senador Romário ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524411716947349505/uOVG04OS?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/15/Romário%20ok.mp3"
  },
  {
name: "Jovem Pan indica desembarcar de Bolsonaro ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSwL9nNXwAAzBpT?format=png&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/Jovem%20Pan%20indica%20desembarcar%20de%20Bolsonaro.mp3"
  },
  {
name: "Pelo menos 10 mortos em tiroteio em supermercado no estado de Nova York ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSwNWz4WYAELJuK?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/Pelo%20menos%2010%20mortos%20em%20tiroteio%20em%20supermercado%20no%20estado%20de%20Nova%20York.mp3"
  },
  {
name: "Donald Trump propôs aos líderes da oposição venezuelana matar Nicolás Maduro ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSviQU_X0Ac8AAc?format=jpg&name=medium",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/Donald%20Trump%20propôs%20aos%20líderes%20da%20oposição%20venezuelana%20matar%20Nicolás%20Maduro.mp3"
  },
  {
name: "Novo saque de até mil Reais do F G T S ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524351127369703432/KvHlPQVK?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/Novo%20saque%20F%20G%20T%20S%20.mp3"
  },
  {
name: "Finlândia confirma que Rússia cortou fornecimento de eletricidade ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSuB1BcXEAA7noo?format=jpg&name=small",
    path: "https://s3.amazonaws.com/media.snatchbot/media/audio/KVzcyUHC7IkpPoFUX4ZV5bS75.mp3"
  },
  {
name: "presidente ucraniano disse que Macron tenta “em vão” dialogar com Vladimir Putin ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1523200054567514113/nGX3nrgb?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/presidente%20ucraniano%20disse%20que%20Macron%20tenta%20“em%20vão”%20dialogar%20com%20Vladimir%20Putin.mp3"
  },
  {
name: "Vi crimes abomináveis do batalhão Azov: ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSf-pdgX0AEpLxJ?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/Vi%20crimes%20abomináveis%20de%20Azov.mp3"
  },
  {
name: "Governo Bolsonaro elabora proposta para diminuir FGTS de todos os trabalhadores. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1525252816083755013/AiEiAbJ2?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/14/Governo%20Bolsonaro%20elabora%20proposta%20para%20diminuir%20FGTS%20de%20todos%20os%20trabalhadores.mp3"
  },
  {
name: "Um grande incêndio em Nova Déli nesta sexta-feira deixou pelo menos 27 mortos. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/EsQfyfZXcAU6Q9h?format=jpg&name=small",
    path: "https://s3.amazonaws.com/media.snatchbot/media/audio/OgQnzgCi9j50KZ4VkwgCa1Vzj.mp3"
  },
  {
name: "Brasil - Militares querem o aparelhamento do Estado ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524831455607672835/J-ANASek?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Militares%20querem%20o%20aparelhamento%20do%20Estado..MP3"
  },
  {
name: "Justiça mantém decisão que determina retorno de 100% da frota de ônibus em Natal. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524959404050849800/9vh2piqT?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Justiça%20mantém%20decisão%20que%20determina%20retorno%20de%20100%25%20da%20frota%20de%20ônibus%20em%20Natal..mp3"
  },
  {
name: "Advogados federais rebatem justificativa da AGU para defender Wal do Açaí ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524636463962505218/n9dNZgo8?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Advogados%20federais%20rebatem%20justificativa%20da%20AGU%20para%20defender%20Wal%20do%20Açaí.MP3"
  },
  {
name: "Caetano Veloso terá encontro com Lula para manifestar apoio à candidatura do ex-presidente. ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1525201483125477379/-uBcRRzq?format=jpg&name=360x360",
    path: "https://s3.amazonaws.com/media.snatchbot/media/audio/fQDYNx6Y61DJUKvKH8lffoJWq.mp3"
  },
  {
name: "Lula tem 44% das intenções de voto, Bolsonaro, 32% e Ciro 8% ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1525112683523080194/MIXbQEnQ?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Lula%20tem%2044%25%20das%20intenções%20de%20voto%2C%20%2C%20Bolsonaro%2C%20%2C%2032%25%20e%20Ciro%208%25.mp3"
  },
  {
name: "Seis suspeitos são presos por tráfico de drogas em Ponta Negra ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524423933314830337/CxT-NzME?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Seis%20suspeitos%20são%20presos%20por%20tráfico%20de%20drogas%20em%20Ponta%20Negra.mp3"
  },
  {
name: "Messi é o atleta mais bem pago do mundo ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSl_FZyVEAEhszr?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Messi%20é%20o%20atleta%20mais%20bem%20pago%20do%20mundo.mp3"
  },
  {
name: "Integrante de torcida organizada é morto a tiros em bar de Natal ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/CCofrm_WEAAhD1F?format=jpg&name=small",
    path: "https://s3.amazonaws.com/media.snatchbot/media/audio/JW1U5QPJOOU1Ah2ohctF3DxUW.mp3"
  },
  {
   name: "Caminhoneiros anunciam greve contra o preço do diesel ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSeFqmAXwAAMFov?format=jpg&name=small",
    path: "https://s3.amazonaws.com/media.snatchbot/media/audio/bFHvX251IAuTS4eukFXdqKMBF.mp3"
  },
  {   
   name: "Morador de rua é morto na região da Cracolândia ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524708385450446848/aSyW1ceT?format=jpg&name=small",
    path: "https://s3.amazonaws.com/media.snatchbot/media/audio/fM93B9kdJpHLz0080gnwDg7fo.mp3"
  },
  {
  name: "Zelensky se diz disposto a falar com Putin ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1523036303520108546/mEeDFcp1?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/Zelensky%20se%20diz%20disposto%20a%20falar%20com%20Putin.mp3"
  },
  {
	name: "queda do bitcoin custa cerca de 36 milhões de dólares para El Salvador ",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FSnFgtcXoAkJxzF?format=jpg&name=large",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/13/queda%20do%20bitcoin%20custa%20cerca%20de%2036%20milhões%20de%20dólares%20para%20El%20Salvador.mp3"
  },
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


