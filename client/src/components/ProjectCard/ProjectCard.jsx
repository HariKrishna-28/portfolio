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
        <div className='flex-flex-col h-full gap-4 p-3'>
            {
                show &&
                <div
                >
                    <ProjectTile
                        data={pdata}
                        alignment={page % 2 === 0}
                    />
                </div>
            }
        </div>
    )
}

export default ProjectCard