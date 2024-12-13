///////////////////////////////
// PRELOADING SONGS AND TEXT //
///////////////////////////////

let press

function preload() {

  driftingSong = loadSound('Drifting.mp3');
  nomuSong = loadSound('Nomu.mp3')
  fasterSong = loadSound('Faster.mp3')
  slingshotSong = loadSound('Slingshot.mp3')
  dwtkSong = loadSound('DWTK.mp3')



  driftCover = loadImage('driftingcover.png');
  nomuCover = loadImage('nomucover.png')
  fasterCover = loadImage('fastercover.png')
  sling = loadImage('slingshotcover.png')
  dwtkCover = loadImage('dwtkcover.png')
  gk2Cover = loadImage('goodkidcover.png')

  

// Loading Font //

  press = loadFont('PressStart2p.ttf');
}

//////////////////////////////////
// BUTTONS AND THEIR APPEARANCE //
//////////////////////////////////

function setup() {

  createCanvas(600, 600);

    // Menu Button //
  
    menu = createButton('Song Selection Menu')
    menu.position(235, 560)
    menu.style('background-color', '#ffffff')
    menu.style('border-radius', '5px'); 
    menu.style('border', 'none'); 

    // "Drifting" Button //

    drifting = createButton('Drifting');
    drifting.position(265, 210)
    drifting.style('background-color', '#e6b4d4');
    drifting.style('border-radius', '5px'); 
    drifting.style('border', 'none'); 
    drifting.style('font-size', '18px'); 
    drifting.style('cursor', 'pointer'); 

    // "Nomu" Button //

    nomu = createButton('Nomu');
    nomu.position(270,270)
    nomu.style('background-color', '#e9e8dd');
    nomu.style('border-radius', '5px'); 
    nomu.style('border', 'none'); 
    nomu.style('font-size', '18px'); 
    nomu.style('cursor', 'pointer');

    // "Faster" Button //

    faster = createButton('Faster')
    faster.position(269,330)
    faster.style('background-color', '#6fa4d0');
    faster.style('border-radius', '5px'); 
    faster.style('border', 'none'); 
    faster.style('font-size', '18px');
    faster.style('cursor', 'pointer'); 
    
    // "Slingshot" Button //

    slingshot = createButton('Slingshot')
    slingshot.position(259,390)
    slingshot.style('background-color', '#81b9b3');
    slingshot.style('border-radius', '5px'); 
    slingshot.style('border', 'none'); 
    slingshot.style('font-size', '18px'); 
    slingshot.style('cursor', 'pointer'); 

    // "Down With the King" Button //

    dwtk = createButton('Down With the King')
    dwtk.position(220,450)
    dwtk.style('background-color', '#c79e5f')
    dwtk.style('border-radius', '5px'); 
    dwtk.style('border', 'none'); 
    dwtk.style('font-size', '18px'); 
    dwtk.style('cursor', 'pointer'); 
    

    topText()
}

////////////////////////////////////////
// BUTTON CLICKING CODE AND FUNCTIONS //
////////////////////////////////////////

function draw() {

  menu.mousePressed(menuClicked);
  drifting.mousePressed(driftingClicked);
  nomu.mousePressed(nomuClicked);
  faster.mousePressed(fasterClicked);
  slingshot.mousePressed(slingshotClicked);
  dwtk.mousePressed(dwtkClicked);
}

 function menuClicked() {
  stopMusic()
  background(254)
  topText()
  textSize(8)
  /* text('check out the 8-bit aulbum here!', 170,520)
  textSize(6)
  text('https://www.youtube.com/playlist?list=OLAK5uy_l2GvuWJ88Lv89iPAAFfMAc2oiVyaPGW2M',60, 535) */
} 

function driftingClicked() {
  stopMusic()
  driftingSong.play()
  background(209,164,193)
  topText()
  image(driftCover, 65,160,150,150)
  fill(130,101,119)
  textSize(13)
  text('Album:',420,270)
  text('Good Kid 2', 400, 390)
  image(dwtkCover, 416,284,80,80)
  textSize(8)
  text('check out the 8-bit aulbum here!', 170,520)
  textSize(6)
  text('https://www.youtube.com/playlist?list=OLAK5uy_l2GvuWJ88Lv89iPAAFfMAc2oiVyaPGW2M',60, 535)
} 

function nomuClicked() {
  stopMusic()
  nomuSong.play()
  background(186,185,178)
  topText()
  image(nomuCover,65,160,150,150)
  fill(97,96,90)
  textSize(13)
  text('Album:',420,270)
  text('Good Kid', 406, 390)
  image(gk2Cover, 416,284,80,80)
  textSize(8)
  text('check out the 8-bit aulbum here!', 170,520)
  textSize(6)
  text('https://www.youtube.com/playlist?list=OLAK5uy_l2GvuWJ88Lv89iPAAFfMAc2oiVyaPGW2M',60, 535)
}

function fasterClicked() {
  stopMusic()
  fasterSong.play()
  background(98,145,184)
  topText()
  image(fasterCover,65,160,150,150)
  fill(59,90,115)
  textSize(13)
  text('Album:',420,270)
  text('Good Kid', 406, 390)
  image(gk2Cover, 416,284,80,80)
  textSize(8)
  text('check out the 8-bit aulbum here!', 170,520)
  textSize(6)
  text('https://www.youtube.com/playlist?list=OLAK5uy_l2GvuWJ88Lv89iPAAFfMAc2oiVyaPGW2M',60, 535)

}

function slingshotClicked() {
  stopMusic()
  slingshotSong.play()
  background(110,158,153)
  topText()
  image(sling,65,160,150,150)
  fill(63,92,89)
  textSize(13)
  text('Album:',420,270)
  text('Good Kid 2', 400, 390)
  image(dwtkCover, 416,284,80,80)
  textSize(8)
  text('check out the 8-bit aulbum here!', 170,520)
  textSize(6)
  text('https://www.youtube.com/playlist?list=OLAK5uy_l2GvuWJ88Lv89iPAAFfMAc2oiVyaPGW2M',60, 535)
}

function dwtkClicked() {
  stopMusic()
  dwtkSong.play()
  background(227,183,117)
  topText()
  image(dwtkCover,65,160,150,150)
  fill(99,78,46)
  textSize(13)
  text('Album:',420,270)
  text('Good Kid 2', 400, 390)
  image(dwtkCover, 416,284,80,80)
  textSize(8)
  text('check out the 8-bit aulbum here!', 170,520)
  textSize(6)
  text('https://www.youtube.com/playlist?list=OLAK5uy_l2GvuWJ88Lv89iPAAFfMAc2oiVyaPGW2M',60, 535)

}

///////////////////////
// TOP TEXT FUNCTION //
///////////////////////


function topText() {

  // "Good Kid" text //

  fill(50)
  textFont(press)
  textSize(50)
  text('Good Kid',100,90)

  // "8-bit music player" text //

  textSize(20)
  text('8-bit music player',124,120)
}

/////////////////////////////
// STOPPING MUSIC FUNCTION //
/////////////////////////////

function stopMusic() {
  if (driftingSong.isPlaying()) {
    driftingSong.stop();
  }

  if (nomuSong.isPlaying()) {
    nomuSong.stop();
  }

  if (fasterSong.isPlaying()) {
    fasterSong.stop();
  }

  if (slingshotSong.isPlaying()) {
    slingshotSong.stop();
  }

  if (dwtkSong.isPlaying()) {
    dwtkSong.stop();
  }
}
