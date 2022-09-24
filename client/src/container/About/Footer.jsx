import React from 'react'
import { GitHub, LinkedIn, Instagram, Email } from '@mui/icons-material'
import { motion } from 'framer-motion'


const Footer = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-row gap-2 p-3'>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3, type: 'tween' }}>
                    <GitHub />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3, type: 'tween' }}>
                    <LinkedIn />
                </motion.div>
            </div>

            <div className='flex items-center gap-2 mr-3'>
                <p>harikrishna</p>
            </div>

        </div>
    )
}

export default Footer