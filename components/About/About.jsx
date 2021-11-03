import { Container, useMediaQuery } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'
import Fade from 'react-reveal/Fade';

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';



import rlogowhite from '../../public/images/react-logo-white.png'
import nextlogo from '../../public/images/next-logo.png'


export default function About() {

    return (
        <div className="about  mandatory-scroll-snapping">
            <h1 className="about-header">About</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col">
                        <Fade bottom duration={2000}>
                            <p className="about-main-text">All Work, All Play</p>
                            <p className="about-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Spacer y={1} />
                            <Button className="about-btn" size="xlarge" shadow color="gradient" auto>Get My Resume</Button>
                        </Fade>

                    </Grid>
                    <Grid xs={12} md={6} className="about-img-col">
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={arnab} width="2000px" height="2000px" />
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
