import React from 'react'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { motion } from 'framer-motion'
const SocialMedia = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
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
    )
}

export default SocialMedia