import { Flex } from '@mantine/core';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
export default function CV() {
    return <div className="infoBlock">
        <Flex justify="center" align="center"><h3 style={{paddingLeft:"30px", width: "200px"}}>Curriculum vitae</h3></Flex>
        <Flex justify="center">
            <Link href="/" style={{color:"white"}}>
                <FontAwesomeIcon icon={faFile} size="6x"/>
            </Link>
        </Flex>
        
        </div>
  }
  