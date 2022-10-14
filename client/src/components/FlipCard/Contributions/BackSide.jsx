import React from 'react'
// import { motion } from 'framer-motion'
import { ArrowBack, GitHub } from '@mui/icons-material';
import { NpmSquare } from '../../../assets';
import { Tooltip, Zoom } from '@mui/material';

const BackSide = ({ flipCard, github, description, site }) => {
    return (
        <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1, rotateX: 360 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 1 }}
            className='bg-secondaryBackground  text-textColor h-64 w-64 p-3 rounded-lg shadow-lg'>
            <div className='flex flex-col items-center justify-evenly h-full'>
                <div className='p-2 font-sm'>
                    {description}
                </div>

                <div className='flex flex-row items-center justify-around w-full'>
                    <Tooltip
                        placement="bottom"
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 400 }}
                        title="View Repository">
                        <a href={github} target="_blank" rel="noopener noreferrer"><GitHub className='h-6 cursor-pointer' /></a>
                    </Tooltip>
                    <Tooltip
                        placement="bottom"
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 400 }}
                        title="Open npm">
                        <a href={site} target="_blank" rel="noopener noreferrer"><img src={NpmSquare} alt="" className='h-6 cursor-pointer' /></a>
                    </Tooltip>
                </div>
                <div className='text-center cursor-pointer' onClick={flipCard}>
                    <ArrowBack />
                </div>
                {/* <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={flipCard}
                >
                </button> */}
            </div>
        </div>
    )
}

export default BackSide