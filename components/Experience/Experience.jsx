import React from 'react'
import { Container } from '@mui/material'
import Fade from 'react-reveal/Fade';

export default function Experience() {
    return (
        <div className="experience">
            <h1 className="exp-header">Work</h1>

            <Container className="exp-cont">
                <Fade bottom duration={2000}>
                    <p className="exp-main-text">Web Dev Lead @ MSC KIIT <br /> Frontend Intern @ Mauka <br /> Web Team Core @ HackClub <br /> Frontend Dev @ Mozilla BBSR</p>
                </Fade>
            </Container>
        </div>
    )
}
