import { Container, Grid, Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'


export default function Tech() {
    return (
        <div className="tech">
            <Container>
                <h1 className="tech-header">Tech Stacks</h1>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={8}>
                        <Grid container item spacing={8}>
                            <Grid item xs={3}>
                                <div className="tech-box">
                                    <Image className="tech-img" src={logo}
                                     />
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="tech-box">
                                    <Image className="tech-img" src={logo}
                                     />
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="tech-box">
                                    <Image className="tech-img" src={logo}
                                     />
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="tech-box">
                                    <Image className="tech-img" src={logo}
                                     />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
