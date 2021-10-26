import { Container, Grid } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'
import Fade from 'react-reveal/Fade';

import { Button } from '@nextui-org/react';


import rlogowhite from '../../public/images/react-logo-white.png'
import nextlogo from '../../public/images/next-logo.png'

export default function About() {
    return (
        <div className="about  mandatory-scroll-snapping">
            <h1 className="about-header">About</h1>
            <Container className="flex">
                <div className="about-content">
                <Fade bottom duration={2000}>
                    <p className="about-main-text">React <Image className="logos" src={rlogowhite} width="100px" height="90px" /><br/> Next.js <Image className="logos" src={nextlogo} width="100px" height="100px" /><br/> and a shit ton of CSS.</p>
                
                {/* <Button className="about-btn" variant="outlined">Get My Resume</Button> */}
                <Button className="about-btn" size="xlarge" shadow color="gradient" auto>Get My Resume</Button>
                </Fade>
                </div>
            </Container>
        </div>
    )
}
