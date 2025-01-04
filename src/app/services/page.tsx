'use client'
import { useState, useEffect } from 'react';
import Navigation from "@/components/navigation";
import Typewriter from "@/components/pizazz/typewriter";

import { Flex, Stack } from '@mantine/core';
import PaypalButton from '@/components/services/paypalbutton';
import ServiceDescription from '@/components/services/servicedesc';
const jobs = [
  "web scraper?",
  "game mechanic?",
  "web app?",
  "discord bot?",
  "mobile app?",
];
export default function Services() {
  const [isMobile, setIsMobile] = useState(2);
  useEffect(() => {
    const handleResize = () => {
    setIsMobile(((window.innerWidth < 1200) ? 1 : 0) + ((window.innerWidth < 768) ? 1 : 0));
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  switch(isMobile){
    case 0:
      return <div>
    <Navigation title="Services"/>
    <Stack justify="center" align="center">
      <Typewriter startText="Have an idea for a " elements={jobs} />
      <Flex gap="xl" justify="center">
        <ServiceDescription/>
        <PaypalButton size="large" paymentName="Pay for services(choose amount)" 
        description="This button serves as a method of payment for individuals who have already confirmed with me that their project will/has been accomplished" 
        warning="DO NOT USE THIS BUTTON IF THE PROJECT HAS NOT BEEN DISCUSSED!!"
        />
      </Flex>
    </Stack>
    </div>
    case 1:
    case 2: return <div>
    <Navigation title="Services"/>
    <Stack justify="center" align="center">
      <Typewriter startText="Have an idea for a " elements={jobs} />
      
        <ServiceDescription/>
        <PaypalButton size="small" paymentName="Pay for services(choose amount)" 
        description="This button serves as a method of payment for individuals who have already confirmed with me that their project will/has been accomplished" 
        warning="DO NOT USE THIS BUTTON IF THE PROJECT HAS NOT BEEN DISCUSSED!!"
        />
    </Stack>
    </div> 
  }
  
  
}
