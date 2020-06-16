import React, {Component} from 'react';

export default class WeatherOutput extends Component {
  render() {
    const { weather } = this.props;
    const weatherList = weather.weather.map(item => {
      const imageUrl = 'http://openweathermap.org/img/w/' + item.icon + '.png';
      return <li key={item.id}>
        <p className='alert'><b>{item.main}</b>,
          description: <b>{item.description}</b>
          <img src={imageUrl}
               alt='Weather icon'/></p>
      </li>
    });

    return <div className='d-flex flex-column align-items-center'>
      <h1 className='mb-4'>The weather in <b>{weather.name}</b> city, <b>{weather.sys.country}</b> country.
      </h1>
      <p className='alert alert-info'>Temperature is <b>{(weather.main.temp - 273.1).toFixed(1)}°</b>.</p>
      <p className='alert alert-info'>Humidity is <b>{weather.main.humidity}</b>.</p>
      <p className='alert alert-info'>Wind speed is <b>{weather.wind.speed} m/s</b>.</p>
      <ul className='alert alert-success' style={{ listStyle: 'none' }}>
        {weatherList}
      </ul>
    </div>
  }
}