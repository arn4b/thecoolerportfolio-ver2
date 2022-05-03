import { useCallback, useState } from 'react';
import { Container } from '@mui/material'

import ReactFlow, { applyEdgeChanges, applyNodeChanges, Background } from 'react-flow-renderer';

import initialNodes from '../ReactFlow/nodes.jsx';
import initialEdges from '../ReactFlow/edges.jsx';


export default function Experience() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    return (
        <div className="experience">

            <Container className="exp-cont">

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                />

            </Container>
        </div>
    )
}
