import { Container, Button, Grid, Item } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <h1 className="footer-header">Socials</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <a href="https://github.com/arn4b" target="__blank">
                            <div className="social-links">GitHub</div>
                        </a>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <a href="https://twitter.com/arn4b_" target="__blank">
                            <div className="social-links">Twitter</div>
                        </a>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <a href="https://www.linkedin.com/in/arnab-chatterjee-3944341a0/" target="__blank">
                            <div className="social-links">LinkedIn</div>
                        </a>
                    </Grid>

                </Grid>

            </Container>

        </div>
    )
}
