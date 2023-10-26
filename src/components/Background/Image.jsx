import React from 'react'
import './Image.css'

const Image = (props) => {
  return (
    <div className="image-container">
            <img className='BackImage' src='https://static.sliit.lk/wp-content/uploads/2021/07/07031851/sliit-international-section-transfer-options-Deakin-university.jpg' alt='Background Image'/>
            <div className="image-text">"{props.text}"</div>
    </div>
  )
}

export default Image