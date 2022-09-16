import React from 'react'
import { motion } from 'framer-motion'


const FrontSide = ({ flipCard }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360, }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-blue-800 text-white'>
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