import React from 'react'

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Image from 'next/image'

import { Container } from '@mui/material'

import Fade from 'react-reveal/Fade';

import newsdux from "../../public/images/newsdux.png"
import mauka from "../../public/images/mauka.png"
import firepost from "../../public/images/firepost.png"
import instaclone from "../../public/images/instaclone.png"
import firechat from "../../public/images/firechat.png"
import discordbot from "../../public/images/discordbot.png"
import daedarus from "../../public/images/daedarus.png"
import hackclub from "../../public/images/hackclub.png"

export default function Projects() {
    return (
        <div className="projects" id="work">
            <h1 className="projects-header">Projects</h1>

            <Container className="projects-container">
                <Fade bottom duration={2000}>
                    <Grid.Container gap={2} justify="center">
                        <Grid md={4}>
                            <a href="https://maukaeducation.com/" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={mauka} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="https://github.com/arn4b/firepost" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={firepost} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="https://github.com/arn4b/instagram-clone" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={instaclone} />
                                </div>
                            </a>
                        </Grid>

                        <Grid md={4}>
                            <a href="https://github.com/arn4b/superchat" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={firechat} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="https://github.com/arn4b/discord-bot-gen1" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={discordbot} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="https://newsdux.pages.dev" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={newsdux} />
                                </div>
                            </a>
                        </Grid>

                        <Grid md={4}>
                            <a href="https://daedarus.co" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={daedarus} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="https://kiit.hackclub.com" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={hackclub} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <div className="proj-box">
                                <a href="https://github.com/arn4b" target="__blank">
                                <Button className="about-btn" size="xlarge" shadow color="gradient" auto>and more...</Button>
                                </a>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Fade>
            </Container>
        </div>
    )
}
