import React from 'react'
import TechStack from '../../constants/TechStack'
import { ArrowBack, GitHub, OpenInNew } from '@mui/icons-material';
import { Tooltip, Zoom } from '@mui/material';


const ProjectTile = ({ data, alignment }) => {
    const { description, github, name, site, tagline, tech_stack, walkthrough } = data
    const align = !alignment ? "flex-row-reverse" : "flex-row"
    return (
        <div className='flex items-center justify-center'>
            <div className={`flex ${align} w-[80%] bg-secondaryBackground mb-5 p-10 rounded justify-between`}>
                <div className='flex flex-col justify-between gap-2'>
                    <div className='flex justify-between items-center'>
                        <div className='font-bold text-2xl text-white'>
                            {name}
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <Tooltip
                                    placement="bottom"
                                    TransitionComponent={Zoom}
                                    TransitionProps={{ timeout: 400 }}
                                    title="View Repository">
                                    <GitHub className='h-6 cursor-pointer' />
                                </Tooltip>
                            </a>
                            <a href={site} target="_blank" rel="noopener noreferrer">
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
                        <video src={walkthrough} className="rounded w-[380px]" autoPlay loop />
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
                        {tagline}
                    </div>
                    <div className='text-justify text-secondaryText'>
                        {description}
                    </div>
                    <div className='flex flex-row items-center justify-center w-full'>
                        {/* <div>
                            Built using
                        </div> */}
                        <div className=' w-full flex flex-row p-3 gap-3 items-center justify-center overflow-x-auto  scrollbar-hide'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTile