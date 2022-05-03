export default [
    {
        id: '2',
        // you can also pass a React component as a label
        data: {
            label: <div>
                Experience
            </div>
        },
        position: { x: 0, y: 125 },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: 200, y: 250 },
    },
    {
        id: '4',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: -200, y: 250 },
    },
    {
        id: '5',
        type: 'output',
        data: { label: <div>
            <img src="https://stakehound.com/wp-content/uploads/2021/04/Polygon-logo.png" alt="" />
        </div> },
        position: { x: 0, y: 350 },
    },
    {
        id: '6',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: 250, y: 125 },
    },
    {
        id: '7',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: -250, y: 125 },
    },
];
