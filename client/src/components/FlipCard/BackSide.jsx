import React from 'react'
import { motion } from 'framer-motion'



const BackSide = ({ flipCard }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className='bg-black text-white'>
            <button
                onClick={flipCard}
            >
                flip
            </button>
            <div>
                backside
            </div>
        </motion.div>
    )
}

export default BackSide