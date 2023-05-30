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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="res-form">
        <input className="input" type="text" name="name" placeholder="Name" onChange={this.handleChange}></input>
        <input className="input" type="text" name="date" placeholder="Date (mm/dd)" onChange={this.handleChange}></input>
        <input className="input" type="text" name="time" placeholder="Time" onChange={this.handleChange}></input>
        <input className="input" type="number" name="guests" placeholder="Number of guests" onChange={this.handleChange}></input>
        <button className="res-btn">Make Reservation</button>
      </div>
    )
  }
}

export default Form