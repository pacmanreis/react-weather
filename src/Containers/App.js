import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navbar from '../Components/Navbar/Navbar'
import Today from '../Components/Today/Today'
import Week from '../Components/Week/Week'
import Welcome from '../Components/Welcome/Welcome'
import Footer from '../Components/Footer/Footer'
import './App.css';

class App extends Component {
  state = {
    loading: true,
    city: "",
    geocode: "",
    weatherInfo: [],
    todaySummary: true,
    weekSummary: true
  }

  componentDidMount() {
    const that = this;
    this.setState({ loading: true })
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(coordinates);
    function coordinates(position) {
      fetch(`https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
        .then(response => response.json())
        .then(data => {
          if (data.error !== "Unable to geocode")
          { that.setState({ geocode: data })
            fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${position.coords.latitude},${position.coords.longitude}?units=si`)
            .then(response => response.json())
            .then(data => that.setState({
              weatherInfo: data,
              loading: false
            }))
          }
        });
    }
  }

  handleSearch = () => {
    this.setState({ loading: true })
    fetch(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.city}&format=json&accept-language=en&addressdetails=1`)
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

  handleClickToday = () => {
    this.setState((prevState) => {
      return {todaySummary: !prevState.todaySummary}
    })
  }

  handleClickWeek = () => {
    this.setState((prevState) => {
      return {weekSummary: !prevState.weekSummary}
    })
  }

  render() {
    let displayToday = false;
    let displayWeek = false;
    let welcome = <Welcome />;

    if (this.state.geocode !== "" && this.state.weatherInfo !== undefined && this.state.loading === false) {
      welcome = false;

      displayWeek = <CSSTransition
        in={true}
        appear
        timeout={1000}
        classNames="fade"
        key="bljkablkjabda"
      >
        <Week data={this.state}  clicked={this.handleClickWeek} />
      </CSSTransition>;

      displayToday = <CSSTransition
        in={true}
        appear
        timeout={1000}
        classNames="fade"
        key="b3232ljkablkjabda"
      >
        <Today data={this.state} clicked={this.handleClickToday} />
      </CSSTransition>;
    };

    return (
      <div className="app">
        <main>
          <Navbar handleChange={this.handleChange} />
          {welcome}
          {displayToday}
          {displayWeek}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
