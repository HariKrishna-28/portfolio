import React from 'react'
import { motion } from 'framer-motion'
import ProfilePic from '../../assets/profile.png'
import WaveGif from '../../assets/icons/wave.gif'
// import { BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, NodeJs, Python, ReactJs, Tailwind, Typescript } from '../../assets'
import Ts from './Ts'
import AppWrap from '../../components/wrapper/AppWrap'

const Header = () => {
    return (
        <div
            id='Home'
            className='flex flex-col mt-4 h-screen md:flex-row lg:flex-row items-center justify-center lg:justify-evenly p-5'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            // className
            >
                <div className='p-5'>
                    <div>
                        <div className='flex items-center gap-3 '>
                            <img src={WaveGif} alt="" draggable='false' className='hidden md:block lg:block w-16' />
                            {/* <span className='hidden md:block lg:block text-3xl'>
                                👋
                            </span> */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-secondaryText text-3xl text-center lg:text-start md:text-start'>Hello, I am</p>
                                    <p className='font-bold text-5xl textGradient'>Harikrishna</p>
                                </div>
                                <div className='flex gap-2 items-center justify-center'>
                                    <p>Web Developer</p>
                                    <p className='text-secondaryText'>|</p>
                                    <p>Python programmer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


            <motion.div
                whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <div className='bg-gradient-to-t from-backgroundColor to-secondaryBackground p-3 shadow-xl rounded-full overflow-hidden'>
                    <motion.div
                        whileInView={{ y: [+100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}>
                        <img src={ProfilePic} alt="pp" draggable="false" />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ x: [+100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <div className='hidden md:flex md:flex-row lg:flex-row lg:flex md:flex-wrap w-28 items-center justify-evenly lg:flex-wrap gap-5'>
                    <Ts />
                </div>
            </motion.div>
        </div>
    )
}

export default Header