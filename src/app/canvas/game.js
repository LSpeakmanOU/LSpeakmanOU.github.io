let x = 0.0;
let canvas = null;
let mx = 0;
let my = 0;
let target = null;
let target_loaded = false;
let bullets = [];
class Bullet{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
    
export function init(c){
    canvas = c;
    canvas.style.cursor = 'none';
    target = new Image();
    target.src = "res/targeti.png"
    target.onload = () =>{target_loaded = true;}
}
export function draw(ctx, canvas, deltatime){
    x += deltatime * .01;
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    if(target_loaded)
        ctx.drawImage(target, mx-50, my-50, 100, 100);
    console.log(bullets)
    for(var i = 0;i<bullets.length;i++){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(bullets[i].x-5, bullets[i].y-5, 10, 10);
        ctx.stroke();
    }
    
}
export function keydown(event){
}
export function keyup(event){
    console.log(event.key)
}
export function mousemove(event) {
    const rect = canvas.getBoundingClientRect();
    mx = event.clientX - rect.left;
    my = event.clientY - rect.top;
}
export function mousedown(event){
    console.log("x: " + mx + " y: " + my)
}
export function mouseup(event){
    bullets.push(new Bullet(mx, my))
}