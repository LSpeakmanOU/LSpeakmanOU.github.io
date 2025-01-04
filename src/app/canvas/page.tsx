'use client'
import React, { useRef, useEffect} from 'react'
import { init, draw, keydown, keyup, mousemove, mouseup} from './game.js';
export default function Canvas() {
  const canvasRef = useRef(null) as React.RefObject<HTMLCanvasElement | null>;
  

  useEffect(() => {
      const canvas = canvasRef.current;
      
      if(canvas != null){
    
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          console.log("beep")
        };
        window.addEventListener("resize", resizeCanvas);        
        window.addEventListener("keydown", keydown);
        window.addEventListener("keyup", keyup);
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        resizeCanvas();
        const ctx = canvas.getContext('2d');
        init(canvas, ctx);
        const gameLoop = () => {
          draw(ctx, canvas);
          requestAnimationFrame(gameLoop);
        };
        requestAnimationFrame(gameLoop);
        return () => {
          window.removeEventListener("resize", resizeCanvas)        
          window.removeEventListener("keydown", keydown);
          window.removeEventListener("keyup", keydown);
          window.removeEventListener("mousemove", mousemove);          
          window.removeEventListener("mouseup", mouseup);


        };
    } 
  }, []);
  
  return <canvas ref={canvasRef}/> ;
}
