import React from 'react'
import Image from 'next/image'
import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';
import arnab_cont from '../../public/images/arnab_contact.svg'
import Fade from 'react-reveal/Fade';
import { Container } from '@mui/material'


export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="contact-header">Contact</h1>
            <Container className="contact-container">
            <h1 className="contact-text">Hit me Up</h1>
                <Grid.Container gap={2} justify="center">
                    <Grid md={6}>
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={arnab_cont} width="2000px" height="2000px" />
                        </Fade>
                    </Grid>
                    <Grid md={6} className="flex flex-col abt-text-section">
                    <Fade bottom duration={2000}>
                        {/* <form action="https://formspree.io/f/xeqpbwja" method="POST">
                        <Spacer y={3} />
                        <Input color="secondary" fullWidth underlined invert className="cont-input" size="xlarge" labelPlaceholder="Name 🤖" name="name"/>
                        <Spacer y={3} />
                        <Input color="secondary" fullWidth underlined invert className="cont-input" size="xlarge" labelPlaceholder="Email 📩" name="_replyto"/>
                        <Spacer y={3} /> */}
                        {/* <Input color="secondary" underlined invert className="cont-input" size="xlarge" labelPlaceholder="Message 📃" /> */}
                        {/* <Textarea
                            underlined
                            color="secondary"
                            labelPlaceholder="Message 📃"
                            size="xlarge"
                            fullWidth="true"
                            name="message"
                        />
                        <Spacer y={3} />

                        <Button className="contact-btn" size="xlarge" shadow color="gradient" auto type="submit">Send</Button>
                        </form> */}

                        <p className="about-subtext">Drop me a mail on <a href='mailto:hey.arn4b@gmail.com' style={{ 'color': 'rgb(123, 0, 150)' }}>hey.arn4b@gmail.com</a> for any queries. <br/><br/>I can also be reached via <a href='https://linkedin.com/in/arn4b' style={{ 'color': '#0072b1' }}>LinkedIn</a> or <a href='https://twitter.com/arn4b_' style={{ 'color': '#1da1f2' }}>Twitter</a>.</p>
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
