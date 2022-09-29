import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProjectTile from './ProjectTile'

const ProjectCard = ({ data, page }) => {
    const [show, setShow] = useState(false)
    const [pdata, setPdata] = useState([])
    useEffect(() => {
        if (!data | !page) {
            return
        }
        setPdata(data[page - 1])
        setShow(true)
    }, [data, page])

    return (
        <div className='flex-flex-col gap-4 p-3'>
            {
                show &&
                <motion.div
                    whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                    // x: [-100, 0],
                    transition={{ duration: 0.5 }}>
                    <ProjectTile
                        data={pdata}
                        alignment={page % 2 === 0}
                    />
                </motion.div>
            }
            {/* {
                data.map((element, index) => {
                    return (
                        <div id={index}>
                            <ProjectTile
                                key={index}
                                data={element}
                                alignment={index % 2 === 0}
                            />
                        </div>
                    )
                })
            } */}
        </div>
        // <div className='flex-flex-col gap-4 p-3'>
        //     {/* {
        //         data.map((element, index) => {
        //             return ( */}
        //     <div>
        //         <ProjectTile
        //             data={d}
        //             alignment={page % 2 === 0}
        //         />
        //     </div>
        //     {/* )
        //         })
        //     } */}
        // </div>
        // <div className=''>

        // </div>
    )
}

export default ProjectCard