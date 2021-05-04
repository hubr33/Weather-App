import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const APIKey = "2375052fa54699fd81fa2b6d318de45c";

class App extends Component {
  state = {
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toTimeString().slice(0, 5),
    staticName: "Warsaw",
    staticCountry: "PL",
    name: "",
    country: "",
    forecast: "",
    temp: "",
    feelsTemp: "",
    maxTemp: "",
    pressure: "",
    humidity: "",
    windSpeed: "",
    sunrise: "",
    sunset: "",
    value: "Warsaw",
    unit: "metric",
    err: false,
  };

  handleValue = (e) => {
    this.setState({ value: e.target.value });
  };

  handleWeather = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=${this.state.unit}`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Wpisz poprawnie nazwę miasta");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({
          err: false,
          date: new Date().toISOString().slice(0, 10),
          time: new Date().toTimeString().slice(0, 5),
          forecast: data.weather[0].main,
          temp: data.main.temp,
          feelsTemp: data.main.feels_like,
          maxTemp: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          name: data.name,
          country: data.sys.country,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          value: prevState.value,
        }));
      });
  };

  handleShowFirstCity = () => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=${this.state.unit}`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState((state) => ({
          date: new Date().toISOString().slice(0, 10),
          time: new Date().toTimeString().slice(0, 5),
          forecast: data.weather[0].main,
          temp: data.main.temp,
          feelsTemp: data.main.feels_like,
          maxTemp: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          name: data.name,
          country: data.sys.country,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          value: prevState.value,
        }));
        console.log("Nie działa");
      });
  };

  handleChangeUnits = (type) => {
    if (type === "metric") {
      this.setState({ unit: "metric" });
    } else if (type === "imperial") {
      this.setState({ unit: "imperial" });
    }
  };

  componentDidMount() {
    this.handleShowFirstCity();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main
          handleValue={this.handleValue}
          stateValue={this.state}
          submit={this.handleWeather}
          submit2={this.handleShowFirstCity}
          changeUnits={this.handleChangeUnits}
        />
      </React.Fragment>
    );
  }
}

export default App;
