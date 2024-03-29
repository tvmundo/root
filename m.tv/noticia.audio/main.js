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
name: "Petrobrás tem margem de lucro seis vezes maior do que concorrentes e suga renda dos brasileiros desde o golpe de 2016",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1537036046436802562/wHZK4jkn?format=jpg&name=360x360",
    path: "https://meupixtv.github.io/br/xxx/2022/jun/15/Petrobrás%20tem%20margem%20de%20lucro%20seis%20vezes%20maior%20do%20que%20concorrentes%20e%20suga%20renda%20dos%20brasileiros%20desde%20o%20golpe%20de%202016.mp3"
  },
  {
name: "E a verdade que Bolsonaro tenta esconder sobre o ICMS. Compartilhe!",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/profile_images/1488476048429916161/pdnOg2n0_400x400.jpg",
    path: "https://meupixtv.github.io/br/xxx/2022/jun/15/E%20a%20verdade%20que%20Bolsonaro%20tenta%20esconder%20sobre%20o%20ICMS.%20Compartilhe!.mp3"
  },
  {
name: "Lula lidera intenções de voto com 44%, e Bolsonaro tem 32%, diz pesquisa BTG/FSB.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1534862086379081730/z_YxPXzg?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/jun/13/Lula%20lidera%20intenções%20de%20voto%20com%2044%25%2C%20e%20Bolsonaro%20tem%2032%25%2C%20diz%20pesquisa%20BTG.mp3"
  },
  {
name: "Corpos encontrados nas buscas por Bruno Pereira e Dom Phillips estavam amarrados a uma árvore.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1534964536263987212/IQkBO2Vu?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/jun/13/Corpos%20encontrados%20nas%20buscas%20por%20Bruno%20Pereira%20e%20Dom%20Phillips%20estavam%20amarrados%20a%20uma%20árvore..mp3"
  },
  {
name: "Lula tem 52,87% dos votos válidos e venceria eleição no 1º turno, mostra Genial/Quaest.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1532765588950589440/yvkvvuOO?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/jun/08/Lula%20tem%2052%2C87%25%20dos%20votos%20válidos%20e%20venceria%20eleição%20no%201º%20turno%2C%20mostra%20Genial%20Quaest.mp3"
  },
  {
name: "Prefeitura desviou verba para pagar R$ 1,2 milhão a Gusttavo Lima, em Minas Gerais.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1530310146504675331/hDj_Kp8n?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/28/Prefeitura%20desviou%20verba%20para%20pagar%20R%24%201%2C2%20milhão%20a%20Gusttavo%20Lima%2C%20em%20Minas%20Gerais..mp3"
  },
  {
name: "Gleisi Hoffmann no twitter. Comandante da Aeronáutica, esposa e amigos viajaram para Toscana, na Itália, em avião da FAB.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/profile_images/1488476048429916161/pdnOg2n0_400x400.jpg",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/27/Comandante%20da%20Aeronáutica%2C%20esposa%20e%20amigos%20viajaram%20para%20Toscana%2C%20na%20Itália%2C%20em%20avião%20da%20FAB..mp3"
  },
  {
name: "Plano de saúde individual vai subir 15%, a maior alta em 22 anos",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1529964760443281431/_uXsvPCV?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/27/Plano%20de%20saúde%20individual%20vai%20subir%2015%25%2C%20a%20maior%20alta%20em%2022%20anos.mp3"
  },
  {
name: "Eleições 2022. pesquisa do Datafolha diz que Reprovação ao governo Bolsonaro vai a 48%; aprovação é de 25%.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1529534873484025858/ib8wHiRH?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/27/pesquisa%20do%20Datafolha%20diz%20que%20Reprovação%20ao%20governo%20Bolsonaro%20vai%20a%2048%20aprovação%20é%20de%2025.mp3"
  },
  {
name: "Eleiçoes 2022. Datafolha: Lula tem 48% das intenções de voto; Bolsonaro tem 27%",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1528228441061044231/xhl-34mO?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/26/Datafolha%20Lula%20tem%2048%25%20das%20intenções%20de%20voto%3B%20Bolsonaro%20tem%2027.mp3"
  },
  {
name: "Para os eleitores, a situação econômica piorou e a rejeição ao presidente Jair Bolsonaro (PL) aumentou.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/D5U0e70W0AAAfV4?format=png&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/26/rejeição%20ao%20presidente%20Jair%20Bolsonaro%20(PL)%20aumento.mp3"
  },
  {
name: "Forte terremoto de magnitude 6,9 ​​sacode o sul do Peru e o noroeste da Bolívia.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/EvpSvLjXYAMvceo?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/26/Forte%20terremoto%20de%20magnitude%206%2C9%20__sacode%20o%20sul%20do.mp3"
  },
  {
name: "Putin: Nenhum gendarme mundial será capaz de parar os países do mundo que querem desenvolver uma política independente.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FMNv2YWWYAcKHXo?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/26/Putin_%20_Nenhum%20gendarme%20mundial%20será%20capaz%20de%20para.mp3"
  },
  {
name: "Agentes da PRF jogam bomba de gás e matam homem asfixiado dentro de viatura em Sergipe.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1529601951087861760/qAya_7kd?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/26/Agentes%20da%20PRF%20jogam%20bomba%20de%20gás%20e%20matam%20homem%20asfixiado%20dentro%20de%20viatura%20em%20Sergipe.mp3"
  },
  {
name: "Combatentes de Azovstal estão prisioneiros em território controlado pela Rússia.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1528668337689055238/47K_rY_m?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/21/Combatentes%20de%20Azovstal%20estão%20prisioneiros%20em%20território%20controlado%20pela%20Rússia.mp3"
  },
  {
name: "Zelensky assina uma lei que permite o confisco de propriedade de quem apoia a operação militar russa.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526640005174657030/HGThaB4D?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/21/Zelensky%20assina%20uma%20lei%20que%20permite%20o%20confisco%20de%20propriedade%20de%20quem%20apoia%20a%20operação%20militar%20russa.mp3"
  },
  {
name: "Espanha conta já 30 casos de varíola dos macacos",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527212749595545601/ShyGV5a_?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Espanha%20conta%20já%2030%20casos%20de%20varíola%20dos%20macacos.mp3"
  },
  {
name: "Quase metade dos brasileiros culpam Bolsonaro por gasolina cara.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FTOg0cJXwAAXxYK?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Quase%20metade%20dos%20brasileiros%20culpam%20Bolsonaro%20por%20gasolina%20cara..mp3"
  },
  {
name: "Casos de varíola dos macacos em Portugal sobem a 23.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527324029820219394/L257grMx?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Casos%20de%20varíola%20dos%20macacos%20em%20Portugal%20sobem%20a%2023..mp3"
  },
  {
name: "Ucrânia ordena que soldados na siderúrgica Azovstal parem de lutar",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1524697419929239552/6jEn8LnC?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Ucrânia%20ordena%20que%20soldados%20na%20siderúrgica%20Azovsta.mp3"
  },
  {
name: "McDonald's anuncia acordo para venda de unidades na Rússia",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526452508255731712/DCKOwEyT?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/McDonald's%20anuncia%20acordo%20para%20venda%20de%20unidades.mp3"
  },
  {
name: "Lula continua à frente com 44%; Bolsonaro aparece com 32% e Ciro, com 8%",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FO18062XIAExjZ1?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Lula%20continua%20à%20frente%20com%2044%25%3B%20Bolsonaro%20aparece.mp3"
  },
  {
name: "Grupo suspeito de garimpo ilegal em terra yanomami movimentou mais de R$ 200 milhões, diz PF.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527448744681168926/MbTlDF6q?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Grupo%20suspeito%20de%20garimpo%20ilegal%20em%20terra%20yanomami%20movimentou%20mais%20de%20R%24%20200%20milhões.mp3"
  },
  {
name: "ONU diz que subiu 500% o total de pessoas com fome no mundo desde 2016.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FTJbEWoUUAMLks9?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/ONU%20diz%20que%20subiu%20500%25%20o%20total%20de%20pessoas%20com%20fome%20no%20mundo%20desde%202016..mp3"
  },
  {
name: "Alexandre Kalil anuncia aliança com Lula em Minas Gerais.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526189513978126340/WabyOTLA?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/20/Alexandre%20Kalil%20anuncia%20aliança%20com%20Lula%20em%20Minas%20Gerais.mp3"
  },
  {
name: "STF mantém Lei Seca e punição a motorista que recusa bafômetro.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527390916855595009/hk22E9Cs?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/19/STF%20mantém%20Lei%20Seca%20e%20punição%20a%20motorista%20que%20recu.mp3"
  },
  {
name: "Guedes defende taxação de gigantes como Shein e AliExpress.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526328764971483139/VEcoz_6x?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/19/Guedes%20defende%20taxação%20de%20gigantes%20como%20Shein%20e%20Al.mp3"
  },
  {
name: "Justiça busca peritos para novo teste psiquiátrico em Adélio Bispo.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527383516845162496/9ffhKFt5?format=png&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/19/Justiça%20busca%20peritos%20para%20novo%20teste%20psiquiátrico%20em%20Adélio%20Bispo.mp3"
  },
  {
name: "China ressurge como principal centro de mineração de bitcoin apesar da proibição.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FF69QOJXwAQOQ_l?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/19/China%20ressurge%20como%20principal%20centro%20de%20mineração%20de%20bitcoin%20apesar%20da%20proibição.mp3"
  },
  {
name: "Novo recorde: mais de 234.000 pessoas tentaram entrar nos EUA pela fronteira com o México em abril, (e o número pode aumentar).",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/C_bRBTcXUAAQFDS?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/19/Novo%20recorde%20mais%20de%20234.000%20pessoas%20tentaram%20entrar%20nos%20EUA%20pela%20fronteira%20com%20o%20México%20em%20abril%20e%20o%20número%20pode%20aumentar.mp3"
  },
  {
name: "EUA confirmam seu primeiro caso de varíola em 2022 em meio a surto de doença na Europa.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/E6fTsT6UcAEdzey?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/19/2EUA%20confirmam%20seu%20primeiro%20caso%20de%20varíola%20em%202022%20em%20meio%20a%20surto%20de%20doença%20na%20Europa.mp3"
  },
  {
name: "Rosa Weber envia à PGR pedido de inquérito contra Bolsonaro por ataque às urnas.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527006859454042113/W9YOwWLi?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Rosa%20veber%20envia%20à%20PGR%20pedido%20de%20inquérito%20contra.mp3"
  },
  {
name: "Renata Fan reverte demissão e garante permanência de parceiro do 'Jogo Aberto' na Band.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1527016338727636992/5ZpsuvXZ?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Renata%20Fan%20reverte%20demissão%20e%20garante%20permanência.mp3"
  },
  {
name: "New York vai investigar plataformas de mídia social usadas por atirador do supermercado Buffalo.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FS4NfxYXoAYDeCP?format=png&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/New%20York%20vai%20investigar%20plataformas%20de%20mídia%20social%20usadas%20por%20atirador%20do%20supermercado%20Buffalo.mp3"
  },
  {
name: "Homens mais ricos do país agem para privatizar Eletrobras e ampliar lucros.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FTEKvHrX0AMq7bg?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Homens%20mais%20ricos%20do%20país%20agem%20para%20privatizar%20Eletrobras%20e%20ampliar%20lucros.mp3"
  },
  {
name: "Ex-vice-prefeito de Olinda, do PT, é brutalmente agredido por vizinho bolsonarista",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FTDZDyDXsAQ9d9y?format=png&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Ex-vice-prefeito%20de%20Olinda%2C%20do%20PT%2C%20é%20brutalmente.mp3"
  },
  {
name: "Nova Iorque processa Amazon por discrimi­nar grávidas e deficientes..",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/EubYNJRWYAMCmww?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Nova%20Iorque%20processa%20Amazon%20por%20discrimi_nar%20grávi.mp3"
  },
  {
name: "Portugal recebe cabo submarino da Google que liga Europa à África.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526588033574834176/sU5BQTrQ?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Portugal%20recebe%20cabo%20submarino%20da%20Google%20que%20liga%20Europa%20à%20África.mp3"
  },
  {
name: "Rússia expulsa dezenas de diplomatas europeus à medida que as tensões aumentam.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/EteTjs5XEAMXAUH?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Rússia%20expulsa%20dezenas%20de%20diplomatas%20europeus.mp3"
  },
  {
name: "O Pentágono reconhece até 400 avistamentos de OVNIs.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/E5AKmeSXwAIgczA?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/O%20Pentágono%20reconhece%20até%20400%20avistamentos%20de%20OVNIs.mp3"
  },
  {
name: "Hezbollah perde maioria no Parlamento e Forças Libanesas convidam independentes a se unir.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/media/FCAkxOYXIAwYmBZ?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Hezbollah%20perde%20maioria%20no%20Parlamento%20e%20Forças%20Libanesas%20convidam%20independentes%20a%20se%20unir.mp3"
  },
  {
name: "Espanha quer instituir licença menstrual remunerada",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1525711577084665856/CkWcUt06?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Espanha%20quer%20instituir%20licença%20menstrual%20remunerad.mp3"
  },
  {
name: "Netflix despede 150 funcionários devido a queda de assinantes.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526858251345702912/8-N1tDPw?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/18/Netflix%20despede%20150%20funcionários%20devido%20a%20queda%20de%20assinantes.mp3"
  },
  {
name: "Espanha quer permitir aborto aos 16 anos sem autorização dos pais.",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526582793769304065/E1DNoYKK?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/Espanha%20quer%20permitir%20aborto%20aos%2016%20anos%20sem%20autor.mp3"
  },
  {
name: "Em Sergipe, Bolsonaro ouve gritos da população por volta de Lula",
    artist: " IMG twitter",
    image: "https://pbs.twimg.com/card_img/1526642305381302272/6glE94lG?format=jpg&name=small",
    path: "https://meupixtv.github.io/br/xxx/2022/mai/17/Em%20Sergipe%2C%20Bolsonaro%20ouve%20gritos%20da%20população%20por.mp3"
  },
  {
name: "Caracas confirma que Washington autorizou a negociaçao de petroleo...",
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


