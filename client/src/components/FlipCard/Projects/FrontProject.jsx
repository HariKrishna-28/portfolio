import React from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player/lazy'
import { Info } from '@mui/icons-material';
// import { getFileAsset } from '@sanity/asset-utils';

const FrontProject = ({ flipCard, title, url, desc, tag }) => {
    return (
        <motion.div
            // style={{ height: "100px", width: "100px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360, }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='bg-secondaryBackground  text-textColor h-72 w-72 lg:h[400px] lg:w-[400px] md:h-[400px] md:w-[400px] flex-flex-col rounded-lg shadow-lg'>
            <div className='flex flex-col items-center h-full justify-evenly'>

                <div className='text-2xl font-bold text-white'>
                    {title}
                </div>

                <div className='p-5 '>
                    <video src={url} className="rounded" autoPlay loop />
                </div>

                <div className='font-semibold text-justify text-secondaryText'>
                    {tag}
                </div>

                <div className='text-center '>
                    <button
                        className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={flipCard}
                    >
                        Know More
                    </button>
                </div>
            </div>
        </motion.div >
    )
}

export default FrontProject