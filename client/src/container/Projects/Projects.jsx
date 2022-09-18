import React from 'react'
import { motion } from 'framer-motion'
import { ProjectFlip } from '../../components'

const vals = [1, 2, 3, 4, 5]


const Projects = () => {
    return (
        <div
            id='Projects'
            className='flex flex-col items-center lg:h-screen md:h-screen  justify-center'>
            <div className='flex flex-col gap-10 '>
                <div className='text-center font-bold text-4xl'>
                    Projects
                </div>

                <div className='hidden md:flex lg:flex container bg-green-500 scrollbar-hide overflow-x-scroll p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-row items-center gap-3' >
                        {vals.map((element, index) => {
                            return (
                                <>
                                    <ProjectFlip />
                                </>
                            )
                        })}
                    </motion.div>
                </div>
                <div className='container flex flex-col md:hidden lg:hidden  bg-green-500 h-1/4 scrollbar-hide overflow-y-scroll p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center gap-3' >
                        {vals.map((element, index) => {
                            return (
                                <>
                                    <ProjectFlip />
                                </>
                            )
                        })}
                    </motion.div>
                </div>
                {/* </div> */}
            </div>

        </div >
    )
}


export default Projects