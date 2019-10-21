import React from 'react';
import classes from './Today.module.css'

const convertweekDay = (unixTimestamp) => {
 const date = new Date(unixTimestamp*1000)
 const weekDay = date.getDay()
 return weekDay
}

const convertHours = (unixTimestamp) => {
 const date = new Date(unixTimestamp*1000)
 const hours = date.getHours()
 return hours
}

const Today = (props) => {
  const city = props.data.geocode.address.city === undefined ?
  props.data.geocode.address.state : props.data.geocode.address.city
  const country = props.data.geocode.address.country

  const currentData = props.data.weatherInfo.currently;
  const dailyData = props.data.weatherInfo.daily.data;
  const hourlyData = props.data.weatherInfo.hourly.data;
  const timeToday = hourlyData.map((data, index) =>
    convertweekDay(hourlyData[0].time) === convertweekDay(data.time) ?
      <div className="weather-item" key={index}>
        <div>
          {convertHours(data.time)+":00"}
        </div>
        <div className="weather-icon">
          <img src={`./assets/weather/${data.icon}.svg`} alt={data.icon} width="30"/>
        </div>
        <div>
          {Math.round(data.temperature)+"º"}
        </div>
      </div>
     : null
  )

  const summary = <>
                    <div className={classes.upperSummary}>
                      <div><img src={`./assets/weather/${currentData.icon}.svg`} alt={currentData.icon} width="60"/></div>
                      <div>
                        <p>{currentData.summary}</p>
                        <p>Chance of Rain: {Math.round(currentData.precipProbability * 100)}%</p>
                      </div>
                      <div className={classes.temperature}>{Math.round(currentData.temperature)}º</div>
                    </div>
                    <div>
                      <hr className="split" />
                      <p className="summary">{props.data.weatherInfo.hourly.summary}</p>
                      <p className="details">See more</p>
                    </div>
                  </>

  return(
    <div className="container" onClick={props.clicked}>
      <div className="header">
        <div>{city}, {country} (Today)</div>
        <div>{Math.round(dailyData[0].temperatureHigh)}º/{Math.round(dailyData[0].temperatureLow)}º</div>
      </div>
      <div className="body">
      {props.data.todaySummary ? summary : timeToday}
      </div>
    </div>
  )
};

export default React.memo(Today);
