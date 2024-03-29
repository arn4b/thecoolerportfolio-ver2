import React from 'react'
import dynamic from 'next/dynamic'
import { Container } from '@mui/material'
import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Navbar from '../../components/Navbar/Navbar'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

import { Table } from "@nextui-org/react";

const equipment = [
    {
        name: "Apple MacBook Pro 16inch",
    },
    {
        name: "Apple iPhone 15 Pro",
    },
    {
        name: "Apple AirPods Pro Gen 2",
    },
    {
        name: "Samsung 32-Inch UHD 4K LS32A800NWXXL",
    },
    {
        name: "CB GK16 Mechanical keeb w/ Outemu Blue Swithces",
    },
    {
        name: "Logitech G102 LightSync",
    },
    {
        name: "Logitech MX720 Performance",
    },
    {
        name: "Amazon Echo Dot v3",
    },
]

const tools = [
    {
        name: "VS Code",
    },
    {
        name: "Firefox Developer Edition / Arc",
    },
    {
        name: "Figma",
    },
    {
        name: "Github Desktop",
    },
    {
        name: "Spotify",
    },
    {
        name: "Notion - gorgeous notetaking",
    },
    {
        name: "Obsidian - second brain",
    },
]

const vscexts = [
    {
        name: "Themes: Ayu Mirage / Noctis Obscuro",
    },
    {
        name: "Prettier",
    },
    {
        name: "GitLens",
    },
    {
        name: "Fluent Icons",
    },
    {
        name: "Vetur",
    },
]

export default function Uses() {
    return (

        <div className="body uses-page">
            <Navbar />
            <AnimatedCursor
                innerSize={15}
                outerSize={40}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.6}
                outerScale={2}
                trailingSpeed={7} />

            <Container className="uses-cont">
                <h1 className="uses-stuff">Stuff that I use on  a daily basis</h1>

                <h2 className='uses-h2'>Equipment</h2>
                <div className="uses-equipment">

                    <div>
                        {
                            equipment.map((eqpmnt) =>
                                <div className='eqpmnt' key={eqpmnt.name}>• {eqpmnt.name}</div>
                            )
                        }
                    </div>
                </div>

                <h2 className='uses-h2'>Tools</h2>
                <div className="uses-equipment">

                    <div>
                        {
                            tools.map((eqpmnt) =>
                                <div className='eqpmnt' key={eqpmnt.name}>• {eqpmnt.name}</div>
                            )
                        }
                    </div>
                </div>

                <h2 className='uses-h2'>VS Code Extensions</h2>
                <div className="uses-equipment">

                    <div>
                        {
                            vscexts.map((eqpmnt) =>
                                <div className='eqpmnt' key={eqpmnt.name}>• {eqpmnt.name}</div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
