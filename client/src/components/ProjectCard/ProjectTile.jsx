import React, { useState } from 'react'
import TechStack from '../../constants/TechStack'
import { GitHub, OpenInNew } from '@mui/icons-material';
import { CircularProgress, Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion'
import LoadingScreen from '../Loader/LoadingScreen';

const ProjectTile = ({ data, alignment }) => {
    const align = !alignment ? "flex-row-reverse" : "flex-row"
    const [showVideo, setShow] = useState(false)

    return (
        <motion.div
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            // x: [-100, 0],
            transition={{ duration: 0.5 }}
            className='flex items-center h-[400px] justify-center'>
            <div className={`flex ${align} w-[80%] h-full bg-secondaryBackground p-8 rounded justify-between`}>
                <div className="flex flex-col justify-evenly gap-2">
                    <div className='flex justify-between items-center'>
                        <div className='font-bold text-2xl text-white'>
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
                                    <OpenInNew className='h-6 text-secondaryText hover:text-white cursor-pointer' />
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='h-full flex flex-col items-center justify-center'>
                        <video
                            id='video'
                            src={data?.walkthrough}
                            className="rounded w-[380px]"
                            onLoadStart={() => setShow(false)}
                            onLoadedData={() => setShow(true)}
                            autoPlay
                            // controls
                            loop
                        />

                        {
                            !showVideo &&
                            <div
                                className='flex flex-col items-center -mt-44 justify-center'
                            >
                                {/* <LoadingScreen /> */}
                                <CircularProgress />
                            </div>
                        }


                    </div>
                    {/* <div className=' w-full flex flex-row p-3 gap-3 items-center justify-center overflow-x-auto  scrollbar-hide'>
                        {
                            tech_stack.map((element, index) => {
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
                    </div> */}
                </div>
                <div className='flex flex-col justify-between border-2 border-borderColor rounded-lg w-[calc(100%-400px)] p-3'>
                    <div className='font-semibold text-start text-secondaryText'>
                        {data?.tagline}
                    </div>
                    <div className='text-justify text-secondaryText'>
                        {data?.description}
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className='text-secondaryText'>
                            Built with
                        </div>
                        <div className=' w-full flex flex-row p-3 gap-3 items-center justify-center overflow-x-auto  scrollbar-hide'>
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