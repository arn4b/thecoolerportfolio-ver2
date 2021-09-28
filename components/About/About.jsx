import { Container, Button, Grid } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'


export default function About() {
    return (
        <div className="about">
            <Container>
                <h1 className="about-header">Sorry, Who?</h1>
                        <p className="about-main-text"> </p>

                        <Button className="about-btn" variant="outlined">Get My Resume</Button>
            </Container>
        </div>
    )
}
