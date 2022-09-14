import React from 'react'
import { motion } from 'framer-motion'
import { Express, Git, JavaScript, Mongo, NodeJs, ReactJs, Typescript } from '../../assets'
import Ts from './Ts'



const About = () => {
    return (
        <div className='flex flex-col gap-5 p-10' id='About'>
            {/* <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}> */}
            <div className='text-center font-bold text-4xl'>
                About
            </div>
            {/* </motion.div> */}


            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}>
                <div className='flex justify-center'>
                    <div className='w-full  md:w-1/2 lg:w-1/2 text-justify text-xl p-5 rounded'>
                        I am a self taught full stack developer and python programmer.
                        I seek challenging opportunities where I can fully use my skills to the success of the organisation.
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
                    {/* <img src={NodeJs} alt="" className='w-10' draggable="false" />
                    <img src={Express} alt="" className='w-10' draggable="false" />
                    <img src={Git} alt="" className='w-10' draggable="false" />
                    <img src={JavaScript} alt="" className='w-10' draggable="false" />
                    <img src={Typescript} alt="" className='w-10' draggable="false" />
                    <img src={ReactJs} alt="" className='w-10' draggable="false" />
                    <img src={Mongo} alt="" className='w-10' draggable="false" /> */}
                    <Ts />
                </div>
            </motion.div>

        </div>
    )
}

export default About