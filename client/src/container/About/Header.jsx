import React from 'react'
import { motion } from 'framer-motion'
import ProfilePic from '../../assets/p-removebg-preview.png'
// import ProfilePic1 from '../../assets/freelancer (1).svg'
import WaveGif from '../../assets/icons/wave.gif'
// import { BootStrap, Css, Express, Firebase, Git, Html, JavaScript, Mongo, NodeJs, Python, ReactJs, Tailwind, Typescript } from '../../assets'
import Ts from './Ts'
// import AppWrap from '../../components/wrapper/AppWrap'
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div
            id='Home'
            className='flex flex-col items-center justify-center h-screen p-5 mt-4 snap-y snap-mandatory scroll-smooth md:flex-row lg:flex-row lg:justify-evenly'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            // className
            >
                <div className='p-5'>
                    <div>
                        <div className='flex items-center gap-3 '>
                            <img src={WaveGif} alt="" draggable='false' className='hidden w-16 md:block lg:block' />
                            {/* <span className='hidden text-3xl md:block lg:block'>
                                👋
                            </span> */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-3xl text-center text-secondaryText lg:text-start md:text-start'>Hello, I am</p>
                                    <p className='text-5xl font-bold textGradient'>Harikrishna</p>
                                </div>
                                <div className='flex items-center justify-center gap-2 mt-1 md:justify-start lg:justify-start'>
                                    <Typewriter
                                        options={{
                                            strings: ['Javascript', 'Typescript', 'Java', 'Python'],
                                            autoStart: true,
                                            loop: true,
                                            pauseFor: 100,
                                        }}
                                    />
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
                <div className='mt-1 overflow-hidden rounded-full shadow-xl bg-gradient-to-t from-blue-500 to-blue-800 '>
                    <motion.div
                        whileInView={{ y: [+150, 0], opacity: [0, 1], rotate: 360 }}
                        transition={{ duration: 0.5 }}>
                        <img
                            src={ProfilePic}
                            alt="img"
                            width={300}
                            draggable="false" />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ x: [+100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <div className='items-center hidden gap-5 md:flex md:flex-row lg:flex-row lg:flex md:flex-wrap w-28 justify-evenly lg:flex-wrap'>
                    <Ts />
                </div>
            </motion.div>
        </div>
    )
}

export default Header