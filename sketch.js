let lightOff = false;
let r, g, b;

function setup() {
  createCanvas(240, 480);

}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  if (lightOff){
    background(r, g, b, 50);
  }
  else {
    background(255);
  }

  noFill();
  rect(70, 100, 100);
  line(120, 100, 120, 200);
  quad(200, 400, 190, 420, 230, 420, 220, 400);
  line(210, 420, 210, 445);
  line(200, 420, 200, 430);
  rect(200, 445, 20, 3);

  fill(255,255,255);
  ellipse(200, 430, 3);
  
  

  if (dist(mouseX, mouseY, 200, 430) < 3 ){
    ellipse(200, 430, 15);
  
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, 200, 430) < 3 ){
    ellipse(200, 430, 15);
    lightOff = !lightOff
    }
  }

