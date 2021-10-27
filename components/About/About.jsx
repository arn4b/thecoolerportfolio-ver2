import { Container } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'
import Fade from 'react-reveal/Fade';

import { Row, Col, Grid, Button } from '@nextui-org/react';



import rlogowhite from '../../public/images/react-logo-white.png'
import nextlogo from '../../public/images/next-logo.png'

export default function About() {
    return (
        <div className="about  mandatory-scroll-snapping">
            <h1 className="about-header">About</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid md={6} className="flex flex-col">
                        <Fade bottom duration={2000}>
                            <p className="about-main-text">React <Image className="logos" src={rlogowhite} width="75px" height="67px" /><br /> Next.js <Image className="logos" src={nextlogo} width="75px" height="75px" /><br /> and a sh*t ton of CSS.</p>
                            <Button className="about-btn" size="xlarge" shadow color="gradient" auto>Get My Resume</Button>
                        </Fade>

                    </Grid>
                    <Grid md={6}>
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={arnab} width="2000px" height="2000px"/>
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
