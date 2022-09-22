import React from 'react'
import { GitHub, LinkedIn, Instagram, Email } from '@mui/icons-material'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div
            id='Contact'
            className='flex flex-col items-center justify-center h-screen'
        >
            <div className='text-center font-bold text-4xl textGradient'>
                Contact Me
            </div>
            <div className='p-10'>
                <div className='flex flex-row gap-5'>
                    <a href="http://github.com/HariKrishna-28" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3, type: 'tween' }}>

                            <GitHub />
                        </motion.div>
                    </a>

                    <a href="https://www.linkedin.com/in/harikrishna-c/" target="_blank" rel="noopener noreferrer">

                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3, type: 'tween' }}>
                            <LinkedIn />
                        </motion.div>
                    </a>


                    <a href="mailto:harikrishnac2002@gmail.com">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3, type: 'tween' }}>
                            <Email />
                        </motion.div>
                    </a>


                    <a href="https://www.instagram.com/___h28__" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3, type: 'tween' }}>
                            <Instagram />
                        </motion.div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contact