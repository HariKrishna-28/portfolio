import React from 'react'
import { motion } from 'framer-motion'
// import { Express, Git, JavaScript, Mongo, NodeJs, ReactJs, Typescript } from '../../assets'
import Ts from './Ts'


const About = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-10 p-10 snap-y snap-mandatory scroll-smooth' id='About'>
            {/* <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}> */}
            <div className='text-4xl font-bold text-center textGradient'>
                About
            </div>
            {/* </motion.div> */}


            <motion.div
                whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                // x: [-100, 0],
                transition={{ duration: 0.5 }}>
                <div className='flex justify-center text-secondaryText'>
                    <div className='w-full text-sm font-semibold text-justify md:text-2xl lg:text-2xl md:w-3/4 lg:w-3/4 '>
                        I am a self taught <span className='font-extrabold textGradient'>full stack developer</span> with a passion for creating beautiful and functional web applications.
                        What I love most about web development is the constant challenge of keeping up with new technologies and techniques. I am always eager to learn and experiment with new tools and frameworks to improve my expertise.
                        Whether it's building a simple landing page or a complex web application, I am committed to delivering high-quality results. With my passion for web development and eagerness to learn, I am confident that I can tackle any project and create something truly amazing.
                    </div>
                </div>
            </motion.div>

            {/* <motion.div
                className="box"
                whileHover={{ scale: [null, 1.0, 1.1] }}
                transition={{ duration: 0.3 }}>
                <div className='flex justify-center'>
                    <div className='w-full p-5 text-xl text-justify rounded md:w-1/2 lg:w-1/2 hover:p-0'>
                        I am a self taught full stack developer and python programmer.
                        I seek challenging opportunities where I can fully use my skills to the success of the organisation.
                    </div>
                </div>
            </motion.div> */}

            <motion.div
                whileInView={{ y: [+100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}>
                <div className='flex flex-wrap justify-center gap-3 md:hidden lg:hidden items-evenly'>
                    <Ts />
                </div>
            </motion.div>

            {/* <FlipCard /> */}
        </div>

    )
}

export default About