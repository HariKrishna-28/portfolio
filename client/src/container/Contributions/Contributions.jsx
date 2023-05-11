import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { client } from '../../client'
import { ContributionFlip } from '../../components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
const vals = [1, 2, 3, 4, 5]


const Contributions = () => {
    const [cont, setCont] = useState([])

    useEffect(() => {
        const query = '*[_type == "open_source"]'
        client.fetch(query)
            .then((res) => setCont(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div
            id='Contributions'
            className='flex flex-col items-center justify-center snap-y snap-mandatory scroll-smooth lg:h-screen md:h-screen'>
            <div className='flex flex-col gap-10 '>
                <div className='text-4xl font-bold text-center textGradient'>
                    Open source Contributions
                </div>

                <div className='hidden p-10 md:flex lg:flex containe '>
                    <motion.div
                        whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-row items-center gap-3 overflow-x-scroll scrollbar-hide' >
                        {cont.map((element, index) => {
                            return (
                                <>
                                    <ContributionFlip
                                        description={element.description}
                                        github={element.github}
                                        name={element.name}
                                        npm={element.npm}
                                        key={index} />
                                </>
                            )
                        })}
                    </motion.div>
                </div>
                <div className='container flex flex-col p-10 overflow-y-scroll md:hidden lg:hidden scrollbar-hide h-1/4 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center gap-3' >
                        {cont.map((element, index) => {
                            return (
                                <>
                                    <ContributionFlip
                                        description={element.description}
                                        github={element.github}
                                        name={element.name}
                                        npm={element.npm}
                                        key={index} />
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

export default Contributions