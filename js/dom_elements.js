let canvas;
let input_txt;
let slider_value;
let value=0;
let value_r=255;
let value_g=255;
let value_b=255;
let w_r=0
let h_r=0

function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  input_txt=createInput('hola');
  slider_value=createSlider(1,500,50);
  
}

function draw() {
  background(value);
  fill(value_r,value_g,value_b);
  input_txt.position(w_r,h_r);
  textSize(slider_value.value());
  text(input_txt.value(),50,350);
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
  
  w_r=random(width);
  h_r=random(height);
  value_r=random(255);
  value_g=random(255);
  value_b=random(255);
}