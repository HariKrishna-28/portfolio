import React from 'react'
import { motion } from 'framer-motion'
// import { Express, Git, JavaScript, Mongo, NodeJs, ReactJs, Typescript } from '../../assets'
import Ts from './Ts'


const About = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-10 p-10' id='About'>
            {/* <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}> */}
            <div className='text-center font-bold text-4xl textGradient'>
                About
            </div>
            {/* </motion.div> */}


            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}>
                <div className='flex justify-center text-secondaryText'>
                    <div className='w-full md:w-3/4 lg:w-3/4 text-justify font-semibold text-2xl '>
                        I am a self taught <span className='font-extrabold textGradient'>full stack MERN developer</span> with a passion for creating beautiful and functional web applicartions
                        . I seek challenging opportunities where I can fully use my skills to the success of the organisation.
                    </div>
                </div>
            </motion.div>

            {/* <motion.div
                className="box"
                whileHover={{ scale: [null, 1.0, 1.1] }}
                transition={{ duration: 0.3 }}>
                <div className='flex justify-center'>
                    <div className='w-full  md:w-1/2 lg:w-1/2 text-justify text-xl p-5 hover:p-0 rounded'>
                        I am a self taught full stack developer and python programmer.
                        I seek challenging opportunities where I can fully use my skills to the success of the organisation.
                    </div>
                </div>
            </motion.div> */}

            <motion.div
                whileInView={{ y: [+100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}>
                <div className='flex flex-wrap md:hidden lg:hidden gap-3 items-evenly justify-center'>
                    <Ts />
                </div>
            </motion.div>

            {/* <FlipCard /> */}
        </div>

    )
}

export default About