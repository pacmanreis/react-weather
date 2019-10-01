import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      city: "Lisbon",
      geocode: "",
      weatherInfo: null
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearch() {
    this.setState({ loading: true })
    fetch(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.city}&format=json`)
      .then(response => response.json())
      .then(data => { this.setState({ geocode: data[0] }) })
      .then(response => fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${this.state.geocode.lat},${this.state.geocode.lon}?units=si&lang=pt&exclude=hourly`)
          .then(response => response.json())
          .then(data => this.setState({
            weatherInfo: data,
            loading: false
          }))
      )
  }

  handleChange(event) {
    const { name } = event.target
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input name="city" value={this.state.city} onChange={this.handleChange} />
        <button onClick={this.handleSearch}>search</button>
        <p>City: {this.state.city}</p>
        <p>Lat: {this.state.geocode.lat}</p>
        <p>Lon: {this.state.geocode.lon}</p>
        <p>{this.state.weatherInfo === null || this.state.loading === true ? "Loading..." : this.state.weatherInfo.currently.temperature }</p>
        <p>{this.state.weatherInfo === null || this.state.loading === true ? "Loading..." : this.state.weatherInfo.daily.summary }</p>
        <p>{this.state.weatherInfo === null || this.state.loading === true ? "Loading..." : this.state.weatherInfo.daily.data.map( temp => temp["temperatureHigh"]) }</p>
      </div>
    );
  }

}

export default App;
