// SELECT THE ELEMENTS ON THE PAGE -CanvasGradient, SHAKE GamepadButton
// SETUP OUR CANVAS FOR DRAWING
// WRITE  DRAW Function
// WRITE A HANDLER FOR THE ARROW KEYS
// CLEAR "SHAKE" Function
// LISTEN FOR ARROW KEYS

//SELECT THE ELEMENTS ON THE PAGE
const canvas = document.getElementById("etch-a-sketch");// querySelector consoles as null
console.log(canvas);  

//SETUP OUR CANVAS FOR DRAWING
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const moveAmmount = 10;
let hue = 0
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

//MAKE A VARIABLE CALLED HEIGHT AND WIDTH FROM THE SAME PROPERTIES ON OUR CANVAS
const{width, height} = canvas; // destructed varibale for DRY code

//CREATE RANDOM X AND Y COORDINATES
let x  = Math.floor(Math.random()* width)
let y  = Math.floor(Math.random()* height)
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

ctx.beginPath(); //STARTS THE DRAWING (PUTS PEN ON PAPER)
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke(); 

// WRITE A DRAW FUNCTION
function draw({key}) {
    console.log(key);
    hue += 10
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    //START THE PATH
    ctx.beginPath(); //FROM THE RANDOM STARTING POINT
    ctx.moveTo(x, y); // MOVE TO NEW COORDINATES

    //MOVE OUR X & Y VALUES DEPENDING ON WHAT THE USER PRESSED
    switch(key){
        default: 
                break;
        case 'ArrowUp':
                y -= moveAmmount;
                break;
        case 'ArrowRight':
                x += moveAmmount;
                break;
        case 'ArrowDown':
                y += moveAmmount;
                break;
        case 'ArrowLeft':
                x -= moveAmmount;
                break;
}
    ctx.lineTo(x,y); // CONNECTS THE 2 POINTS
    ctx.stroke(); // DRAWS THE LINE ALONG THE CONNECTION BETWEEN 2 POINTS ABOVE
}

//WRITE A HANDLER FOR THE ARROW KEYS
function handlekey (event) {
    if(event.key.includes('Arrow')){
            event.preventDefault()
            draw({key: event.key});
}};

// LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handlekey);
shakeButton.addEventListener('click', clearCanvas);

// CLEAR "SHAKE" Function
function clearCanvas () {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    console.log(`done the shake`);

}