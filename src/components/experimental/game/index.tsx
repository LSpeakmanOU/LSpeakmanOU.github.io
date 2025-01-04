'use client'
import Image from "next/image";
import bloopy0 from '@/res/bloopy1.png'
import bloopy1 from '@/res/bloopy2.png'
import Link from 'next/link'

import  { useState, useEffect } from 'react';

export default function Demo() {
  const [visible, setvisible] = useState(false);
  const [bloopysrc, setbloopy] = useState(0);
  const bloopys = [bloopy0, bloopy1];
   useEffect(() => {
    const myInterval = setInterval(() =>{
      if(bloopysrc == 0){
        setbloopy(1);
      }else{
        setbloopy(0);
      }
  }, 250); 
  return () => clearInterval(myInterval);
    }, [bloopysrc]);
    useEffect(() => {
      const myInterval = setInterval(() =>{
        setvisible(Math.floor(Math.random() * 10) == 1);
    }, 8000); 
    return () => clearInterval(myInterval);
      }, [visible]);
    
  return (
    visible ? 
    <div className="creature">
      <Link
      href="/canvas">
      <Image style={{borderRadius: "50%", marginRight:"5%"}}
      src={bloopys[bloopysrc]}
      width={200}
      height={200}
      alt="Picture of the author"
      />
      </Link>
    </div> : <></>
  );
}