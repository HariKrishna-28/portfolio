import React from 'react'
import { motion } from 'framer-motion'
import { ArrowBack, GitHub, OpenInNew } from '@mui/icons-material';
import { NpmSquare } from '../../../assets';
import TechStack from '../../../constants/TechStack';
import { Tooltip, Zoom } from '@mui/material';


const BackProject = ({ flipCard, github, description, site, ts }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='bg-secondaryBackground text-textColor p-2 h-72 w-72 lg:h[400px] lg:w-[400px] md:h-[400px] md:w-[400px] rounded-lg shadow-lg'>
            <div className='flex flex-col items-center h-full justify-evenly'>
                <div className='overflow-auto h-1/3 scrollbar-hide'>
                    <div className='p-2 text-justify font-sm text-secondaryText'>
                        {description}
                    </div>
                </div>

                <div className='w-full -mt-4'>
                    {/* <div className='font-semibold text-center'>Project links</div> */}
                    <div className='flex flex-row items-center justify-center gap-3 mt-2'>
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
                        {/* <a href={site} target="_blank" rel="noopener noreferrer"><img src={NpmSquare} alt="" className='h-6 cursor-pointer' /></a> */}
                    </div>
                </div>

                <div className='font-semibold text-center'>Built Using</div>
                <div className='flex flex-row items-center justify-center w-full gap-3 p-3 overflow-x-auto scrollbar-hide'>
                    {
                        ts.map((element, index) => {
                            return (
                                <>
                                    <TechStack
                                        key={index}
                                        name={element} />
                                </>
                            )
                        })
                    }
                </div>

                <Tooltip
                    placement="bottom"
                    TransitionComponent={Zoom}
                    TransitionProps={{ timeout: 400 }}
                    title="back">
                    <div className='text-center cursor-pointer' onClick={flipCard}>
                        <ArrowBack />
                    </div>
                </Tooltip>
                {/* <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={flipCard}
                >
                </button> */}
            </div>
        </motion.div>
    )
}

export default BackProject