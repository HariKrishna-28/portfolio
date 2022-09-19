import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ProjectFlip } from '../../components'
import { client } from '../../client'


const Projects = () => {
    const [res, setRes] = useState([])

    useEffect(() => {
        const query = '*[_type == "projects"]'
        client.fetch(query)
            .then((res) => setRes(res))
            .catch((error) => console.log(error))
    }, [])

    // setRes({
    //     "_createdAt": "2022-09-18T14:57:24Z",
    //     "_id": "707e8c73-987c-4615-9a67-c4b5c2f177c0",
    //     "_rev": "DDZCQSKbXmcHsIoEz5iiAZ",
    //     "_type": "projects",
    //     "description": "Connect with friends around the world using OctoVerse. Share your thoughts as a post or a message and follow your friends to see what they are up to.",
    //     "github": "https://github.com/HariKrishna-28/octoverse",
    //     "name": "Octoverse",
    //     "site": "https://octo-verse.vercel.app/",
    //     "tech_stack": [
    //         "ReactJs",
    //         "ReactJs",
    //         "ExpressJs",
    //         "MongoDb"
    //     ],
    //     "walkthrough": "https://firebasestorage.googleapis.com/v0/b/chat28-babc1.appspot.com/o/covid19.mp4?alt=media&token=58a8b28d-8563-4dce-b024-f0d57219d351",
    //     "_updatedAt": "2022-09-19T06:12:23.256Z"
    // })


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
                                        key={index}
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
                                        key={index}
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