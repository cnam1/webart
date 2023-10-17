function setup() {
    createCanvas(innerWidth,innerHeight)
    background(0,0,102)
    rectMode(CENTER)

}

function draw() {
    // Map the red value based on the mouse's X position
    let blue = map(mouseX, 0, width, 0, 255);
    fill(0, 0, blue);
  
    // Set the stroke color based on the mouse position
    // stroke(0, 0, 255);
    // stokeWeight(2);
  
    // Create random rectangles at the mouse position
    // rect(mouseX, mouseY, random(10, 50), random(10, 50));
  
    // Set the text size for the "Blue" text
    let textSizeValue = random(20, 100);
    textSize(textSizeValue);

    text("BLUE", random(width), random(height));
  }



// an event listener that "listens" for when the page is resized.
function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(0,22,30)
}