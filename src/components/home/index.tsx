'use client'
import { Flex, Stack } from '@mantine/core';
import About from "@/components/home/about";
import CV from "@/components/home/cv";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";

import { useState, useEffect } from 'react';
export default function Info() {
  const [isMobile, setIsMobile] = useState(2);
  useEffect(() => {
    const handleResize = () => {
    setIsMobile(((window.innerWidth < 1280) ? 1 : 0) + ((window.innerWidth < 868) ? 1 : 0));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
    switch(isMobile){
      case 0:
        return <Flex justify="center">
          <About/>
          <CV/>
          <Education/>
          <Contact/>
        </Flex>
      case 1:
        return <div>
          <Flex justify="center">
            <About/>
            <CV/>
          </Flex>
        <Flex justify="center">
          <Education/>
          <Contact/>
        </Flex>
      </div>
      default:
        return <Stack>
          <Flex justify="center"><About/></Flex>
          <Flex justify="center"><CV/></Flex>
          <Flex justify="center"><Education/></Flex>
          <Flex justify="center"><Contact/></Flex>
        </Stack>
    }
  
  
  
  }
