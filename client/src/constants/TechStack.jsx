import React from 'react'
// import imageData from './StackExport'
import { motion } from 'framer-motion'
// import StackExport from './StackExport'
import { Tooltip, Zoom } from '@mui/material'
import { Axios, BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, MUI, MySql, NodeJs, Python, ReactJs, Tailwind, Typescript } from "../assets";


const stackExport = [
    {
        name: "NodeJs",
        address: NodeJs,
    },
    {
        name: 'ExpressJs',
        address: Express,
    },
    {
        name: 'Git',
        address: Git,
    },
    {
        name: 'Javascript',
        address: JavaScript
    },
    {
        name: 'Typescript',
        address: Typescript
    },
    {
        name: 'ReactJs',
        address: ReactJs
    },
    {
        name: 'MongoDB',
        address: Mongo,
    },
    {
        name: 'HTML',
        address: Html,
    },
    {
        name: 'CSS',
        address: Css,
    },
    {
        name: 'Python',
        address: Python,
    },
    {
        name: 'Bootstrap',
        address: BootStrap,
    },
    {
        name: 'TailwindCSS',
        address: Tailwind
    },
    {
        name: 'Firebase',
        address: Firebase
    },
    {
        name: 'MySQL',
        address: MySql
    },
    {
        name: 'MUI',
        address: MUI
    },
    {
        name: 'Axios',
        address: Axios
    },


]

const TechStack = ({ name }) => {
    const data = stackExport.find(element => element.name.toLowerCase() === name.toLowerCase())
    // const name
    return (
        <>
            {/* <h1>hi frans</h1> */}
            <Tooltip
                placement="bottom"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title={data?.name}>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3, type: 'tween' }}
                >
                    <img
                        className='w-6'
                        draggable="false"
                        src={data?.address}
                        alt="" />
                </motion.div>
            </Tooltip>
        </>
    )
}

export default TechStack