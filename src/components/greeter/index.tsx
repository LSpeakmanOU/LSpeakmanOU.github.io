'use client'
import { useState, useEffect } from 'react';
import { Flex, Stack} from '@mantine/core';
import Image from "next/image";
import profilePic from '@/res/profile.jpg'

export default function Greeter() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 868);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>{isMobile ? <Stack>
        <Flex justify="center"><Image style={{borderRadius: "50%", marginRight:"5%"}}
        src={profilePic}
        width={200}
        height={200}
        alt="Picture of the author"
        /></Flex>
          <Flex justify="center"><div>
            <h2>My name is Liam Speakman</h2> <h2 style={{paddingLeft:"5%"}}>(the person not the cat)</h2>
          </div></Flex>
      </Stack>: <Flex justify="center" gap="xl" align="center">
    <Image style={{borderRadius: "50%", marginRight:"5%"}}
    src={profilePic}
    width={200}
    height={200}
    alt="Picture of the author"
    />
      <div style={{width:"450px"}}>
        <h1>My name is Liam Speakman <span style={{paddingLeft:"5%"}}>(the person not the cat)</span></h1>
      </div>     
  </Flex>}</>
  }
  
