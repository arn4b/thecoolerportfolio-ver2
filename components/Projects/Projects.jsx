import React from 'react'

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Image from 'next/image'

import { Container } from '@mui/material'

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
        <div className="projects">
            <h1 className="projects-header">Portfolio</h1>

            <Container className="projects-container">
                <Grid.Container gap={2} justify="center">
                    <Grid md={4}>
                        <a href="https://maukaeducation.com/">
                            <div className="proj-box">
                                <Image className="proj-img" src={mauka} />
                            </div>
                        </a>
                    </Grid>
                    <Grid md={4}>
                        <a href="https://github.com/arn4b/firepost">
                            <div className="proj-box">
                                <Image className="proj-img" src={firepost} />
                            </div>
                        </a>
                    </Grid>
                    <Grid md={4}>
                        <a href="https://github.com/arn4b/instagram-clone">
                            <div className="proj-box">
                                <Image className="proj-img" src={instaclone} />
                            </div>
                        </a>
                    </Grid>

                    <Grid md={4}>
                        <a href="https://github.com/arn4b/superchat">
                            <div className="proj-box">
                                <Image className="proj-img" src={firechat} />
                            </div>
                        </a>
                    </Grid>
                    <Grid md={4}>
                        <a href="https://github.com/arn4b/discord-bot-gen1">
                            <div className="proj-box">
                                <Image className="proj-img" src={discordbot} />
                            </div>
                        </a>
                    </Grid>
                    <Grid md={4}>
                        <a href="https://newsdux.pages.dev">
                            <div className="proj-box">
                                <Image className="proj-img" src={newsdux} />
                            </div>
                        </a>
                    </Grid>

                    <Grid md={4}>
                        <a href="https://daedarus.co">
                            <div className="proj-box">
                                <Image className="proj-img" src={daedarus} />
                            </div>
                        </a>
                    </Grid>
                    <Grid md={4}>
                        <a href="https://kiit.hackclub.com">
                            <div className="proj-box">
                                <Image className="proj-img" src={hackclub} />
                            </div>
                        </a>
                    </Grid>
                    <Grid md={4}>
                        <div className="proj-box">
                            <a href="https://github.com/arn4b">
                                <h1>and more...</h1>
                            </a>
                        </div>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
