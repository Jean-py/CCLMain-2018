
var stream;
var timerRepetition;
var speedrate = 1;
var videoSlider = document.getElementById("videoSlider");
// Buttons
var playButton = document.getElementById("play-pause");
var muteButton = document.getElementById("mute");
var timerVideo = document.getElementById("timerVideo");
// Sliders
var knobMin = document.getElementById("range-slider_handle-min");
var knobMax = document.getElementById("range-slider_handle-max");
var rangeSliderTrack = document.getElementById("rangeSliderTrack");

var dividCommandeVideo = document.getElementById("idCommandeVideo");

var KNOB_WIDTH = 25;

//var volumeBar = document.getElementById("volume-bar");

var NUMBER_OF_TICK = 1000;

var VALUE_KNOB_MIN = 0;
var VALUE_KNOB_MAX = 100;
var offsetLeftKnobMin = 200;
var currentValueKnob = VALUE_KNOB_MIN;
var videoDuration = "° live";

var isPlayingCard = false;

knobMin.style.left = (  currentValueKnob + rangeSliderTrack.offsetLeft) + "px" ;

/*
window.onload = function() {
    video.play(); //start loading, didn't used `vid.load()` since it causes problems with the `ended` event
    if (video.readyState !== 4) { //HAVE_ENOUGH_DATA
      video.addEventListener('canplaythrough', onCanPlay, false);
      video.addEventListener('load', onCanPlay, false); //add load event as well to avoid errors, sometimes 'canplaythrough' won't dispatch.
      setTimeout(function () {
        video.pause(); //block play so it buffers before playing
      }, 1); //it needs to be after a delay otherwise it doesn't work properly.
    } else {
      //video is ready
    }
    video.removeEventListener('canplaythrough', onCanPlay, false);
    video.removeEventListener('load', onCanPlay, false);
    //video is ready
    video.play();
};
*/

window.addEventListener("load",function() {
  setTimeout(function(){
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});




var play = function () {
  /*if(stream.paused){
    stream.play();
    playButton.src='/media/workshop2/videoCommand/pauseButton.png';
  }*/
};
var pause = function () {
 /*
  if(!stream.paused){
    stream.pause();
    // Update the button text to 'Play'
    playButton.src='/media/workshop2/videoCommand/playButton.png';
    
  }*/
};

// Event listener for the mute button
muteButton.addEventListener("mousedown", function() {
  console.log("mutebutton pressed ");
  if (stream.muted === false) {
    // Mute the video
    stream.muted = true;
    // Update the button text
    muteButton.innerHTML = "Unmute";
  } else {
    // Unmute the video
    stream.muted = false;
    this.src="/media/workshop2/videoCommand/volumeFull.png";
    // Update the button text
    muteButton.innerHTML = "Mute";
  }
});
// Event listener for the seek bar
videoSlider.addEventListener("change", function() {
  // Update the video time
  //video.currentTime = video.duration * (videoSlider.value / NUMBER_OF_TICK);
});

// Play the video when the slider handle is dropped
videoSlider.addEventListener("mouseup", function() {
  play();
  return false;
});



function updateKnobAndVideo(e){
 // video.currentTime = Math.round(((e.clientX-(rangeSliderTrack.offsetLeft+dividCommandeVideo.offsetLeft))*video.duration)/NUMBER_OF_TICK) ;
  knobMin.style.left = ((e.clientX-dividCommandeVideo.offsetLeft))+ "px" ;
  
  moveIntoData(e.clientX);

  
  //console.log(" knobMin.style.left : " +  knobMin.style.left);
}

function updateKnobMax(e){
  //video.currentTime = Math.round(((e.clientX-(rangeSliderTrack.offsetLeft+dividCommandeVideo.offsetLeft))*video.duration)/NUMBER_OF_TICK) ;
  knobMax.style.left = (e.clientX-dividCommandeVideo.offsetLeft)+ "px" ;
}


function moveIntoData(second){

}


