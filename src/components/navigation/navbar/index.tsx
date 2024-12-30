import { Button, Container } from '@mantine/core';
import Link from "next/link";

export default function Navbar() {
    return <>
        <div className="navbar">
            <Link href="/">
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
        </div>
      </>
  }
  