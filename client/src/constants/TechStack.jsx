import React from 'react'
// import imageData from './StackExport'
import { motion } from 'framer-motion'
// import StackExport from './StackExport'
import { Tooltip, Zoom } from '@mui/material'
import { Axios, BootStrap, Css, Disease, Express, Firebase, Git, Html, JavaScript, Mongo, MUI, MySql, NodeJs, Python, ReactJs, ReactRouter, Redux, Tailwind, Typescript } from "../assets";


const stackExport = [
    {
        name: "NodeJs",
        address: NodeJs,
        documentation: "https://nodejs.org/en/docs/"
    },
    {
        name: 'ExpressJs',
        address: Express,
        documentation: "https://expressjs.com/"
    },
    {
        name: 'Git',
        address: Git,
        documentation: "https://git-scm.com/doc"
    },
    {
        name: 'Javascript',
        address: JavaScript,
        documentation: ""
    },
    {
        name: 'Typescript',
        address: Typescript,
        documentation: ""
    },
    {
        name: 'ReactJs',
        address: ReactJs,
        documentation: "https://reactjs.org/"
    },
    {
        name: 'MongoDB',
        address: Mongo,
        documentation: "https://firebase.google.com/docs/database"
    },
    {
        name: 'HTML',
        address: Html,
        documentation: ""
    },
    {
        name: 'CSS',
        address: Css,
        documentation: ""
    },
    {
        name: 'Python',
        address: Python,
        documentation: ""
    },
    {
        name: 'Bootstrap',
        address: BootStrap,
        documentation: ""
    },
    {
        name: 'TailwindCSS',
        address: Tailwind,
        documentation: "https://tailwindcss.com/"
    },
    {
        name: 'Firebase',
        address: Firebase,
        documentation: "https://firebase.google.com/docs"
    },
    {
        name: 'MySQL',
        address: MySql,
        documentation: ""
    },
    {
        name: 'MUI',
        address: MUI,
        documentation: "https://mui.com/material-ui/getting-started/installation/"
    },
    {
        name: 'Axios',
        address: Axios,
        documentation: "https://axios-http.com/docs/intro"
    },
    {
        name: 'React Router',
        address: ReactRouter,
        documentation: "https://axios-http.com/docs/intro"
    },
    {
        name: 'Disease.sh API',
        address: Disease,
        documentation: "https://disease.sh/"
    },
    {
        name: 'Redux',
        address: Redux,
        documentation: "https://reactrouter.com/en/main"
    },


]

const TechStack = ({ name }) => {
    const data = stackExport.find(element => element.name.toLowerCase() === name.toLowerCase())
    // const name
    return (
        <>
            <a href={data?.documentation} target="_blank" rel="noopener noreferrer">
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
            </a>
        </>
    )
}

export default TechStack