'use client'
import { Flex } from '@mantine/core';
import  { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Preview(props:{imgsrc: StaticImageData, github: string, pagelink: string, title: string, hover_enabled: boolean}) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        
    }, []);
    return <div className="projdiv grey-on-hover" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        
        <h3 className="projtitle">{props.title}</h3>
        <Image
        src={props.imgsrc}
        alt={"project description"}
        width={500}
        height={300}
        />{isHovered && props.hover_enabled ? 
        <Flex> 
        <Link style={{color: "white"}}href={props.pagelink}><h2 className="projvisit">Visit</h2></Link>
        <a className="projgithub" style={{color:"white"}} href={props.github}>
        <FontAwesomeIcon icon={faGithub} size="5x"/>
        </a>
        </Flex>
         : <></>}                
        
        
    </div>
  }
  