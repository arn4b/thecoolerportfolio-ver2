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
        name: "HP ProBook 440 G1 - the 360° powerhouse - literally 💥",
    },
    {
        name: "Acer V196L 75Hz - for the extra screen real estate",
    },
    {
        name: "CB GK16 Mechanical keeb w/ Outemu Blue Swithces - for the clickty clack typing experience 👀",
    },
    {
        name: "Logitech G102 LightSync - it has 16.9m colors 🌈",
    },
    {
        name: "Amazon Echo Dot v3 - frankly, just for the clock (and sometimes Spotify)",
    },
    {
        name: "Oppo Enco M31 - just for the standups",
    },
]

const tools = [
    {
        name: "VS Code",
    },
    {
        name: "Firefox Developer edition",
    },
    {
        name: "Linear - for issue tracking",
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
        name: "Discord",
    },
    {
        name: "Notion",
    },
]

const vscexts = [
    {
        name: "Ayu Mirage Dark Theme",
    },
    {
        name: "Prettier",
    },
    {
        name: "ESLint",
    },
    {
        name: "GitLens",
    },
    {
        name: "Fluent Icons",
    },
    {
        name: "Live Server",
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
