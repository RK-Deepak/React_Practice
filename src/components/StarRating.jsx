import React from 'react'
import StarRatingMaker from './StarRatingMaker'

const StarRating = () => {

    const onRatingPrint=(rating)=>
        {
            console.log(`My current Star Rating is ${rating}`)
        }
  return (

    <div>
        <StarRatingMaker onRatingPrint={onRatingPrint} size={5} defaultRating={3} />
    </div>
  )
}

export default StarRating