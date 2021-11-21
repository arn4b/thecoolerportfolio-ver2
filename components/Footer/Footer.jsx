import { Container, Item } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import arnab from '../../public/images/MOSHED-2021-9-22-18-37-25.jpg'
import Fade from 'react-reveal/Fade';

import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';

import caffiene from '../../public/images/caffiene.png'
import next from '../../public/logos/next-logo.png'
import nextui from '../../public/logos/nextui.svg'

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiPolywork } from 'react-icons/si'

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="socials">
                    <a href="https://twitter.com/arn4b_"><FiTwitter className="social-icon" /></a>
                    <a href="https://github.com/arn4b"><FiGithub className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/arnab-chatterjee-3944341a0/"><FiLinkedin className="social-icon" /></a>
                    <a href="https://www.polywork.com/arn4b"><SiPolywork className="social-icon" /></a>
                </div>

                <div className="credits">
                    <div className="made-with">
                        Made with 🤍 and <Spacer x={1} />
                        <Tooltip className="tooltip" content={'Caffiene!'} rounded hideArrow>
                            <Image src={caffiene} width="80px" height="80px" />
                        </Tooltip>
                    </div>

                    <Spacer x={3} />

                    <div className="hr"></div>

                    <Spacer x={3} />

                    <div className="powered">
                        <div>Powered By</div>
                        <div className="next-logos">
                            <Image src={next} width="125px" height="70px" /><Spacer x={1} /> and <Spacer x={1} /><Image src={nextui} width="125px" height="60px" />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}
