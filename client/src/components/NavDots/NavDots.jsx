import React from 'react'
import { Brightness1 } from '@mui/icons-material';


const NavDots = ({ active }) => {
    const sections = ['Home', 'About', 'Contributions', 'Projects'];

    return (
        <div className='gap-2 w-10 items-center justify-center'>
            {sections.map((element, index) => {
                const bg = active === element ? "text-black" : "text-secondaryText"
                return (
                    <a
                        key={index}
                        href={`#${element}`}>
                        <Brightness1
                            className={`${bg} cursor-pointer h-1`} />
                    </a>
                )
            })}

        </div>
    )
}

export default NavDots