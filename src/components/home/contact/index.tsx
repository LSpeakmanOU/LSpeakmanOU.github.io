import { Flex } from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return <div className="infoBlock">
            <Flex justify="center" gap="xl" align="center"><h3>Contact</h3></Flex>
            <Flex justify="center" gap="xl" align="center"><p>ls173818@ohio.edu</p></Flex>
            
            <Flex justify="center" gap="xs">
                <a style={{color:"white"}} href="https://www.linkedin.com/in/liamspeakman/"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a> 
                <a style={{color:"white"}} href="https://github.com/LSpeakmanOU"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                <a style={{color:"white"}} href="https://www.youtube.com/@monkey22mm1"><FontAwesomeIcon icon={faYoutube} size="3x"/></a>
                <a style={{color:"white"}} href="https://en.wikipedia.org/wiki/User:LSpeakmanOU"><FontAwesomeIcon icon={faWikipediaW} size="3x"/></a>
            </Flex>   
           
        </div>
  }
  