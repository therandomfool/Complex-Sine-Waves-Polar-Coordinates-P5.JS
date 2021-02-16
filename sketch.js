let i = 1;
let r = 100;
let g = 100;
let b = 100;
let r2 = 100;
let g2 = 100;
let b2 = 100;
let sw = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  filter(INVERT);
  background(r2, g2, b2);

  if (i % 100 === 0) {

    r = random(255);
    g = random(255);
    b = random(255);

    sw = random(1, 55);
  }

  if (i % 135 === 0) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }

  stroke(r, g, b);
  strokeWeight(sw);
  noFill();
  translate(width / 2, height / 2);

  beginShape()
  for (let i = 0; i < 350; i++) {

    let r1Min = map(sin(frameCount / 3.14), -1, 1, 50, 100);
    let r1Max = map(sin(frameCount * 3.14), -1, 1, 100, 30);

    let r2Min = map(sin(frameCount / 20), -1, 1, 100, 150);
    let r2Max = map(sin(frameCount * 3.14), -1, 1, 0, 140);

    let r1 = map(sin(i * 3), -1, 1, r1Min, r1Max);
    let r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
    let r = r1 + r2;
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y)
  }
  i++
  endShape(CLOSE);


}