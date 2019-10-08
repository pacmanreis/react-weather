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
      <div className="card-body">
        <h5 class="card-title">{this.convert(`${this.props.state.time}`)}</h5>
        <p className="card-text">High: {this.props.state.temperatureHigh}</p>
        <p className="card-text">Low: {this.props.state.temperatureLow}</p>
      </div>
    )
  }
}

export default Card
