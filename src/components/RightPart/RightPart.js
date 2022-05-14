import React from 'react'
import './RightPart.css'

export default function RightPart (props) {
  return (
    <>
      <div className='right-part'>
        <div className='button-wrapper'>
          <button className="btn btn-success me-4">All</button>
          <button className="btn btn-success me-4">Friends</button>
          <button className="btn btn-success me-4">Family</button>
          <button className="btn btn-success">Collegue</button>
        </div>
      
        <div className='output'>
          <h3 className='output-name mb-3'>First Name: {props.firstName}</h3>
          <h3 className='output-name mb-3'>Last Name: {props.lastName}</h3>
          <h3 className='output-name'>Number: {props.number}</h3>
        </div>
      </div>


    
    </>
  )
}

