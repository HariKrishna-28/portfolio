import React from 'react'
import FlipCard from '../../components/FlipCard/FlipCard'
import { motion } from 'framer-motion'

const vals = [1, 2, 3, 4, 5]


const Contributions = () => {
    return (
        <div id='Contributions' className='flex flel-col items-center justify-center h-screen'>
            <div>
                <div className='text-center font-bold text-4xl'>
                    CONTRIBUTIONS
                </div>
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='flex w-full scrollbar-hide flex-row items-center gap-3 justify-evenly  overflow-x-scroll h-56' >
                    {vals.map((element, index) => {
                        return (
                            <>
                                <FlipCard />
                            </>
                        )
                    })}
                </motion.div>
            </div>

        </div>
    )
}

export default Contributions