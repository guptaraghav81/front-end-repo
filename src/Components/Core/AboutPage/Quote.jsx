import React from 'react'
import HighLightedText from '../HomePage/HighLightedText'
import "../../../App.css"
const Quote = () => {
  return (
    <div className='text-4xl text-center text-richblack-5 font-semibold'>
      We are passionate about revolutionizing the way we learn. Our innovative platform <HighLightedText text={"combines technology"}/>
      <span className='highlightedTextOrange'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <span  className='highlightedTextOrange'>
      {" "}
        unparalleled educational experience.
      </span>
    </div>
  )
}

export default Quote
