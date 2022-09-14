import React from 'react'
import { motion } from 'framer-motion'
import ProfilePic from '../../assets/profile.png'
import WaveGif from '../../assets/icons/wave.gif'
// import { BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, NodeJs, Python, ReactJs, Tailwind, Typescript } from '../../assets'
import Ts from './Ts'


const Header = () => {
    return (
        <div
            id='Home'
            className='flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-evenly p-5'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            // className
            >
                <div className='p-5'>
                    <div>
                        <div className='flex items-center gap-3 '>
                            <img src={WaveGif} alt="" className='hidden md:block lg:block w-16' />
                            {/* <span className='hidden md:block lg:block text-3xl'>
                                👋
                            </span> */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-gray-500 text-3xl text-center lg:text-start md:text-start'>Hello, I am</p>
                                    <p className='font-bold text-5xl'>Harikrishna</p>
                                </div>
                                <div className='flex gap-2 items-center justify-center'>
                                    <p>Web Developer</p>
                                    <p className='text-gray-500'>|</p>
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
                <div className='bg-gradient-to-b to-gray-500 p-3 shadow-xl rounded-full overflow-hidden'>
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
                <div className='hidden md:flex md:flex-row lg:flex-row lg:flex md:flex-wrap w-28 items-center justify-evenly lg:flex-wrap gap-6'>
                    {/* <img src={NodeJs} alt="" className='w-8' draggable="false" />
                    <img src={Express} alt="" className='w-8' draggable="false" />
                    <img src={Git} alt="" className='w-8' draggable="false" />
                    <img src={JavaScript} alt="" className='w-8' draggable="false" />
                    <img src={Typescript} alt="" className='w-8' draggable="false" />
                    <img src={ReactJs} alt="" className='w-8' draggable="false" />
                    <img src={Mongo} alt="" className='w-8' draggable="false" />
                    <img src={Html} alt="" className='w-8' draggable="false" />
                    <img src={Css} alt="" className='w-8' draggable="false" />
                    <img src={Python} alt="" className='w-8' draggable="false" />
                    <img src={BootStrap} alt="" className='w-8' draggable="false" />
                    <img src={Tailwind} alt="" className='w-8' draggable="false" />
                    <img src={Firebase} alt="" className='w-8' draggable="false" /> */}
                    <Ts />
                </div>
            </motion.div>
        </div>
    )
}

export default Header