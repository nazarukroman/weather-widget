import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {API_URL, API_WEATHER_KEY} from "../constants/Weather";
import WeatherOutput from "../components/WeatherOutput";

class App extends Component {
  state = {
    city: '',
    weather: null,
    error: null,
  }

  fetchWeather = async (city) => {
    const weatherApi = API_URL + city + API_WEATHER_KEY;

    try {
      const response = await fetch(weatherApi);

      if (response.ok) {
        const weather = await response.json();

        this.setState({ weather })
      }
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  handleCityChange = (event) => this.setState({ city: event.target.value })

  handleCitySubmit = (event) => {
    event.preventDefault();

    const { city } = this.state;

    if (city.length < 3) {
      alert('Fill the city field. Min length is 3!');

      return;
    }

    this.fetchWeather(city);
  }

  render() {
    const { city, weather, error } = this.state;

    return <div className='jumbotron'>

      <h1 className='text-center mb-5'>Try enter your city.</h1>

      <form className='d-flex flex-wrap flex-column align-items-center mb-5'>
          <input type='text' id='city-field'
                 className='form-control col-lg-3 col-md-5 col-sm-9 text-center w-100 mb-3'
                 placeholder='Enter your city'
                 value={city}
                 onChange={this.handleCityChange}
                 required />
        <input type='submit'
               id='city-field'
               className='btn btn-primary btn-timeout'
               onClick={this.handleCitySubmit}
               value='Send' />

      </form>

      {weather && <WeatherOutput weather={weather}/>}

      {error && <h1 className='text-center'>Sorry error <b>«{weather.errorText}»</b> is here. <br/> Try it again later.</h1>}

    </div>
  }
}


export default App;