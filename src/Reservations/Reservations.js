import React from 'react'
import Card from '../Card/Card'

const Reservations = ({ reservations }) => {
  const resList = reservations.map(res => <Card key={res.id} reso={res} />)
  return (
    <div className="res">
      {resList}
    </div>
  )
}

export default Reservations