import React, {Component} from 'react'

class Card extends Component {
  convert(unixTimestamp){
   const weekDays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
   const date = new Date(unixTimestamp*1000)
   const weekDay = weekDays[date.getDay()]
   return weekDay
  }

  render() {
    return(
      <div>
        <p>{this.convert(`${this.props.state.time}`)}</p>
        <p>High: {this.props.state.temperatureHigh}</p>
        <p>Low: {this.props.state.temperatureLow}</p>
        <p>{this.props.state.summary}</p>
      </div>
    )
  }
}

export default Card
