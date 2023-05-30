import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
      <h2 className="name">Name</h2>
      <p className="date">Date</p>
      <p className="time">time</p>
      <p className="guests">Number of guests:</p>
      <button className="cancel-btn">Cancel</button>
    </div>
  )
} 

export default Card