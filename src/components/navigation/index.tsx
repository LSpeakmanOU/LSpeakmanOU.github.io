'use client'
import { useState, useEffect } from 'react';
import Navbar from "@/components/navigation/navbar";
import MobileNavbar from "@/components/navigation/mobilenav";

export default function Navigation(props : {title : string}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>{isMobile ? <MobileNavbar title={props.title}/> : <Navbar/>}</>
  }
  