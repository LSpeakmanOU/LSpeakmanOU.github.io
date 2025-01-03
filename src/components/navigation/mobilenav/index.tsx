'use client'
import { useDisclosure } from '@mantine/hooks';
import { Button, Burger, Flex, Stack } from '@mantine/core';
import { Transition } from '@mantine/core';

import Link from "next/link";
const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  };
export default function MobileNavbar(props : {title: string}) {
    const [opened, { toggle }] = useDisclosure();

    return <>
        <div className="navbar">            
            <Flex>
            <Button variant="transparent" size="md" color="#BDBDBD">{props.title}</Button>
            <Burger style={{marginLeft:"auto", marginTop:"5px"}} color="#BDBDBD" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
            </Flex>
            <Transition
                mounted={opened}
                transition={scaleY}
                duration={200}
                timingFunction="ease"
                keepMounted
            >
                {(transitionStyle) => (
            <Stack 
                    align="stretch"
                    justify="center" style={{ ...transitionStyle, zIndex: 1 }}>
                <Link href="/"style={{borderTop: "1px solid #ccc"}}>
                <Button variant="transparent" size="md" color="#BDBDBD">Home</Button>
                </Link>
                <Link href="/projects">
                <Button variant="transparent" size="md" color="#BDBDBD">Projects</Button>
                </Link>
                <Link href="/abstracts">
                <Button variant="transparent" size="md" color="#BDBDBD">Abstracts</Button>
                </Link>
                <Link href="/publications">
                <Button variant="transparent" size="md" color="#BDBDBD">Publications</Button>
                </Link>
                <Link href="/services">
                <Button variant="transparent" size="md" color="#BDBDBD">Services</Button>
                </Link>
                </Stack> )}
            </Transition>
            
        </div>
      </>
  }
  