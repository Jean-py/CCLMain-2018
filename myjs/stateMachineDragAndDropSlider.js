var video = document.getElementById("videoEAT");
var speedrate = 1;


//Object graphique de feedback
var segmentFeedback = {
  width: "",
  startPostion:"",
  endPosition : "",
  startDurationVideo:"",
  endDurationVideo:"",
  displayed:false,
  divGraphicalObject: document.getElementById("segmentMinMax")
};

// Sliders
var knobMin = document.getElementById("range-slider_handle-min");
var rangeSliderTrack = document.getElementById("rangeSliderTrack");
var dividCommandeVideo = document.getElementById("idCommandeVideo");
var knobMax = document.getElementById("range-slider_handle-max");
var cardBoard = document.getElementById("divCardBoard");





//Drag and drop bouton knob min
let StateDrag = {
  IDLE : 0, DOWN:1, DRAG:2, LONGPRESS:3
};
var state = StateDrag.IDLE;


rangeSliderTrack.addEventListener("mousedown", function(e){
  switch (state){
    case StateDrag.IDLE: {
      state = StateDrag.DOWN;
      console.log("mouse down on ranger slider");
      updateKnobAndVideo(e);
      pause();
      break;
    }
  }
}, false);


knobMin.addEventListener("mousedown", function(e) {
  console.log("knobmin mouse down");
  pause();
  //Update video position
  switch (state){
    case StateDrag.IDLE: {
      state = StateDrag.DOWN;
      break;
    }
  }
  
  event.preventDefault();
});





knobMin.addEventListener("mousemove", function(e){
  e.stopPropagation();
  e.cancelBubble = true;
  e.preventDefault();
  pause();
  switch (state){
    case StateDrag.DOWN: {
      state = StateDrag.DRAG;
      updateKnobAndVideo(e);
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.DRAG;
      updateKnobAndVideo(e);
      // clearAllTimer();
      break;
    }
    case StateDrag.LONGPRESS:{
      state = StateDrag.LONGPRESS;
      updateKnobAndVideo(e);
      //clearAllTimer();
      break;
    }
  }
  event.preventDefault();
  
},false );


knobMin.addEventListener("mouseup", function(e) {
  switch (state) {
    case StateDrag.LONGPRESS: {
      state = StateDrag.IDLE;
      updateKnobAndVideo(e);
      //play();
      
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.IDLE;
      updateKnobAndVideo(e);
      //play();
      
      break;
    }
    case StateDrag.DOWN: {
      state = StateDrag.IDLE;
      updateKnobAndVideo(e);
      //play();
      
      //  stopCreateSegment(e, video.currentTime);
      
      break;
    }
    
  }
  event.preventDefault();
},false);







knobMax.addEventListener("mousedown", function(e) {
  console.log("mouse down on knob");
  //Update video position
  switch (state){
    case StateDrag.IDLE: {
      state = StateDrag.DOWN;
      break;
    }
  }
  //pause();
  return false;
});
/*rangeSliderTrack.addEventListener("mousedown", function(e) {
  //Update video position
  updateKnobAndVideo(e);
  pause();
  return false;
});*/

/*-----MOUSE LEAVE-------*/
dividCommandeVideo.addEventListener("mouseleave", function(e) {
  switch (state) {
    case StateDrag.DOWN: {
      state = StateDrag.IDLE;
      //play();
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.IDLE;
     // play();
      break;
    }
    case StateDrag.LONGPRESS: {
      state = StateDrag.IDLE;
     // play();
      break;
    }
  
  
  }
  //console.log("mouse leave");
  
}, false);

/*-----MOUSE MOVE-------*/
rangeSliderTrack.addEventListener("mousemove", function(e){
  e.stopPropagation();
  e.cancelBubble = true;
  e.preventDefault();
  switch (state){
    case StateDrag.DOWN: {
      //pause();
      state = StateDrag.DRAG;
      //console.log(" draging etat down");
    //  updateKnobAndVideo(e);
    //  clearAllTimer();
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.DRAG;
      updateKnobAndVideo(e);
     // clearAllTimer();
      //console.log(" draging etat drag");
      break;
    }
    case StateDrag.LONGPRESS:{
      state = StateDrag.LONGPRESS;
     // updateKnobAndVideo(e);
     // clearAllTimer();
      break;
    }
  }
}, false);


knobMin.addEventListener("mousemove", function(e){
  e.stopPropagation();
  e.cancelBubble = true;
  e.preventDefault();
  
  
  //console.log("ici");
  switch (state){
    case StateDrag.DOWN: {
     // pause();
      state = StateDrag.DRAG;
     // clearAllTimer();
      //console.log(" draging etat down");
     // updateKnobAndVideo(e);
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.DRAG;
      //updateKnobAndVideo(e);
     // clearAllTimer();
      //console.log(" draging etat drag");
      break;
    }
    case StateDrag.LONGPRESS:{
      state = StateDrag.LONGPRESS;
      //console.log("state longpress with mouse move");
      updateKnobAndVideo(e);
      //clearAllTimer();
      break;
    }
  }
},false );
dividCommandeVideo.addEventListener("mousemove", function(e){
  e.stopPropagation();
  e.cancelBubble = true;
  e.preventDefault();
  
  switch (state){
    case StateDrag.DOWN: {
     // pause();
      state = StateDrag.DRAG;
      //console.log(" draging etat down");
     // updateKnobAndVideo(e);
      break;
    }
    case StateDrag.DRAG: {
     // pause();
      state = StateDrag.DRAG;
     // updateKnobAndVideo(e);
     // clearAllTimer();
      //console.log(" draging etat drag");
      break;
    }
    /*case StateDrag.LONGPRESS: {
      pause();
      state = StateDrag.DRAG;
      updateKnobAndVideo(e);
      //console.log(" draging etat drag");
      break;
    }*/
    
  }
}, false);

/*-----MOUSE UP-------*/
dividCommandeVideo.addEventListener("mouseup", function(e){
  switch (state) {
    case StateDrag.DOWN: {
      state = StateDrag.IDLE;
     // updateKnobAndVideo(e);
     // play();
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.IDLE;
     // updateKnobAndVideo(e);
     // play();
      break;
    }
    
  }
  //console.log("end drag");
  
}, false);
rangeSliderTrack.addEventListener("mouseup", function(e){
  //console.log("mouse up , etat : " + state);
  
  switch (state) {
    case StateDrag.DOWN: {
      state = StateDrag.IDLE;
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.IDLE;
     // updateKnobAndVideo(e);
      break;
    }
    case StateDrag.LONGPRESS:{
      state = StateDrag.IDLE;
    //  updateKnobAndVideo(e);
      break;
    }
    
  }
  
}, false);

knobMax.addEventListener("mouseup", function(e) {
  switch (state) {
    case StateDrag.LONGPRESS: {
      state = StateDrag.IDLE;
     // updateKnobAndVideo(e);
      break;
    }
    case StateDrag.DRAG: {
      state = StateDrag.IDLE;
     // updateKnobAndVideo(e);
      break;
    }
    case StateDrag.DOWN: {
      state = StateDrag.IDLE;
     // updateKnobAndVideo(e);
    //  stopCreateSegment(e, video.currentTime);
      
      break;
    }
    
  }
},false);


/*-----MOUSE LONG PRESS-------*/
knobMin.addEventListener('long-press', function(e) {
  // stop the event from bubbling up
   e.preventDefault();
  switch (state){
    case StateDrag.DOWN: {
      state = StateDrag.LONGPRESS;
     // pause();
      break;
    }
  }
});

rangeSliderTrack.addEventListener("long-press", function(e){
  e.preventDefault();
  switch (state){
    case StateDrag.DOWN: {
      state = StateDrag.LONGPRESS;
    //  pause();
      break;
    }
  }
}, false);

/*-----MOUSE DOWN-------*/
/*knobMin.addEventListener("mouseup", function(e){
  switch (state){
    case StateDrag.IDLE: {
      state = StateDrag.DOWN;
      break;
    }
    
  }
}, false);*/







/*
//start position on the slider and end position on the slider
function sliderToVideo(startP,endP){
  
  var startDuration =  Math.round(((startP * video.duration)/NUMBER_OF_TICK)- rangeSliderTrack.offsetLeft);
  var endDuration   = Math.round(((endP * video.duration)/NUMBER_OF_TICK)- rangeSliderTrack.offsetLeft);
  return {
    startDuration: startDuration,
    endDuration: endDuration
  };
}

//start position on the slider and end position on the slider
function videoToSlider(startDurationVideo,endDurationVideo){
  
  var startP =  Math.round(((startDurationVideo * NUMBER_OF_TICK)/video.duration)- rangeSliderTrack.offsetLeft);
  var endP   = Math.round(((endDurationVideo * NUMBER_OF_TICK )/video.duration)- rangeSliderTrack.offsetLeft);
  return {
    startPosition: startP,
    endPosition: endP
  };
}*/

