import React from 'react'
import { motion } from 'framer-motion'
import { Npm } from '../../../assets'

const FrontSide = ({ flipCard, title }) => {
    return (
        <div
            // style={{ height: "100px", width: "100px" }}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1, rotateX: 360, }}
            // exit={{ opacity: 0 }}

            // transition={{ duration: 1 }}
            className='bg-secondaryBackground text-textColor  h-64 w-64 p-3 flex-flex-col  rounded-lg shadow-lg'>
            <div className='flex flex-col h-full items-center justify-evenly'>
                <div className='p-3 flex items-center justify-center'>
                    <img src={Npm} alt="" className='h-5' />
                </div>
                <div className='font-bold'>
                    {title}
                </div>
                <div className='text-center mt-10'>
                    <button
                        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={flipCard}
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FrontSide