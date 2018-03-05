import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class WeatherOutput extends Component {


  render() {
    const weather = this.props.weather;
    const weatherData = weather.weatherData;

    if (!weather.isLoaded) {
      console.log('loading', weather);
      return <h1>Loading..</h1>
    } else {
      return <div>
        <h1>This will be weather of the {weatherData.name}</h1>
        <p>Temperature is {(weatherData.main.temp - 273.1).toFixed(1)}°</p>
        <p>Humidity is {weatherData.main.humidity}</p>
      </div>
    }
  }
}

WeatherOutput.propTypes = {
  weather: PropTypes.object.isRequired
};