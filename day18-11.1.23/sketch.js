function setup() {
    createCanvas(windowWidth,windowHeight, WEBGL)
    background(0, 0, 250)
    rectMode(CORNER);
}

function draw() {

    fill(0,255,150, 10)
    stroke(0, 255, 180, 127)
    strokeWeight(2)
    box(width/2, height/2)

    push()
    translate(mouseX -width/2, mouseY - height/2)
    rotateX(map(mouseX, 0, width, 0, TWO_PI))

    map()

    box(width/4, height/4, 30)
    pop()


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(120, 0, 0)

    rect(random(width), random(height), 20, 20)

    console.log(width, height);
}