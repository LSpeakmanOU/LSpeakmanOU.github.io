let canvas = null;
let mx = 0;
let my = 0;
let target = null;
let target_loaded = false;
let lifesymbol = null;
let lifesymbol_loaded = false;
let bullets = [];
let enemies = [];
let near_clip = 0.01;
let far_clip = 5;
let spawn_dist = 3;
let enemy_depth = 0.5;
let score = 0;
let max_lives = 3;
let lives = max_lives;
let game_over = false;
let wahwah = null;
let bgmusic = null;
let music_loaded = false;
let bloopy = [];
let bloopy_0_load = false;
let bloopy_1_load = false;
let bloopy_disp = 100;
let launched = false;
let anim_frame = 0;
let logo = null;
let logo_loaded = false;
let page_elems = ["res/picture_proj.png","res/cv_proj.png","res/greeter_proj.png","res/contact_proj.png","res/about_proj.png","res/edu_proj.png"]
let page_imgs = []
let enemy_w = [50,253,170,426,245,338,300, 50]
let enemy_h = [50,229,161,99,168,373,166, 50]
let page_elems_loaded = [false,false,false,false,false,false]
let enemy_types = 8;
function playSound(file) {
    const audio = new Audio(file); 
    audio.play();
  }
class Enemy{
    constructor(x, y, w, h, enemy_type = 0, enemySpeed = 0.005) {
        this.x = x;
        this.y = y;
        this.sx = x;
        this.sy = y;
        this.phaseshift = Math.random() * 6.28
        this.z = spawn_dist;
        this.w = w;
        this.h = h;
        this.enemySpeed = enemySpeed;
        this.enemy_type = enemy_type;
    }
    update(){
        this.enemySpeed *= 0.99999;
        this.z -= this.enemySpeed;
        if(this.enemy_type == 0 || this.enemy_type == 7){
            this.x = this.sx + Math.cos(this.z + this.phaseshift) * bloopy_disp        
            this.y = this.sy + Math.sin(this.z + this.phaseshift) * bloopy_disp
        }
        
    }
    render(ctx){
        /**ctx.beginPath();
        ctx.fillStyle = "blue";
        let scaled_w = this.w / this.z;
        let scaled_h = this.h / this.z;
        ctx.fillRect(this.x - .5 * scaled_w, this.y - .5 * scaled_h, scaled_w, scaled_h);
        ctx.stroke();**/
        switch(this.enemy_type){
            case 0: // bloopy
            case 7: // bloopy 2
            if(bloopy_0_load && bloopy_1_load){
                let scaled_w = this.w / this.z;
                let scaled_h = this.h / this.z;
                ctx.drawImage(bloopy[anim_frame], this.x - .5 * scaled_w, this.y - .5 * scaled_h, scaled_w, scaled_h);
            }
            break;
            default:
                if(page_elems_loaded[this.enemy_type - 1]){
                    let scaled_w = this.w / this.z;
                    let scaled_h = this.h / this.z;
                    
                    ctx.drawImage(page_imgs[this.enemy_type - 1], this.x - .5 * scaled_w, this.y - .5 * scaled_h, scaled_w, scaled_h);
                }
            break; 
        }
        
    }
}
class Bullet{
    constructor(x, y, bulletSpeed = 0.01) {
        this.x = x;
        this.y = y;
        this.z = 0.00001;
        this.bulletSpeed = bulletSpeed;
    }
    update(){
        this.bulletSpeed *= 0.99999;
        this.z += this.bulletSpeed;
    }
    render(ctx){
        ctx.beginPath();
        ctx.fillStyle = "red";
        //ctx.fillRect(this.x-5, this.y-5, 10, 10);
        let scaled_w = 5 / this.z;
        let scaled_h = 5 / this.z;
        ctx.fillRect(this.x - .5 * scaled_w, this.y - .5 * scaled_h, scaled_w, scaled_h);
        ctx.stroke();
    }
    collides(e){
        let offsetx = e.x - 0.5 * e.w;
        let offsety = e.y - 0.5 * e.h;
        if(Math.abs(this.z - e.z) < enemy_depth){
            if (this.x < offsetx + e.w && this.x + 5 > offsetx) {
                if (this.y < offsety + e.h && this.y + 5 > offsety) {
                    return true;
                }
            }
        }
        return false;
    }
}
function new_game(){
    enemies = [];
    bullets = [];
    lives = max_lives;
    score = 0;
    game_over = false;
}
function launch(){
    setInterval(() =>{
        var temp_type = Math.floor(Math.random() * enemy_types);
        console.log(temp_type)
        enemies.push(new Enemy(Math.max(Math.random() * (canvas.width-100),40), Math.random() * (canvas.height-200), enemy_w[temp_type], enemy_h[temp_type], temp_type));
    }, 1000);
    setInterval(() =>{
        if(anim_frame == 0){
            anim_frame = 1;
        }else{
            anim_frame = 0;
        }
        

    }, 200);
    wahwah = new Audio('res/sadtrombone.swf.mp3');
    bgmusic = new Audio('res/Mesmerizing Galaxy Loop.mp3');
    bgmusic.volume = 0.2;
    music_loaded = true;
}
export function init(c, ctx){
    canvas = c;
    canvas.style.cursor = 'none';
    ctx.imageSmoothingEnabled = false;
    target = new Image();
    target.src = "res/targeti.png"
    target.onload = () =>{target_loaded = true;}
    lifesymbol = new Image();
    lifesymbol.src = "res/battery.png"
    lifesymbol.onload = () =>{lifesymbol_loaded = true;}
    
    let bloopy0 = new Image();
    bloopy0.src = "res/bloopy_0.png"
    bloopy0.onload = () =>{bloopy_0_load = true;}
    bloopy.push(bloopy0);
    let bloopy1 = new Image();
    bloopy1.src = "res/bloopy_1.png"
    bloopy1.onload = () =>{bloopy_1_load = true;}
    bloopy.push(bloopy1);
    logo = new Image();
    logo.src = "res/logo.png"
    logo.onload = () =>{logo_loaded = true;}
    
    for(var i = 0;i<page_elems.length;i++){
        page_imgs.push(new Image());
        console.log(page_elems[i])
        page_imgs[i].src = page_elems[i];
    }
    page_imgs[0].onload = () =>{page_elems_loaded[0] = true;}
    page_imgs[1].onload = () =>{page_elems_loaded[1] = true;}
    page_imgs[2].onload = () =>{page_elems_loaded[2] = true;}
    page_imgs[3].onload = () =>{page_elems_loaded[3] = true;}
    page_imgs[4].onload = () =>{page_elems_loaded[4] = true;}
    page_imgs[5].onload = () =>{page_elems_loaded[5] = true;}

}
export function draw(ctx, canvas){
    if(launched){
        if(music_loaded)
            bgmusic.play();
        if(lives <= 0){
            if(!game_over)
                wahwah.play();
            game_over = true;
            setTimeout(()=>{  
                new_game();
            }, 6000)
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        for(var i = 0;i<enemies.length;i++){
            enemies[i].update();
            enemies[i].render(ctx);
            if(enemies[i].z < near_clip){
                lives -= 1;
                enemies.shift();
                if(!game_over)
                    playSound('res/ouch.mp3')
            }
        }
        for(var i = 0;i<bullets.length;i++){
            bullets[i].update();
            bullets[i].render(ctx);
            if(bullets[i].z > far_clip){
                bullets.shift();
            }
        }
        
        for(var b = 0;b<bullets.length;b++){
            for(var e = 0;e<enemies.length;e++){
                if(bullets[b].collides(enemies[e])){
                    enemies.splice(e, 1);
                    playSound('res/boom.mp3')
                    score += 5;
                }
            }
        }
        if(target_loaded)
            ctx.drawImage(target, mx-50, my-50, 100, 100);
        ctx.font = "32px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + score.toString(),10,30);
        for(var i = 0;i<lives;i++){
            if(lifesymbol_loaded)
                ctx.drawImage(lifesymbol, i*72, canvas.height - 114, 72, 114);
        }
        if(game_over){
            ctx.font = "50px Arial";
            ctx.fillText("GAME OVER",canvas.width / 2 - 150,canvas.height / 2);
            ctx.fillText("Score: " + score.toString(), canvas.width / 2 - 100,canvas.height / 2 + 60);
        }
    }else{            
        if(innerWidth > 948){
            ctx.font = "50px Arial";
            ctx.fillStyle = "white";
            if(logo_loaded)
                ctx.drawImage(logo, canvas.width / 2 - 320,canvas.height / 2 - 200, 624, 173);
            ctx.fillText("Click anywhere to start",canvas.width / 2 - 250,canvas.height / 2);
        }else{
            ctx.font = "24px Arial";
            ctx.fillStyle = "white";
            if(logo_loaded)
                ctx.drawImage(logo, canvas.width / 2 - 160,canvas.height / 2 - 100, 312, 86);
            ctx.fillText("Click anywhere to start",canvas.width / 2 - 130,canvas.height / 2 + 50);
        }
        
    }
}
export function keydown(event){
    console.log(event.key);
}
export function keyup(event){
    if(!launched)
        launch();
    launched = true;
    console.log(event.key)
}
export function mousemove(event) {
    const rect = canvas.getBoundingClientRect();
    mx = event.clientX - rect.left;
    my = event.clientY - rect.top;
}
function run_click_action(event){
    if(launched){
        bullets.push(new Bullet(mx, my))
        playSound('res/pew.mp3')
    }else{
        launch();
        launched = true;
    }
    console.log(event);
}
export function click(event){
    run_click_action(event);
}

export function mouseup(event){
    run_click_action(event);
}
