import React from 'react'
import { BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, MySql, NodeJs, Python, ReactJs, Tailwind, Typescript } from '../../assets'
import { Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion'
import { useEffect } from 'react';

const Ts = () => {

    useEffect(() => {

    }, [])

    const tileStyling = "w-8 hover:w-14 hover:-m-3 cursor-pointer"

    const techStack = [
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
        }
    ]

    return (
        <>
            {
                techStack.map(({ name, address }, index) => {
                    return (
                        <Tooltip
                            key={index}
                            placement={index % 2 === 0 ? "left" : "right"}
                            TransitionComponent={Zoom}
                            TransitionProps={{ timeout: 400 }}
                            title={name}
                        >
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.3, type: 'tween' }}
                            >
                                <img src={address} alt="" className='w-8' draggable="false" />
                            </motion.div>
                        </Tooltip>
                    )
                })
            }
        </>
    )
}

export default Ts