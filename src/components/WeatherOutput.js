import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class WeatherOutput extends Component {


  render() {
    const weather = this.props.weather;
    const weatherData = weather.weatherData;

    if (weather.show)  {
      const weatherList = weatherData.weather.map(item => {
        const imageUrl = 'http://openweathermap.org/img/w/' + item.icon + '.png';
        return <li key={item.id}>
          <p className='alert'><b>{item.main}</b>,
            description: <b>{item.description}</b>
            <img src={imageUrl}
                 alt='Weather icon'/></p>
        </li>
      });
      return <div className='d-flex flex-column align-items-center'>
        <h1 className='mb-4'>The weather in <b>{weatherData.name}</b> city, <b>{weatherData.sys.country}</b> country.</h1>
        <p className='alert alert-info'>Temperature is <b>{(weatherData.main.temp - 273.1).toFixed(1)}°</b>.</p>
        <p className='alert alert-info'>Humidity is <b>{weatherData.main.humidity}</b>.</p>
        <p className='alert alert-info'>Wind speed is <b>{weatherData.wind.speed} m/s</b>.</p>
        <ul className='list-reset alert alert-success'>
          {weatherList}
        </ul>
      </div>
    } else {
      return <h1 className='text-center visibility-hidden'>Empty content</h1>
    }
  }
}

WeatherOutput.propTypes = {
  weather: PropTypes.object.isRequired
};