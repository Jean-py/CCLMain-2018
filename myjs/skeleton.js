
var flowerDance = document.getElementById("flowerDance");
var performer = document.getElementById("liveIndicator");

var flower = 0;
var clock = new THREE.Clock();
var boneContainer ;

var camera, controls, scene, renderer;
var mixer, skeletonHelper;
var mixer2, skeletonHelper2;
var mixer3, skeletonHelper3;

init();
animate();

var loader = new THREE.BVHLoader();
var loader2 = new THREE.BVHLoader();
var loader3 = new THREE.BVHLoader();


loader.load("bvh/frankenstein.bvh", function( result ) {
  skeletonHelper = new THREE.SkeletonHelper( result.skeleton.bones[ 0 ] );
  skeletonHelper.skeleton = result.skeleton; // allow animation mixer to bind to SkeletonHelper directly
  
  boneContainer = new THREE.Group();
  boneContainer.add( result.skeleton.bones[ 0 ] );
  
  scene.add( skeletonHelper );
  scene.add( boneContainer );
  
  // play animation
  mixer = new THREE.AnimationMixer( skeletonHelper );
  mixer.clipAction( result.clip ).setEffectiveWeight( 1.0 ).play();
} );

loader3.load("bvh/ronja.bvh", function( result ) {
  skeletonHelper3 = new THREE.SkeletonHelper( result.skeleton.bones[ 0 ] );
  skeletonHelper3.skeleton = result.skeleton; // allow animation mixer to bind to SkeletonHelper directly
  
  boneContainer = new THREE.Group();
  boneContainer.add( result.skeleton.bones[ 0 ] );
  scene.add( skeletonHelper3 );
  scene.add( boneContainer );
  
  // play animation
  mixer3 = new THREE.AnimationMixer( skeletonHelper3 );
  mixer3.clipAction( result.clip ).setEffectiveWeight( 1.0 ).play();
} );


loader2.load("bvh/zac.bvh", function( result ) {
  skeletonHelper2 = new THREE.SkeletonHelper( result.skeleton.bones[ 0 ] );
  skeletonHelper2.skeleton = result.skeleton; // allow animation mixer to bind to SkeletonHelper directly
  
  boneContainer = new THREE.Group();
  boneContainer.add( result.skeleton.bones[ 0 ] );
  scene.add( skeletonHelper2 );
  scene.add( boneContainer );
  
  // play animation
  mixer2 = new THREE.AnimationMixer( skeletonHelper2 );
  mixer2.clipAction( result.clip ).setEffectiveWeight( 1.0 ).play();
} );




function init() {
  
  performer.innerHTML = "Performer: Frankstein (zac's Header + ronja's data ) " ;
//  performer.innerHTML = "Performer:  Frankenstein ";
 // performer.innerHTML = "Performer: Zac ";
  
  
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 0, 200, 400 );
  controls = new THREE.OrbitControls( camera );
  controls.minDistance = 10;
  controls.maxDistance = 500;
  scene = new THREE.Scene();
  scene.add( new THREE.GridHelper( 200, 10 ) );
  // renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setClearColor( 0xeeeeee );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight-100);
  document.body.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  
}

var multiplicateur =1.2;

function animate() {
  //scene.children[2].children[0].children[2].matrixWorld.elements
  
  requestAnimationFrame( animate );
  var delta = clock.getDelta();
  if ( mixer ){
    mixer.update( delta );
    //scene.children[1].bones[12].position.x - 10;
    
    
    if(flower){
        scene.children[1].bones.forEach(function (element) {
        element.position.x = multiplicateur;
        element.position.y = multiplicateur;
        element.position.z = multiplicateur;
      });
    }
   
    
    //scene.children[1].bones[12].position.z - 100;
  }
  if ( mixer2 ){
    mixer2.update(delta);
  }
  
  
  if ( skeletonHelper ) skeletonHelper.update();
  if ( skeletonHelper2 ) {
    skeletonHelper2.update();
  }
  
  //Mixer + skeletonHelper3
  if ( mixer3 ){
    mixer3.update(delta);
  }
  if ( skeletonHelper3 ) {
    skeletonHelper3.update();
  }
  
  renderer.render( scene, camera );
  
 // explore();
}

function explore(){
  
  if (mixer) {
    
    //name: "LeftHand",
    //  console.log(scene.children[1].bones[12].position);
    if(scene.children[1].bones[12].position.y){
      var posYLH = scene.children[1].bones[12].getWorldPosition().y;
      var posYLHmap = map(posYLH, 0, 6, 0, 255);
      var YLH = (Math.round(posYLHmap));
      // console.log(YLH);
    }
    if(scene.children[1].bones[17].position.y){
      var posYRH = scene.children[1].bones[17].getWorldPosition().y;
      var posYRHmap = map(posYRH, 0, 6, 0, 255);
      var YRH = (Math.round(posYRHmap));
      // console.log(YRH);
    }
    
    
  }
  
  
}

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


flowerDance.addEventListener("mousedown", function() {
  flower++;
  flower = flower %2;
});