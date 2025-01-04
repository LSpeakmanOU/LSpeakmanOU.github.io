'use client'
import { useState, useEffect } from 'react';
import Navigation from "@/components/navigation";
import Preview from "@/components/projects/preview";
import pyVoxelEngine from '@/res/pyvoxelengine_prev.png'
import undercon from '@/res/underconstruction.png'

import { Flex, Stack } from '@mantine/core';


export default function Projects() {
  const [isMobile, setIsMobile] = useState(2);
  useEffect(() => {
    const handleResize = () => {
    setIsMobile(((window.innerWidth < 1600) ? 1 : 0) + ((window.innerWidth < 968) ? 1 : 0));
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  switch(isMobile){
    case 0:
      return (<div>
        <Navigation title="Projects"/>
        <Flex justify="center" gap="xl">
          <Preview size="large" imgsrc={pyVoxelEngine} github="https://github.com/LSpeakmanOU/VoxelEnginePython" pagelink = "/" title = "Python Voxel Engine" hover_enabled={true}/>      
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
        </Flex>
        <Flex justify="center" gap="xl">
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>      
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
        </Flex>
      </div>);
    case 1:
      return (<div>
        <Navigation title="Projects"/>
        <Flex justify="center" gap="xl">
          <Preview size="large" imgsrc={pyVoxelEngine} github="https://github.com/LSpeakmanOU/VoxelEnginePython" pagelink = "/" title = "Python Voxel Engine" hover_enabled={true}/>      
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
          
        </Flex>
        <Flex justify="center" gap="xl">
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
        </Flex>
        <Flex justify="center" gap="xl">
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
          <Preview size="large" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/>
        </Flex>
      </div>);
    case 2:
      return (<div>
      <Navigation title="Projects"/>
        <Stack>
        <Flex justify="center"><Preview size="small" imgsrc={pyVoxelEngine} github="https://github.com/LSpeakmanOU/VoxelEnginePython" pagelink = "/" title = "Python Voxel Engine" hover_enabled={true}/></Flex>     
        <Flex justify="center"><Preview size="small" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/></Flex>
        <Flex justify="center"><Preview size="small" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/></Flex>
        <Flex justify="center"><Preview size="small" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/></Flex>      
        <Flex justify="center"><Preview size="small" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/></Flex>
        <Flex justify="center"><Preview size="small" imgsrc={undercon} github="/" pagelink = "/" title = "Under construction" hover_enabled={false}/></Flex>
        </Stack></div>)
  }
  
}
