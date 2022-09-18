import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ProjectFlip } from '../../components'
import { client } from '../../client'

const vals = [1, 2, 3, 4, 5]


const Projects = () => {
    const [res, setRes] = useState([])



    useEffect(() => {
        const query = '*[_type == "projects"]'
        client.fetch(query)
            .then((res) => setRes(res))
            .catch((error) => console.log(error))
    }, [])


    return (
        <div
            id='Projects'
            className='flex flex-col items-center lg:h-screen md:h-screen  justify-center'>
            <div className='flex flex-col gap-10 '>
                <div className='text-center font-bold text-4xl'>
                    Projects
                </div>

                <div className='hidden md:flex lg:flex container scrollbar-hide overflow-x-scroll p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-row items-center gap-3' >
                        {res.map((element, index) => {
                            return (
                                <>
                                    <ProjectFlip
                                        data={element}
                                    />
                                </>
                            )
                        })}
                    </motion.div>
                </div>
                <div className='container flex flex-col md:hidden lg:hidden h-1/4 scrollbar-hide overflow-y-scroll p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center gap-3' >
                        {res.map((element, index) => {
                            return (
                                <>
                                    <ProjectFlip
                                        data={element}
                                    />
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