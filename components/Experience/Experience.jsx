import React from 'react'
import { Container } from '@mui/material'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

import msc from '../../public/images/msc.svg'
import polygon from '../../public/images/polygon.svg'
import mozilla from '../../public/images/mozilla.svg'
import mauka from '../../public/images/Mauka.svg'
import hackclub from '../../public/images/hackclub.svg'

import { Tooltip, Text, Row, Col, Grid, Button } from '@nextui-org/react';

export default function Experience() {
    return (
        <div className="experience">
            <h1 className="exp-header">Work</h1>

            <Container className="exp-cont">
                <Fade bottom duration={2000}>
                    <p className="exp-main-text">

                        <Tooltip className="tooltip" content={'Jul \'22 - Present '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>SWE Intern @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px' }} >
                                    {/* <Image src={polygon} width={75} height={75}/> */}
                                    <span style={{ 'color': '#00b899' }}> Fi Money</span>
                                </span>
                            </Text>

                        </Tooltip>

                        <Tooltip className="tooltip" content={'Jan \'22 - Jul\'22 '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Frontend Intern @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px' }} >
                                    {/* <Image src={polygon} width={75} height={75}/> */}
                                    <span style={{ 'color': '#8247e5' }}> Polygon</span>
                                </span>
                            </Text>

                        </Tooltip>

                        <Tooltip className="tooltip" content={"Jan \'21 - Present"} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Web Dev Lead @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px' }}>
                                    {/* <Image src={msc} height="85" width="75" /> */}
                                    <span style={{ 'color': '#0176d3' }}>MSC KIIT</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Tech Lead @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px' }}>
                                    {/* <Image src={mozilla} height="75" width="75" /> */}
                                    <span style={{ 'color': '#f21900' }}>Mozilla BBSR</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'July \'21 - Sep \'21'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Frontend Intern @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px' }}>
                                    {/* <Image src={mauka} height="65" width="65" /> */}
                                    <span style={{ 'color': '#283891' }}>Mauka</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Web Team Core @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px' }}>
                                    {/* <Image src={hackclub} height="60" width="60" /> */}
                                    <span style={{ 'color': '#ec3750' }}>HackClub</span>
                                </span>
                            </Text>
                        </Tooltip>
                    </p>
                </Fade>
            </Container>
        </div>
    )
}
