import React from 'react'
import './Card.css'

const Card = ({ reso}) => {
  return (
    <div className='card'>
      <h2 className="name">{reso.name}</h2>
      <p className="date">{reso.date}</p>
      <p className="time">{reso.time} pm</p>
      <p className="guests">Number of guests: {reso.number}</p>
      <button className="cancel-btn">Cancel</button>
    </div>
  )
} 

export default Card