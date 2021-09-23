import { Container, Grid } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"

export default function Landing() {
    return (
        <div className="landing">
            <Container>
                <Grid container className="landing-container">
                    <Grid item xs={12} sm={6} md={6} className="">
                        <h1 className="landing-h1" data-aos="fade-down">Hello, I&apos;m Arnab Chatterjee</h1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
