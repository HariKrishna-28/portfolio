import React from 'react'
import { motion } from 'framer-motion'



const BackSide = ({ flipCard }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='bg-black text-white h-52 w-52 p-3 rounded-lg shadow-lg'>
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