import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WeatherOutput from './WeatherOutput';
import '../scripts/btnLock';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  citySubmitHandler(e) {
    e.preventDefault();
    switch (ReactDOM.findDOMNode(this.refs.cityInput).value.length < 3) {
      case true:
        alert('Fill the city field. Min length is 3!');
        break;

      default:
        this.setState({
          show: true
        });
        this.props.setWeather(ReactDOM.findDOMNode(this.refs.cityInput).value);
    }
  }


  render() {
    const {weather} = this.props;

    return <div className='jumbotron'>

      <h1 className='text-center mb-5'>Try enter your city.</h1>

      <form className='d-flex flex-wrap justify-content-center mb-5'>

        <div className='form-group w-100 d-flex flex-wrap justify-content-center align-items-center mb-4'>
          <label htmlFor='city-field' className='visibility-hidden'>Enter your city</label>
          <input type='text' id='city-field'
                 className='form-control col-lg-3 col-md-5 col-sm-9 text-center w-100'
                 placeholder='Enter your city'
                 defaultValue=''
                 ref='cityInput'
                 required/>
        </div>
        <input type='submit'
               id='city-field'
               className='btn btn-primary btn-timeout'
               onClick={this.citySubmitHandler.bind(this)}
               value='Send'
               timeout='10'/>

      </form>

      {
        !weather.error ? <WeatherOutput weather={weather}/> :
          <h1 className='text-center'>Sorry error <b>«{weather.errorText}»</b> is here. <br/> Try it again later.</h1>
      }

    </div>
  }
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
  setWeather: PropTypes.func.isRequired
};