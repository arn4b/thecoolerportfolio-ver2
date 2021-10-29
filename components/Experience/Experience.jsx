import React from 'react'
import { Container } from '@mui/material'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

import msckiit from '../../public/logos/msckiit.png'

import { Tooltip, Text, Row, Col, Grid, Button } from '@nextui-org/react';

export default function Experience() {
    return (
        <div className="experience">
            <h1 className="exp-header">Work</h1>

            <Container className="exp-cont">
                <Fade bottom duration={2000}>
                    <p className="exp-main-text">
                        <Tooltip className="tooltip" content={"Jan \'21 - Present"} placement="right">
                            <Text>Web Dev Lead @ MSC KIIT</Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'July \'21 - Sep \'21'} placement="right">
                            <Text>Frontend Intern @ Mauka</Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right">
                            <Text>Web Team Core @ HackClub</Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right">
                            <Text>Frontend Dev @ Mozilla BBSR</Text>
                        </Tooltip>
                    </p>
                </Fade>
            </Container>
        </div>
    )
}
