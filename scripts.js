var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var height = canvas.height;
var width = canvas.width;

ctx.strokeStyle = "#FFFFFF"

$('#canvas').mousedown(function(e){
    mouse.down = true;
});

$('#canvas').mouseup(function(e){
    mouse.down = false;
});

$('#canvas').mousemove(function(e){
    mouse.e = e;
});

setInterval(render, 100);
setInterval(tick, 100);

var you = {
    x: 20,
    y: 0,
    width: 10,
    height: 50
};

var them = {
    x: 0,
    y: 0,
    width: 10,
    height: 30,
    speed: 0
};

var ball = {
    x: 0,
    y: 0,
    width: 10,
    height: 30,
    velocityX: 0,
    velocityY: 0
};

var mouse = {
    x: 0,
    y: 0,
    down: false,
    e: null
};

// get mouse pos relative to canvas (yours is fine, this is just different)
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function tick(){
    if (mouse.down){
        mouse = getMousePos(canvas, mouse.e);
    }
    you.y = mouse.y + you.height;
}

function render() {
    ctx.clearRect(0, 0, width, height);
    
    //YOU
    ctx.beginPath();
    ctx.lineWidth = you.width;
    ctx.moveTo(you.x, you.y);
    ctx.lineTo(you.x, you.y + you.height);
    ctx.stroke();
}