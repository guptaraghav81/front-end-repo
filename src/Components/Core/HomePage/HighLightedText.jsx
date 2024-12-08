import React from 'react'
import "../../../App.css"
const HighLightedText = ({text}) => {
  return (
    <span className='font-bold highlightedText'>
      {text}
      </span>
  )
}

export default HighLightedText