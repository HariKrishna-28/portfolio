import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard, ProjectFlip } from '../../components'
import { client } from '../../client'
import Pagination from '@mui/material/Pagination';

const Projects = () => {
    const [res, setRes] = useState([])
    const [page, setPage] = useState(1)

    // const handlePageChange = (pageNo) => {
    //     setPage(pageNo - 1)
    //     document.getElementById(pageNo - 1).scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'center',
    //         inline: 'center',
    //     })
    // }

    const handleChange = (event, value) => {
        setPage(value);
        // document.getElementById(value - 1).scrollIntoView({
        //     behavior: 'smooth',
        //     // block: 'center',
        //     // inline: 'center',
        // })
    };

    useEffect(() => {
        const query = `*[_type == "projects"] | order(display_order asc) {
  name,
  tagline,
  description,
  github,
  site,
  'walkthroughUrl': walkthrough.asset->url,
  display_order,
  tech_stack
}
`

        client.fetch(query)
            .then((res) => {
                console.log(res)
                setRes(res)
            })
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
            className='flex flex-col items-center justify-center snap-y snap-mandatory scroll-smooth lg:h-screen md:h-screen'>
            <div className='flex flex-col w-full'>
                <div className='p-2 mt-16 text-4xl font-bold text-center textGradient'>
                    Projects
                </div>

                {/* <div className='container hidden p-8 overflow-x-scroll md:flex lg:flex scrollbar-hide '>
                    <motion.div
                        whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
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
                </div> */}

                <div className='items-center justify-center flex-grow hidden w-full h-auto overflow-y-scroll rounded scrollbar-hide md:flex lg:flex'>
                    <div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='w-full h-full p-1'
                    >
                        <ProjectCard
                            data={res}
                            page={page}
                        />
                        {/* {
                            res.map((element, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        data={element}
                                        alignment={index % 2 === 0}
                                    />
                                )
                            })
                        } */}
                    </div>
                </div>

                <div className='container flex flex-col p-10 overflow-y-scroll lg:hidden h-1/4 scrollbar-hide '>
                    <motion.div
                        whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center gap-3 overflow-y-scroll' >
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
            <div className='justify-center hidden p-3 lg:flex md:flex'>
                <Pagination
                    // defaultPage={page}
                    shape="rounded"
                    page={page}
                    count={res.length}
                    className="p-1 rounded-lg bg-secondaryBackground"
                    // sx={{
                    //     background: "#40A1FE",
                    //     p: "2px",
                    //     text: "white"
                    // }}
                    onChange={handleChange}
                />
            </div>
        </div >
    )
}


export default Projects