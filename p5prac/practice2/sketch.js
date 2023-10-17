// let customFont; // Declare a variable to hold the custom font

// function preload() {
  // Load your custom font here. Replace 'your_font.otf' with the actual font file path.
//    customFont = loadFont('https://fonts.googleapis.com')
//  }

function setup() {
    createCanvas(innerWidth,innerHeight)
    background(102,0,0)
    rectMode(CENTER)

}

function draw() {
    // Map the red value based on the mouse's X position
    let red = map(mouseX, 0, width, 0, 255);
    fill(red, 0, 0);
  
    // Set the stroke color based on the mouse position
    // stroke(0, 0, 255);
    // stokeWeight(2);
  
    // Create random rectangles at the mouse position
    // rect(mouseX, mouseY, random(10, 50), random(10, 50));
  
    // Set the text size for the "HA" text
    let textSizeValue = random(20, 100);
    textSize(textSizeValue);

    // Apply the custom font to the text
    // textFont(customFont);

    text("HA HA", random(width), random(height));
  }



// an event listener that "listens" for when the page is resized.
function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(0,22,30)
}