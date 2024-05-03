import React, { useState } from 'react'

const ReadMore = ({ props }) => {

    const para = props ; 

    const [isReadMore, setIsReadMore] = useState(true)

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <>
            <p>
            { isReadMore ? para.slice(0,140) : para}
            <span onClick={toggleReadMore}
            className='read-more'
            >
            {isReadMore ? " ...read more " : " show less "}  
            </span> 
            </p>
        </>
    )
}

export default ReadMore