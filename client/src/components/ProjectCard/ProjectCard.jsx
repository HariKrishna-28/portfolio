import React from 'react'
import ProjectTile from './ProjectTile'

const ProjectCard = ({ data }) => {


    return (
        <div className='flex-flex-col gap-4 p-3'>
            {
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
            }
        </div>
        // <div className=''>

        // </div>
    )
}

export default ProjectCard