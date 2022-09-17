import React, { useState } from 'react'
import BackSide from './BackSide'
import FrontSide from './FrontSide'


const ContributionFlip = () => {
    const [flipped, setFlipped] = useState(false)

    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit alias excepturi molestiae corrupti maxime deserunt est nulla quod accusantium?"
    const flipCard = () => setFlipped(!flipped)

    return (
        <div>

            {!flipped ? <FrontSide title="Load animations react" flipCard={flipCard} /> : <BackSide description={desc} flipCard={flipCard} />}
        </div>
    )
}

export default ContributionFlip