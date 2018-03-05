import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WeatherOutput from './WeatherOutput';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  citySubmitHandler(e) {
    e.preventDefault();
    console.log('input value', ReactDOM.findDOMNode(this.refs.cityInput).value);
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

    // if (this.props.setWeather(ReactDOM.findDOMNode(this.refs.cityInput).value) === undefined) {
    //
    // } else {
    //   this.setState({
    //     show: true
    //   });
    //
    //   return this.props.setWeather(ReactDOM.findDOMNode(this.refs.cityInput).value);
    // }
  }


  render() {
    const {weather} = this.props;
    const {show} = this.state.show;

    return <div className='jumbotron'>
      <form className='d-flex flex-wrap justify-content-center'>

        <div className='form-group w-100 d-flex justify-content-center align-items-center mb-4'>
          <label htmlFor='city-field' className='visibility-hidden'>Enter your city</label>
          <input type='text' id='city-field'
                 className='form-control col-lg-3 col-md-5 col-sm-9 text-center'
                 placeholder='Enter your city'
                 defaultValue=''
                 ref='cityInput'
                 required/>
        </div>
        <input type='submit'
               id='city-field'
               className='btn btn-primary'
               placeholder='English please'
               onClick={this.citySubmitHandler.bind(this)}
               value='Send'/>

      </form>

      {
        weather.show ? <WeatherOutput weather={weather}/> : <h1>Try enter your city</h1>
      }

    </div>
  }
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
  setWeather: PropTypes.func.isRequired
};