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
                        <Tooltip className="tooltip" content={"Jan \'21 - Present"} placement="right" hideArrow rounded>
                            <Text>Web Dev Lead @ <span style={{'color' : '#0176d3'}}>MSC KIIT</span></Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right" hideArrow rounded>
                            <Text>Tech Lead @ <span style={{'color' : '#f21900'}}>Mozilla BBSR</span></Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'July \'21 - Sep \'21'} placement="right" hideArrow rounded>
                            <Text>Frontend Intern @ <span style={{'color' : '#283891'}}>Mauka</span></Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right" hideArrow rounded>
                            <Text>Web Team Core @ <span style={{'color' : '#ec3750'}}>HackClub</span></Text>
                        </Tooltip>
                    </p>
                </Fade>
            </Container>
        </div>
    )
}
