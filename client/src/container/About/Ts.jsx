import React from 'react'
import { BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, NodeJs, Python, ReactJs, Tailwind, Typescript } from '../../assets'
import { Tooltip, Zoom } from '@mui/material';

const Ts = () => {

    const tileStyling = "w-8 hover:w-14 hover:-m-3 cursor-pointer"

    return (
        <>
            <Tooltip
                placement="left"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="NodeJs">
                <img src={NodeJs} alt="" className={tileStyling} draggable="false" />
            </Tooltip>
            <Tooltip
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
                title="ExpressJs">
                <img src={Express} alt="" className={tileStyling} draggable="false" />
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
            </Tooltip>
        </>
    )
}

export default Ts