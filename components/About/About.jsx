import { Container, Button, Grid } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'


export default function About() {
    return (
        <div className="about">
            <Container>
                <h1 data-aos="fade-down" data-aos-duration="3000" className="about-header">About</h1>
                        <p data-aos="fade-down" data-aos-duration="3000" className="about-main-text">I&apos;m a Pre-Final Year Undergraduate at Kalinga Institute of Industrial Technology, Bhubaneshwar, majoring in Computer Science and System Engineering.

                            <br /><br />

                            I have over 1 and a half years of experience in developing mobile-first fully responsive frontend sites using ReactJS, and multiple frontend frameworks like Bootstrap, MaterialUI, etc. as well as developing mobile apps for both Android and iOS using React Native. I have worked on multiple projects using React, NodeJS, Firebase and multiple other JS frameworks. </p>

                        <Button className="about-btn" variant="outlined">Get My Resume</Button>
            </Container>
        </div>
    )
}
