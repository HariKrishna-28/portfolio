import React from 'react'
import FlipCard from '../../components/FlipCard/FlipCard'
import { motion } from 'framer-motion'

const vals = [1, 2, 3, 4, 5]


const Projects = () => {
    return (
        <div id='Projects' className='flex items-center justify-center'>
            <div className='flex flex-col gap-10 '>
                <div className='text-center font-bold text-4xl'>
                    PRojects
                </div>
                <div className='flex-grow overflow-x-auto p-10'>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex w-full scrollbar-hide flex-row items-center gap-3 h-56' >
                        {vals.map((element, index) => {
                            return (
                                <>
                                    <FlipCard />
                                    {/* <FlipCard />
                                    <FlipCard /> */}
                                </>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Projects