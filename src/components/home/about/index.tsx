import { Flex } from '@mantine/core';

export default function About() {
    return <div className="infoBlock">
        <Flex justify="center" align="center"><h3>About</h3></Flex>
        <p style={{paddingLeft:"20%",paddingRight:"20%", width:"500px"}}>
            I am currently a U.S. Naval Reserve veteran and Computer Science PhD student at Ohio University.<br/>
            My research area is bioinformatics in the 3D genome specifically around supervised machine learning and genomic/epigenomic features.<br/>
            As a hobby, I program 2D/3D games and simulations and enjoy working with sockets and low level networking.<br/>
            </p>
    </div>
  }
  