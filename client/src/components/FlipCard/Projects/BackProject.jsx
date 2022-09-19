import React from 'react'
import { motion } from 'framer-motion'
import { ArrowBack, GitHub, OpenInNew } from '@mui/icons-material';
import { NpmSquare } from '../../../assets';
import TechStack from '../../../constants/TechStack';


const BackProject = ({ flipCard, github, description, site, ts }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateX: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='bg-secondaryBackground text-textColor p-2 h-72 w-72 lg:h[400px] lg:w-[400px] md:h-[400px] md:w-[400px] rounded-lg shadow-lg'>
            <div className='flex flex-col items-center justify-evenly h-full'>
                <div className='p-2 font-sm text-justify text-secondaryText'>
                    {description}
                </div>

                <div>
                    <div className='text-center'> Links</div>
                    <div className='flex flex-row items-center justify-evenly w-full'>
                        <a href={github} target="_blank" rel="noopener noreferrer"><GitHub className='h-6 cursor-pointer' /></a>
                        <a href={site} target="_blank" rel="noopener noreferrer"><OpenInNew className='h-6 cursor-pointer' /></a>
                        {/* <a href={site} target="_blank" rel="noopener noreferrer"><img src={NpmSquare} alt="" className='h-6 cursor-pointer' /></a> */}
                    </div>
                </div>

                <div className='text-center'> Tech stack</div>
                <div className=' w-full flex flex-row p-3 gap-3 items-center justify-center overflow-x-auto  scrollbar-hide'>
                    {
                        ts.map((element, index) => {
                            return (
                                <>
                                    <TechStack name={element} />
                                </>
                            )
                        })
                    }
                </div>

                <div className='text-center cursor-pointer' onClick={flipCard}>
                    <ArrowBack />
                </div>
                {/* <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={flipCard}
                >
                </button> */}
            </div>
        </motion.div>
    )
}

export default BackProject