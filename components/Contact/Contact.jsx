import React from 'react'
import Image from 'next/image'
import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';

import { Container } from '@mui/material'




export default function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-header">Contact</h1>
            <Container className="contact-container">
                <Grid.Container gap={2} justify="center">
                    <Grid md={6} className="flex flex-col">
                        <h1 className="contact-text">Hit me Up</h1>

                        <Spacer y={3} />
                        <Input color="secondary" underlined invert className="cont-input" size="xlarge" labelPlaceholder="Name 🤖" />
                        <Spacer y={3} />
                        <Input color="secondary" underlined invert className="cont-input" size="xlarge" labelPlaceholder="Email 📩" />
                        <Spacer y={3} />
                        {/* <Input color="secondary" underlined invert className="cont-input" size="xlarge" labelPlaceholder="Message 📃" /> */}
                        <Textarea
                            underlined
                            color="secondary"
                            labelPlaceholder="Message 📃"
                            size="xlarge"
                            fullWidth="true"
                        />
                        <Spacer y={3} />

                        <Button className="contact-btn" size="xlarge" shadow color="gradient" auto>Send</Button>
                    </Grid>
                    <Grid md={6}>

                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
