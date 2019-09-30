import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: "Lisbon",
      geocode: "",
      weatherInfo: null
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=Lisbon&format=json`)
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

  render() {
    return (
      <div>
        <p>City: {this.state.city}</p>
        <p>Lat: {this.state.geocode.lat}</p>
        <p>Lon: {this.state.geocode.lon}</p>
        <p>{this.state.weatherInfo === null ? "Loading..." : this.state.weatherInfo.currently.temperature }</p>
        <p>{this.state.weatherInfo === null ? "Loading..." : this.state.weatherInfo.daily.summary }</p>
      </div>
    );
  }

}

export default App;
