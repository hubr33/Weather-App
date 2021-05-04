import React from "react";
import "../css/main.css";

const Main = (props) => {
  const { sunrise, sunset } = props.stateValue;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  const clearInput = () => {
    const input = document.getElementById("inputID");
    input.value = "";
  };

  return (
    <main>
      <div className="appWrapper">
        <div className="cityAndInputWrapper">
          <div className="city-container">
            <p>
              {props.stateValue.name}, {props.stateValue.country}
            </p>
          </div>
          <div className="input-container">
            <form onSubmit={props.submit}>
              <input
                onChange={props.handleValue}
                type="text"
                placeholder="Type city name..."
                id="inputID"
              />
              <button onClick={clearInput}>Check</button>
            </form>
          </div>
          <div className="units">
            <form onSubmit={props.submit}>
              <button
                onClick={() => props.changeUnits("metric")}
                className="metric"
              >
                Metric
              </button>
              <button
                onClick={() => props.changeUnits("imperial")}
                className="imperial"
              >
                Imperial
              </button>
            </form>
          </div>
        </div>
        <div className="weatherInformation">
          <div className="dateInfo">{`Day weather ${props.stateValue.date} ${props.stateValue.time}`}</div>
          <div className="temp">
            <div className="currentWeather">
              <p>Forecast</p>
              <p>{props.stateValue.forecast}</p>
            </div>
            <div className="currentTemp">
              <p>Temperature</p>
              <p>
                {props.stateValue.temp}{" "}
                {props.stateValue.unit === "metric" ? "°C" : "°F"}
              </p>
            </div>
            <div className="currentFeelingTemp">
              <p>Feels Like</p>
              <p>
                {props.stateValue.feelsTemp}{" "}
                {props.stateValue.unit === "metric" ? "°C" : "°F"}
              </p>
            </div>
          </div>
          <div className="mainAndSunset">
            <div className="currentSunrise">
              <p>Sunrise</p>
              <p>{sunriseTime}</p>
            </div>
            <div className="currentSunset">
              <p>Sunset</p>
              <p>{sunsetTime}</p>
            </div>
            <div className="currentHumidity">
              <p>Humidity</p>
              <p>{props.stateValue.humidity}%</p>
            </div>
          </div>
          <div className="pressureAndSpeed">
            <div className="currentPressure">
              <p>Pressure</p>
              <p>{props.stateValue.pressure} hPa</p>
            </div>
            <div className="currentSpeed">
              <p>Wind</p>
              <p>
                {props.stateValue.windSpeed}{" "}
                {props.stateValue.unit === "metric" ? "km/h" : "mph"}
              </p>
            </div>
            <div className="maxTemp">
              <p>Max. Temperature</p>
              <p>
                {props.stateValue.maxTemp}{" "}
                {props.stateValue.unit === "metric" ? "°C" : "°F"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
