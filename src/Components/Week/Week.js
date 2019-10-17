import React from 'react'

const convert = (unixTimestamp) => {
 const weekDays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
 const date = new Date(unixTimestamp*1000)
 const weekDay = weekDays[date.getDay()]
 return weekDay
}

const Week = props => {
  const weekData = props.data.weatherInfo.daily.data
  let weekTest = weekData.slice(0)
  weekTest.shift()
  const dayData = weekTest.map((day, index) => {
    return <div className="weather-item" key={index + 100}>
      <div>
        {convert(day.time)}
      </div>
      <div className="weather-icon">
        <img src={`./assets/${day.icon}.svg`} alt={day.icon} width="30"/>
      </div>
      <div>
        {Math.round(day.temperatureHigh)}º/{Math.round(day.temperatureLow)}º
      </div>
    </div>}
  )

  return(
    <div className="container" onClick={props.clicked}>
    <div className="header">
      <div>Next 7 Days</div>
    </div>
    <div className="body">{props.data.weekSummary ? <p>{props.data.weatherInfo.daily.summary}</p> : dayData}</div>
  </div>
  )
}

export default Week
