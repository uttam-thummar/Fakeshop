import React from 'react'

function StarRatings({filledStar, unfilledStar}) {
    return (
        <>
            {Array.from(Array(filledStar), (e, i) => {
                return <i className="fas fa-star" style={{color: "#FAB95B"}} key={i}></i>
            })}
            {Array.from(Array(unfilledStar), (e, i) => {
                return <i className="far fa-star" key={i}></i>
            })}
        </>
    )
}

export default StarRatings
