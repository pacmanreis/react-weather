import React from 'react';

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
  const cityData = props.data.geocode.display_name;
  const citySplit = cityData.split(', ');
  const city = citySplit[0];
  const country = citySplit[citySplit.length-1];

  const dailyData = props.data.weatherInfo.daily.data
  const hourlyData = props.data.weatherInfo.hourly.data
  const timeToday = hourlyData.map((data, index) =>
    convertweekDay(hourlyData[0].time) === convertweekDay(data.time) ?
      <div className="weather-item" key={index}>
        <div>
          {convertHours(data.time)+":00"}
        </div>
        <div className="weather-icon">
          <img src={`./assets/${data.icon}.svg`} alt={data.icon} width="30"/>
        </div>
        <div>
          {Math.round(data.temperature)+"º"}
        </div>
      </div>
     : null
  )

  return(
    <div className="container">
      <div className="header">
        <div>{city}, {country} (Today)</div>
        <div>{Math.round(dailyData[0].temperatureHigh)}º/{Math.round(dailyData[0].temperatureLow)}º</div>
      </div>
      <div className="body">{timeToday}</div>
    </div>
  )
};

export default Today;
