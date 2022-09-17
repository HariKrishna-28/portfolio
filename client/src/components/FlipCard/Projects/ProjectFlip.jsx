import React, { useState } from 'react'
import BackProject from './BackProject'
import FrontProject from './FrontProject'


const ProjectFlip = () => {
    const [flipped, setFlipped] = useState(false)

    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit alias excepturi molestiae corrupti maxime deserunt est nulla quod accusantium?"
    const flipCard = () => setFlipped(!flipped)

    return (
        <div>
            {!flipped ? <FrontProject title="Load animations react" flipCard={flipCard} /> : <BackProject description={desc} flipCard={flipCard} />}
        </div>
    )
}

export default ProjectFlip