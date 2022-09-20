import React, { useState } from 'react'
import BackSide from './BackSide'
import FrontSide from './FrontSide'


const ContributionFlip = ({ description, github, name, npm }) => {
    const [flipped, setFlipped] = useState(false)
    console.log(description, github, name, npm)

    const flipCard = () => setFlipped(!flipped)

    return (
        <div>

            {!flipped ? <FrontSide title={name} flipCard={flipCard} /> : <BackSide description={description} flipCard={flipCard} github={github} site={npm} />}
        </div>
    )
}

export default ContributionFlip