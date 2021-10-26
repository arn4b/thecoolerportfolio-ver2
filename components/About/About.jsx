import { Container, Button, Grid } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'
import Fade from 'react-reveal/Fade';

import rlogowhite from '../../public/images/react-logo-white.png'
import nextlogo from '../../public/images/next-logo.png'

export default function About() {
    return (
        <div className="about  mandatory-scroll-snapping">
            <Container>
                {/* <h1 className="about-header">Sorry, Who?</h1> */}
                <Fade bottom duration={2000}>
                    <p className="about-main-text">React <Image className="logos" src={rlogowhite} width="100px" height="90px"/> <br/> Next.js <Image className="logos" src={nextlogo} width="100px" height="100px"/> <br/> and a lot of CSS.</p>
                </Fade>
                <Button className="about-btn" variant="outlined">Get My Resume</Button>
            </Container>
        </div>
    )
}
