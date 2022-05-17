import React from 'react'
import './RightPart.css'

export default function RightPart (props) {
  return (
    <>
      <ul className='right-part'>
      
        <li className='output'>
          <h3 className='output-name mb-3'>Full Name: {props.name}</h3>
          <h3 className='output-name'>Number: {props.num}</h3>
          <p className='filter-text'>{props.category}</p>
        </li>
      </ul>


    
    </>
  )
}

