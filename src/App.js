import React, { Component } from 'react';

import './App.css';

import Form from './Components/Form'
import Card from './Components/Card'

class App extends Component {
  state = {
    loading: true,
    city: "Lisbon",
    geocode: "",
    weatherInfo: []
  }

  handleSearch = () => {
    this.setState({ loading: true })
    fetch(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.city}&format=json`)
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
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    this.handleSearch()
  }

  render() {
    let displayResults = false
    if (this.state.weatherInfo !== undefined && this.state.loading === false) {
      let weatherData = this.state.weatherInfo.daily.data
      weatherData.splice(0,1)
      displayResults = weatherData.map( (info) => <div className="card"><Card state={info} /></div>)
    }

    return (
      <div>
        <Form name="city" handleChange={this.handleChange} data={this.state} />
        <div className="card-list">
          {displayResults}
        </div>
      </div>
    );
  }
}

export default App;
