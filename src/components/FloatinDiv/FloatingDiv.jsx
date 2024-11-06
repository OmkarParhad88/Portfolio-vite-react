import React from 'react'
import './FloatingDiv.css'
function FloatingDiv( {image ,text,text2}) {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span>
        {text}
        <br />
        {text2}
      </span>
    </div>
  )
}

export default FloatingDiv
