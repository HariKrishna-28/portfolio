import React from 'react'
import { motion } from 'framer-motion'


const FrontSide = ({ flipCard, url, title }) => {
    return (
        <motion.div
            // style={{ height: "100px", width: "100px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360, }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='bg-black text-white h-52 w-52 p-3 rounded-lg shadow-lg'>
            <button
                onClick={flipCard}
            >
                flip
            </button>
            <div>
                frontSide
            </div>
        </motion.div>
    )
}

export default FrontSide