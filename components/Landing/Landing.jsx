import { Container, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image';

import { motion } from "framer-motion"
import Fade from 'react-reveal/Fade';


export default function Landing() {

    return (
        <div className="landing" id="home">
            <Container>
                        <Fade duration={2500} delay={500} big>
                            <h3 className="landing-h3">Hello, I&apos;m </h3>
                        </Fade>
                        <Fade duration={2500} delay={1000}>
                            <h1 className="landing-h1">Arnab Chatterjee</h1>
                        </Fade>
            </Container>
        </div>
    )
}
