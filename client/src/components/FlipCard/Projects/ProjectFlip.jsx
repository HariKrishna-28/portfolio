import React, { useState } from 'react'
import BackProject from './BackProject'
import FrontProject from './FrontProject'


const ProjectFlip = ({ data }) => {
    const [flipped, setFlipped] = useState(false)

    const flipCard = () => setFlipped(!flipped)

    return (
        <div className='text-black'>
            {!flipped ? <FrontProject title={data.name} tag={data.tagline} desc={data.description} url={data.walkthroughUrl} flipCard={flipCard} /> : <BackProject description={data.description} ts={data.tech_stack} github={data.github} site={data.site} flipCard={flipCard} />}
        </div>
    )
}

export default ProjectFlip