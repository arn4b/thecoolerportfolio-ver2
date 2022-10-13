import React from 'react'
import { Container } from '@mui/material'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

import fi from '../../public/images/filogo.svg'
import amazon from '../../public/images/amazon.svg'
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
                    {/* <p className="exp-main-text">

                        <Tooltip className="tooltip" content={'Jul \'23 '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Incoming SDE @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={amazon}/>
                                        </div>
                                    <span style={{ 'color': 'rgb(255, 153, 0)' }}> Amazon</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Jul \'22 - Present '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>SWE Intern @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={fi}/>
                                        </div>
                                    <span style={{ 'color': 'rgb(0, 184, 153)' }}> Fi Money</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Jan \'22 - Jul\'22 '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Frontend Intern @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={polygon}/>
                                        </div>
                                    <span style={{ 'color': 'rgb(130, 71, 229)' }}> Polygon</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'July \'21 - Sep \'21'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Frontend Intern @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={mauka}/>
                                        </div>
                                    <span style={{ 'color': 'rgb(40, 56, 145)' }}>Mauka</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={"Jan \'21 - Present"} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Web Dev Lead @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={msc}/>
                                        </div>
                                    <span style={{ 'color': 'rgb(1, 118, 211)' }}>MSC KIIT</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Tech Lead @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={mozilla}/>
                                        </div>
                                    <span style={{ 'color': 'rgb(242, 25, 0)' }}>Mozilla BBSR</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Apr \'21 - Present'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Web Core @
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                        <div className='expImgContainer'>
                                            <Image className='expImage' layout='responsive' src={hackclub}/>
                                        </div>
                                    <span style={{ 'color': '#ec3750' }}>HackClub</span>
                                </span>
                            </Text>
                        </Tooltip>
                    </p> */}

                    <div className='parent'>
                        <div className='div1 grid-div'>Incoming SDE <br />                                
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={amazon}/>
                                    </div>
                                <span style={{ 'color': 'rgb(255, 153, 0)' }}> Amazon</span>
                            </span>
                        </div>
                        <div className='div2 grid-div'>SWE Intern <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={fi}/>
                                    </div>
                                <span style={{ 'color': 'rgb(0, 184, 153)' }}> Fi Money</span>
                            </span>
                        </div>
                        <div className='div3 grid-div'>SWE Intern <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={polygon}/>
                                    </div>
                                <span style={{ 'color': 'rgb(130, 71, 229)' }}> Polygon</span>
                            </span>
                        </div>
                        <div className='div4 grid-div'>Frontend Intern <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={mauka}/>
                                    </div>
                                <span style={{ 'color': 'rgb(40, 56, 145)' }}>Mauka</span>
                            </span>
                        </div>
                        <div className='div6 grid-div'>Web Lead <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={msc}/>
                                    </div>
                                <span style={{ 'color': 'rgb(1, 118, 211)' }}>MSC KIIT</span>
                            </span>
                        </div>
                        <div className='div5 grid-div'>Tech Lead <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={mozilla}/>
                                    </div>
                                <span style={{ 'color': 'rgb(242, 25, 0)' }}>Mozilla</span>
                            </span>
                        </div>
                    </div>
                </Fade>
            </Container>
        </div>
    )
}