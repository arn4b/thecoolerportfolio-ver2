import React from 'react'
import { Container } from '@mui/material'
import Fade from 'react-reveal/Fade';

import { Tooltip, Text, Row, Col, Grid, Button } from '@nextui-org/react';

export default function Experience() {
    return (
        <div className="experience">
            <h1 className="exp-header">Work</h1>

            <Container className="exp-cont">
                <Fade bottom duration={2000}>
                    <p className="exp-main-text">
                        <Tooltip content={<MSC />} placement="bottom">
                            <Text>Web Dev Lead @ MSC KIIT</Text>
                        </Tooltip>

                        <Tooltip content={'Yo wassup'} placement="bottom">
                            <Text>Frontend Intern @ Mauka</Text>
                        </Tooltip>

                        <Tooltip content={'Developers love Next.js'} placement="bottom">
                            <Text>Web Team Core @ HackClub</Text>
                        </Tooltip>

                        <Tooltip content={'Developers love Next.js'} placement="bottom">
                            <Text>Frontend Dev @ Mozilla BBSR</Text>
                        </Tooltip>
                    </p>
                </Fade>
            </Container>
        </div>
    )
}

function MSC() {
    return (
        <div>
            <Container>
                <Text className="tool-header" h1>Web Team Lead at Microsoft Students Community KIIT</Text>
                <Grid.Container gap={2} justify="center">
                    <Grid md={6}>
                        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
                    </Grid>
                    <Grid md={6}>
                        <h1></h1>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>


    )
}