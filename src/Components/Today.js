import React from 'react';

import './Today.css';

const convert = (unixTimestamp) => {
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
  const timeToday = hourlyData.map((data, index) => {
    return convert(hourlyData[0].time) === convert(data.time) ?
    <div className="hour" key={index}>
      <div>
        {convertHours(data.time)+":00"}
      </div>
      <div>
        {data.temperature+"º"}
      </div>
    </div>
     : null }
  )

  return(
    <div className="container">
      <div className="header">
        <div>{city}, {country} (Today)</div>
        <div>{dailyData[0].temperatureHigh}º/{dailyData[0].temperatureLow}º</div>
      </div>
      <div className="body">{timeToday}</div>
    </div>
  )
};

export default Today;
