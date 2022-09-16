import React, { useState } from 'react'
import BackSide from './BackSide'
import FrontSide from './FrontSide'


const FlipCard = () => {
    const [flipped, setFlipped] = useState(false)


    const flipCard = () => setFlipped(!flipped)

    return (
        <div>
            {flipped ? <FrontSide flipCard={flipCard} /> : <BackSide flipCard={flipCard} />}
        </div>
    )
}

export default FlipCard