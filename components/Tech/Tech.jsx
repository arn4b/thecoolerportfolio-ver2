import { Container, Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import Image from 'next/image'
import tech2 from '../../public/images/tech2.png'

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Fade from 'react-reveal/Fade';


export default function Tech() {
    return (
        <div className="tech" id="tech">
            <h1 className="tech-header">Tech</h1>

            <Container className="tech-cont">
                <Grid.Container gap={2} justify="center" alignItems="center">
                    <Grid md={6} className="flex flex-col">
                        <Fade bottom duration={2000}>
                            <h1 className="tech-text">Jack of all trades, Master of One</h1>
                            <h2 className="tech-subtext">In my Swiss Army Knife of FullStack skills, React and Vue are my sharpest blades. With over a year of experience in React, and a half in Vue I&apos;ve contributed to communities and startups alike, and so far, thankfully nothing has fallen apart :&apos;). From there, its just Onwards and Upwards 🚀 </h2>
                        </Fade>
                    </Grid>
                    <Grid md={6}>
                        <Fade bottom duration={2000}>
                            <Image className="tech-img" src={tech2} />
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
