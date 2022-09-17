import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { client } from '../../client'
import { ContributionFlip } from '../../components'

const vals = [1, 2, 3, 4, 5]


const Contributions = () => {
    const [cont, setCont] = useState([])

    // useEffect(() => {
    //     const query = '*[_type == "open_source"]'
    //     client.fetch(query)
    //         .then((res) => setCont(res))
    //         .catch((error) => console.log(error))
    // }, [])


    return (
        <div
            id='Contributions'
            className='  flex flex-col items-center lg:h-screen md:h-screen  justify-center'>
            <div className='flex flex-col gap-10 '>
                <div className='text-center font-bold text-4xl'>
                    Contributions
                </div>

                <div className='hidden md:flex lg:flex container bg-green-500 p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-row items-center overflow-x-scroll scrollbar-hide gap-3' >
                        {vals.map((element, index) => {
                            return (
                                <>
                                    <ContributionFlip />
                                    <ContributionFlip />
                                    <ContributionFlip />
                                </>
                            )
                        })}
                    </motion.div>
                </div>
                <div className='container flex flex-col md:hidden lg:hidden scrollbar-hide overflow-y-scroll bg-green-500 h-1/4  p-10 '>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center  gap-3' >
                        {vals.map((element, index) => {
                            return (
                                <>
                                    <ContributionFlip />
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