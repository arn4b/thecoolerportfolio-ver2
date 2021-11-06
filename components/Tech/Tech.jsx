import { Container, Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import Image from 'next/image'
import tech from '../../public/images/tech.png'

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Fade from 'react-reveal/Fade';


export default function Tech() {
    return (


        <div className="tech">
            <h1 className="tech-header">Tech</h1>

            <Container className="tech-cont">
                <Grid.Container gap={2} justify="center">
                    <Grid md={6} className="flex flex-col">
                        <Fade bottom duration={2000}>
                            <h1 className="tech-text">Jack of all trades, Master of One</h1>
                            <h2 className="tech-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                        </Fade>
                    </Grid>
                    <Grid md={6}>
                        <Fade bottom duration={2000}>
                            <Image className="tech-img" src={tech} />
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
