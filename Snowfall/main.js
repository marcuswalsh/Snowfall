// SNOWFALL

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Event Listener
document.addEventListener('keypress', changeAmount);

// Parallel arrays storing coordinates, radius, and speed
let snowX = [];
let snowY = [];
let snowR = [];
let snowSpeed = [];

// Generates intial snowflakes
for(i = 0; i < 20; i ++){
    snowX.push(Math.random()*cnv.width);
    snowY.push(Math.random()*cnv.height);
    snowR.push(Math.random()*4 + 1);
    snowSpeed.push(Math.random()*4 + 2);
}

// Allows user to add or remove snowflakes
function changeAmount(){
    if(event.code == 'Digit1'){
        snowX.push(Math.random()*cnv.width);
        snowY.push(Math.random()*cnv.height);
        snowR.push(Math.random()*4 + 1);
        snowSpeed.push(Math.random()*4 + 2);
    } else if(event.code == 'Digit2'){
        snowX.shift();
        snowY.shift();
        snowR.shift();
        snowSpeed.shift();
    }
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    ctx.strokeStyle = "white";
    // Drawing
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    //Snowflake motion
    for(i = 0; i < snowX.length; i ++){
        ctx.strokeCircle(snowX[i], snowY[i], snowR[i]);
        snowY[i] += snowSpeed[i];
        if(snowY[i] > cnv.height){
            snowX[i] = Math.random()*cnv.width;
            snowY[i] = 0;
        }
    }
    // Request another Animation Frame
    requestAnimationFrame(draw);
}                                     

ctx.strokeCircle = function(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
}