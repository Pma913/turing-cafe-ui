import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: 0
    }
  }

  render() {
    return (
      <div className="res-form">
        <input className="input" type="text" placeholder="Name"></input>
        <input className="input" type="text" placeholder="Date (mm/dd)"></input>
        <input className="input" type="text" placeholder="Time"></input>
        <input className="input" type="number" placeholder="Number of guests"></input>
        <button className="res-btn">Make Reservation</button>
      </div>
    )
  }
}

export default Form