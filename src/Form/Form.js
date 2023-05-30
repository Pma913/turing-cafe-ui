import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearForm = () => {
    this.setState({ name: '', date: '', time: '', number: 0 })
  }

  render() {
    return (
      <div className="res-form">
        <input className="input in-name" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
        <input className="input in-date" type="text" name="date" placeholder="Date (mm/dd)" value={this.state.date} onChange={this.handleChange}></input>
        <input className="input in-time" type="text" name="time" placeholder="Time" value={this.state.time} onChange={this.handleChange}></input>
        <input className="input in-number" type="number" name="number" placeholder="Number of guests" value={this.state.number} onChange={this.handleChange}></input>
        <button className="res-btn" onClick={() => {
          this.props.addRes(this.state)
          this.clearForm()
        }}>Make Reservation</button>
      </div>
    )
  }
}

export default Form