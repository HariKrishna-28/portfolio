import React, { useState } from 'react'
import BackProject from './BackProject'
import FrontProject from './FrontProject'


const ProjectFlip = ({ data }) => {
    const [flipped, setFlipped] = useState(false)
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit alias excepturi molestiae corrupti maxime deserunt est nulla quod accusantium?"
    const flipCard = () => setFlipped(!flipped)
    return (
        <div className='text-black'>
            {!flipped ? <FrontProject title={data.name} desc={data.description} url={data.walkthrough} flipCard={flipCard} /> : <BackProject description={data.description} ts={data.tech_stack} github={data.github} site={data.site} flipCard={flipCard} />}
        </div>
    )
}

export default ProjectFlip