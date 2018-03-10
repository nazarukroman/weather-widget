import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import * as weatherActions from '../actions/weatherAction';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

class App extends Component {
  render() {
    const {weather} = this.props;
    const {setWeather} = this.props.weatherActions;

    return <div>
      <Weather weather={weather} setWeather={setWeather}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);