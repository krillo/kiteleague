import React, { useState } from 'react'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import './Expandable.scss';

interface IProps {
    // handleClick: () => void
    heading: string
}

const Expandable = ({  heading }: IProps) => {
    const [activeClass, setActiveClass] = useState('')

    /**
     * open and close panel from button
     */
    const handleOnClick = () => {
        activeClass === '' ? setActiveClass('active') : setActiveClass('')
    }

    return (
        <>
            <button className={`expandable ${activeClass}`} onClick={handleOnClick}>
                {heading} <ExpandMoreRoundedIcon className='expand-more'/>
            </button>
            <div className={`panel ${activeClass}`} >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
        </>
    )
}

export default Expandable