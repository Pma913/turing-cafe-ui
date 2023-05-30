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
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Date (mm/dd)"></input>
        <input type="text" placeholder="Time"></input>
        <input type="number" placeholder="Number of guests"></input>
        <button>Make Reservation</button>
      </div>
    )
  }
}

export default Form