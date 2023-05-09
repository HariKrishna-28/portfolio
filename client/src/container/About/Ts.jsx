import React from 'react'
import { BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, MySql, NextJs, NodeJs, Python, ReactJs, Tailwind, Typescript } from '../../assets'
import { Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion'

const Ts = () => {

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
            name: 'NextJs',
            address: NextJs
        },
        // {
        //     name: 'HTML',
        //     address: Html,
        // },
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
                                <div className='p-1 overflow-hidden transition-all duration-75 rounded-full hover:bg-textColor'>
                                    <img
                                        src={address}
                                        alt=""
                                        className='w-8 bg-transparent'
                                        draggable="false" />
                                </div>
                            </motion.div>
                        </Tooltip>
                    )
                })
            }
            {/* <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="NodeJs">
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                >
                    <img src={NodeJs} alt="" draggable="false" />
                </motion.div>
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="ExpressJs">
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                >
                    <img src={Express} alt="" draggable="false" />
                </motion.div>
            </Tooltip>
            <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="Git">
                <img src={Git} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="JavaScript">
                <img src={JavaScript} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="TypeScript">
                <img src={Typescript} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="ReactJs">
                <img src={ReactJs} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="MongoDB">
                <img src={Mongo} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="HTML">
                <img src={Html} alt="" className={tileStyling} draggable="false" />
            </Tooltip>

            <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="CSS">
                <img src={Css} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="Python">
                <img src={Python} alt="" className={tileStyling} draggable="false" />
            </Tooltip>

            <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="Bootstrap">
                <img src={BootStrap} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="TailwindCSS">
                <img src={Tailwind} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="bottom"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="Firebase">
                <img src={Firebase} alt="" className={tileStyling} draggable="false" />
            </Tooltip> */}
        </>
    )
}

export default Ts