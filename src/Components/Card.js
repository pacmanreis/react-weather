import React from 'react'



function Card(props) {
  return(
    <div>
      <p>High: {props.state.temperatureHigh}</p>
      <p>Low: {props.state.temperatureLow}</p>
    </div>
  )
}

export default Card
