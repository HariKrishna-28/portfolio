import React from 'react'
import FlipCard from '../../components/FlipCard/FlipCard'
import { motion } from 'framer-motion'

const vals = [1, 2, 3, 4, 5]


const Projects = () => {
    return (
        <div id='Projects' className='  flex flex-col items-center h-screen  justify-center'>
            <div className='flex flex-col gap-10 '>
                <div className='text-center font-bold text-4xl'>
                    Projects
                </div>
                {/* <div className='text-center bg-bl p-10'> */}
                <div className='flex container bg-green-500 scrollbar-hide overflow-scroll p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-row items-center gap-3' >
                        {vals.map((element, index) => {
                            return (
                                <>
                                    <FlipCard />
                                    <FlipCard />
                                    <FlipCard />
                                </>
                            )
                        })}
                    </motion.div>
                </div>
                {/* </div> */}
            </div>

        </div>
    )
}

export default Projects