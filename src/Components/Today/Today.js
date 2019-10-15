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
          <img src={`./assets/${data.icon}.svg`} alt={data.icon} width="30"/>
        </div>
        <div>
          {Math.round(data.temperature)+"º"}
        </div>
      </div>
     : null
  )

  const summary = <div className="summary-container">
                    <div className="upper-summary">
                      <div><img src={`./assets/${currentData.icon}.svg`} alt={currentData.icon} width="60"/></div>
                      <div>
                        <p>{currentData.summary}</p>
                        <p>Chance of Rain: {currentData.precipProbability * 100}%</p>
                      </div>
                      <div className="temperature">{Math.round(currentData.temperature)}º</div>
                    </div>
                    <div>
                      <hr className="split" />
                      <p className="wrap">{props.data.weatherInfo.hourly.summary}</p>
                    </div>
                  </div>

  return(
    <div className="container" onClick={props.clicked}>
      <div className="header">
        <div>{city}, {country} (Today)</div>
        <div>{Math.round(dailyData[0].temperatureHigh)}º/{Math.round(dailyData[0].temperatureLow)}º</div>
      </div>
      <div className="body">{props.data.todaySummary ? summary : timeToday}</div>
    </div>
  )
};

export default Today;
