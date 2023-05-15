import React from 'react'
import TechStack from '../../constants/TechStack'
import { GitHub, OpenInNew } from '@mui/icons-material';
import { Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion'
// import { SanityClient } from '@sanity/client';
// import LoadingScreen from '../Loader/LoadingScreen';
import ReactPlayer from 'react-player'

const ProjectTile = ({ data, alignment }) => {

    const align = !alignment ? "flex-row-reverse" : "flex-row"
    // const [showVideo, setShow] = useState(false)
    // const url = `https://cdn.sanity.io/files/${process.env.REACT_APP_SANITY_PROJECT_ID}/production/${data?.walkthrough.asset._ref}`

    // const [videoUrl, setVideoUrl] = useS

    return (
        <motion.div
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            // x: [-100, 0],
            transition={{ duration: 0.5 }}
            className='flex items-center h-[400px] justify-center'>
            <div className={`flex ${align} w-[80%] h-full bg-secondaryBackground p-8 rounded justify-between`}>
                <div className="flex flex-col gap-2 justify-evenly">
                    <div className='flex items-center justify-between'>
                        <div className='text-2xl font-bold text-white'>
                            {data?.name}
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <Tooltip
                                placement="bottom"
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 400 }}
                                title="View Repository">
                                <a
                                    href={data?.github}
                                    target="_blank"
                                    className='p-1.5 text-secondaryText transition-all duration-400 ease-out hover:text-white hover:bg-backgroundColor rounded-lg' rel="noopener noreferrer">
                                    <GitHub className='h-6' />
                                </a>
                            </Tooltip>
                            <Tooltip
                                placement="bottom"
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 400 }}
                                title="Launch site">
                                <a
                                    className='p-1.5 text-secondaryText hover:text-white hover:bg-backgroundColor rounded-lg'
                                    href={data?.site}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <OpenInNew className='h-6 cursor-pointer text-secondaryText hover:text-white' />
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                    <ReactPlayer
                        className="rounded"
                        loop
                        playing
                        muted
                        autoplay
                        width={"380px"}
                        url={data?.walkthroughUrl} />

                </div>
                <div className='flex flex-col justify-between border-2 border-borderColor overflow-auto scrollbar-hide rounded-lg w-[calc(100%-400px)] p-3'>
                    <div className='font-semibold text-start text-secondaryText'>
                        {data?.tagline}
                    </div>
                    <div className='text-justify text-secondaryText '>
                        {data?.description}
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className='text-secondaryText'>
                            Built with
                        </div>
                        <div className='flex flex-row items-center justify-center w-full gap-3 p-3 overflow-x-auto  scrollbar-hide'>
                            {
                                data?.tech_stack.map((element, index) => {
                                    return (
                                        <>
                                            <TechStack
                                                key={index}
                                                name={element}
                                            />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectTile