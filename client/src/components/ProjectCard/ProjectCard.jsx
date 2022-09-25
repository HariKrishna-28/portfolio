import React from 'react'

const ProjectCard = ({ data, alignment }) => {
    const { title, description, github, name, site, tagline, tech_stack, walkthrough } = data
    const align = alignment ? "flex-row" : "flex-row-reverse"

    return (
        // <div className=''>
        <div className={`flex ${align} p-10 w-full bg-secondaryBackground rounded gap-5 justify-evenly`}>
            <div className='flex flex-col justify-around gap-2'>
                <div>
                    {name}
                </div>
                <div>
                    <video src={walkthrough} className="rounded w-[150px]" autoPlay loop />
                </div>
            </div>
            <div>
                {tagline}
            </div>
        </div>
        // </div>
    )
}

export default ProjectCard