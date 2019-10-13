import React from 'react'
import './Week.css'


const convert = (unixTimestamp) => {
 const weekDays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
 const date = new Date(unixTimestamp*1000)
 const weekDay = weekDays[date.getDay()]
 return weekDay
}

const Week = props => {
  let weekData = props.data.weatherInfo.daily.data
  weekData.shift()
  const dayData = weekData.map((day, index) => {
    return <div className="hour" key={index + 100}>
      <div>
        {convert(day.time)}
      </div>
      <div>
        {Math.round(day.temperatureHigh)}º/{Math.round(day.temperatureLow)}º
      </div>
    </div>}
  )

  return(
    <div className="container">
    <div className="header">
      <div>Next 7 Days</div>
    </div>
    <div className="body">{dayData}</div>
  </div>
  )
}

export default Week
