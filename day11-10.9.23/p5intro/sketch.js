function setup() {
    createCanvas(innerWidth,innerHeight)

    background(0,200,100)
}

function draw() {

    let red = map(mouseX, 0, width, 0, 255)
    fill(red,0,0)
    // noFill()
    strokeWeight(1)
    stroke(mouseX,mouseY,225)
    rect(mouseX,mouseY, random(10.50))
    


}
// an event listener that "listens" for when the page is resized.
function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}