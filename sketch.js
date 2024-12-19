let mm;
let mm2;

let snowImage; 

let button;
let button2;

let button3;

let buttonPause;
let buttonPause2;

let buttonJump;
let buttonJump2;

let vol;
let vol2;

let slider;
let slider2;

let slidePan;
let slidePan2;

let sliderRate;
let sliderRate2;

let amp;

let jumpV;
let jumpV2;

function preload() {
  soundFormats("mp3", "ogg");

  mm = loadSound("sample.mp3");//캐롤
  mm2 = loadSound("sample2.mp3");//아파트
  snowImage = loadImage("snow1.png"); 
}

function setup() {
  createCanvas(640, 640);
  // mm2.play();

  amp = new p5.Amplitude();

  vol = 0.5;
  vol2 = 0.5;
  
  //play button
  button = createButton("PLAY");
  button.mousePressed(playMusic);
  
  button2 = createButton("PLAY2");
  button2.mousePressed(playMusic2);
  
  //pause button

  buttonPause = createButton("PAUSE");
  buttonPause.mousePressed(pauseMusic);
  
  buttonPause2 = createButton("PAUSE2");
  buttonPause2.mousePressed(pauseMusic2);
  
  // 구간 건너뛰기 버튼
  
  buttonJump = createButton("<<1");
  buttonJump.mousePressed(jumpSong2);
  buttonJump = createButton("1>>");
  buttonJump.mousePressed(jumpSong);
  
  buttonJump2 = createButton("<<2");
  buttonJump2.mousePressed(jumpSong2_2);
  buttonJump2 = createButton("2>>");
  buttonJump2.mousePressed(jumpSong_2);

  slider = createSlider(0, 2, 0.5, 0.1);
  slider2 = createSlider(0, 2, 0.5, 0.1);
  
  
  sliderPan = createSlider(-1, 1, 0, 0.1);
  sliderPan2 = createSlider(-1, 1, 0, 0.1);
  
  
  sliderRate = createSlider(0, 2, 1, 0.1);
  sliderRate2 = createSlider(0, 2, 1, 0.1);

  jumpV = 0;
  jumpV2 = 0;
}

function draw() {
  background(220);
  
  mm.setVolume(vol);
  mm2.setVolume(vol2);
  
  vol = slider.value();
  vol2 = slider2.value();
  
  mm.pan(sliderPan.value());
  mm2.pan(sliderPan2.value());
  
  mm.rate(sliderRate.value());
  mm2.rate(sliderRate2.value());
  
  console.log(amp.getLevel() * 100);
  let amplitude = amp.getLevel() * 1000;
  
  let snowSize = 100 + amplitude; 
  

  
   stroke(255, 255, 255); // 흰색 테두리
  strokeWeight(2);
  
  fill(200, 255, 200, 200);   // 내부 색: 파스텔톤 초록 (투명도 200)
  
  
  triangle(0, 0, 64, 0, 32, 640 - amplitude);
  triangle(64, 0, 128, 0, 96, 640 - amplitude);
  triangle(128, 0, 192, 0, 160, 640 - amplitude);
  triangle(192, 0, 256, 0, 224, 640 - amplitude);
  triangle(256, 0, 320, 0, 288, 640 - amplitude);
  triangle(320, 0, 384, 0, 352, 640 - amplitude);
  triangle(384, 0, 448, 0, 416, 640 - amplitude);
  triangle(448, 0, 512, 0, 480, 640 - amplitude);
  triangle(512, 0, 576, 0, 544, 640 - amplitude);
  triangle(576, 0, 640, 0, 608, 640 - amplitude);
  
  
  stroke(255, 255, 255); // 흰색 테두리
  strokeWeight(2);   
  fill(255, 200, 200, 200);
  
  
  triangle(0, 640, 32, 640, 0, 0 + amplitude);
  triangle(608, 640, 640, 640, 640, 0 + amplitude);
  
  

  triangle(32, 640, 96, 640, 64, 0 + amplitude);
  triangle(96, 640, 160, 640, 128, 0 + amplitude);
  triangle(160, 640, 224, 640, 192, 0 + amplitude);
  triangle(224, 640, 288, 640, 256, 0 + amplitude);
  triangle(288, 640, 352, 640, 320, 0 + amplitude);
  triangle(352, 640, 416, 640, 384, 0 + amplitude);
  triangle(416, 640, 480, 640, 448, 0 + amplitude);
  triangle(480, 640, 544, 640, 512, 0 + amplitude);
  triangle(544, 640, 608, 640, 576, 0 + amplitude);
  
   // 눈 이미지 그리기
  imageMode(CENTER); // 이미지 중심으로 배치
  image(snowImage, width / 2, height / 2, snowSize, snowSize);
}

// play 
function playMusic() {
  if (mm2.isPlaying()) {
    mm2.stop(); // mm2가 재생 중이라면 중지
    button2.html("PLAY2"); // 버튼 텍스트 업데이트
  }
  
  if (!mm.isPlaying()) {
    mm.play();
    button.html("STOP");
  } else {
    mm.stop();
    button.html("PLAY");
  }
}

function playMusic2() {
  if (mm.isPlaying()) {
    mm.stop(); // mm가 재생 중이라면 중지
    button.html("PLAY"); // 버튼 텍스트 업데이트
  }
  
  if (!mm2.isPlaying()) {
    mm2.play();
    button2.html("STOP2");
  } else {
    mm2.stop();
    button2.html("PLAY2");
  }
}


//pause 함수

function pauseMusic() {
  if (!mm.isPlaying()) {
  } else {
    mm.pause();
    button.html("PLAY");
  }
}


function pauseMusic2() {
  if (!mm2.isPlaying()) {
  } else {
    mm2.pause();
    button2.html("PLAY2");
  }
}

// 구간 건너뛰기 함수

function jumpSong() {
  jumpV = jumpV + 39.165;
  if (jumpV + 39.165 >= 195.835) {
    jumpV = 195.835;
  }
  mm.jump(jumpV);
}
function jumpSong2() {
  jumpV = jumpV -39.165;
  if (jumpV <= 39.165) {
    jumpV = 0;
  }
  mm.jump(jumpV);
}


function jumpSong_2() {
  jumpV2 = jumpV2 + 24.71;
  if (jumpV2 + 24.71 >= 148) {
    jumpV2 = 148;
  }
  mm2.jump(jumpV2);
}
function jumpSong2_2() {
  jumpV2 = jumpV2 - 24.71;
  if (jumpV2 <= 24.71) {
    jumpV2 = 0;
  }
  mm2.jump(jumpV2);
}
