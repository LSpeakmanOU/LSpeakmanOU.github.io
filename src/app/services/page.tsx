'use client'
import { useState, useEffect } from 'react';
import Navigation from "@/components/navigation";
import Preview from "@/components/projects/preview";
import pyVoxelEngine from '@/res/pyvoxelengine_prev.png'
import undercon from '@/res/underconstruction.png'
import Typewriter from "@/components/pizazz/typewriter";

import { Flex, Stack } from '@mantine/core';
import PaypalButton from '@/components/services/paypalbutton';
const jobs = [
  "web scraper?",
  "game mechanic?",
  "web app?",
  "discord bot?",
  "mobile app?",
];
export default function Services() {
 
  return <div>
    <Navigation title="Services"/>
    <Typewriter startText="Have an idea for a " elements={jobs} />
    <Flex>
      <Stack>
      
      <h3>I may be able to help!</h3>
      </Stack>
    
    <PaypalButton/>
    </Flex>
    
    </div>
  
}
