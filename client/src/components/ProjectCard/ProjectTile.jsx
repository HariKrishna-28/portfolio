import React from 'react'
import TechStack from '../../constants/TechStack'
import { ArrowBack, GitHub, OpenInNew } from '@mui/icons-material';
import { Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion'

const ProjectTile = ({ data, alignment }) => {
    const align = !alignment ? "flex-row-reverse" : "flex-row"
    return (
        <motion.div
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            // x: [-100, 0],
            transition={{ duration: 0.5 }}
            className='flex items-center h-[400px] justify-center'>
            <div className={`flex ${align} w-[80%] h-full bg-secondaryBackground p-8 rounded justify-between`}>
                <div className='flex flex-col justify-around gap-2'>
                    <div className='flex justify-around items-center'>
                        <div className='font-bold text-2xl text-white'>
                            {data?.name}
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <a href={data?.github} target="_blank" rel="noopener noreferrer">
                                <Tooltip
                                    placement="bottom"
                                    TransitionComponent={Zoom}
                                    TransitionProps={{ timeout: 400 }}
                                    title="View Repository">
                                    <GitHub className='h-6 cursor-pointer' />
                                </Tooltip>
                            </a>
                            <a href={data?.site} target="_blank" rel="noopener noreferrer">
                                <Tooltip
                                    placement="bottom"
                                    TransitionComponent={Zoom}
                                    TransitionProps={{ timeout: 400 }}
                                    title="Launch site">
                                    <OpenInNew className='h-6 cursor-pointer' />
                                </Tooltip>

                            </a>
                        </div>
                    </div>
                    <div>
                        <video src={data?.walkthrough} className="rounded w-[380px]" autoPlay loop />
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
                    <div className='flex flex-row items-center justify-center w-full'>
                        {/* <div>
                            Built using
                        </div> */}
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