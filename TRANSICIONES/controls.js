// Obtenim l'element vídeo
const video = document.getElementById("myVideo");

// Quan es fa clic a la icona "play"
document.getElementById("play").onclick = () => {
    video.play(); // reproduim el video
};

// Quan es fa clic a la icona "pause"
document.getElementById("pause").onclick = () => {
    video.pause(); // pausem
};

// Quan es fa clic a la icona "mute"
document.getElementById("mute").onclick = () => {
    // Desactiva el so del vídeo
    video.muted = true;
};

// Quan es fa clic a la icona de volum
document.getElementById("sound").onclick = () => {
    // Activa el so del vídeo
    video.muted = false;
};

// Efecte de scroll per al header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // Estil quan s'ha fet scroll
    document.getElementById("navbar").style.padding = "15px 20px";
    document.getElementById("navbar").style.height = "60px";
  } else {
    // Estil quan està a dalt de tot
    document.getElementById("navbar").style.padding = "0 20px";
    document.getElementById("navbar").style.height = "80px";
  }
}