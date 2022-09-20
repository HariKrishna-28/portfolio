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
            <div className='flex flex-col h-full items-center justify-evenly'>

                <div className='font-bold text-2xl text-white'>
                    {title}
                </div>

                <div className='p-5 '>
                    <video src={url} className="rounded" autoPlay loop />
                </div>

                <div className='text-secondaryText text-justify font-semibold'>
                    {tag}
                </div>

                <div className='text-center '>
                    <button
                        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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