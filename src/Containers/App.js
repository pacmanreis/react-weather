import React, { Component } from 'react';

import './App.css';

import Navbar from '../Components/Navbar/Navbar'
import Today from '../Components/Today/Today'
import Week from '../Components/Week/Week'

class App extends Component {
  state = {
    loading: true,
    city: "Lisbon",
    geocode: "",
    weatherInfo: []
  }

  handleSearch = () => {
    this.setState({ loading: true })
    fetch(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.city}&format=json&accept-language=en`)
    .then(response => response.json())
    .then(data => {
      if (data.error !== "Unable to geocode")
      { this.setState({ geocode: data[0] })
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${this.state.geocode.lat},${this.state.geocode.lon}?units=si`)
          .then(response => response.json())
          .then(data => this.setState({
            weatherInfo: data,
            loading: false
          }))
      }
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.handleSearch();
  }

  render() {
    let displayToday = false;
    let displayWeek = false;
    let todaySummary = false;
    let weekSummary = false;
    if (this.state.weatherInfo !== undefined && this.state.loading === false) {
      displayWeek = <Week data={this.state} />
      displayToday = <Today data={this.state} />
      todaySummary = this.state.weatherInfo.hourly.summary
      weekSummary = this.state.weatherInfo.daily.summary
    };

    return (
      <div className="app">
        <div className="navbar">
          <Navbar name="city" handleChange={this.handleChange} data={this.state} />
        </div>
        <div>
          {todaySummary}
          {displayToday}
        </div>
        <div>
          {weekSummary}
          {displayWeek}
        </div>
      </div>
    );
  }
}

export default App;
