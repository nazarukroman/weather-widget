import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from '../constants/Weather';


const initialState = {
  city: '',
  weatherData: {
    main: {}
  },
  isLoaded: false,
  error: '',
  show: false
};

export default function weather(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER_REQUEST:
      return {...state, city: action.payload, isLoaded: action.isLoaded, show: false, error: ''};

    case GET_WEATHER_SUCCESS:
      return {...state, weatherData: action.payload, city: action.payloadCity,
        isLoaded: action.isLoaded, show: true, error: ''};

    case GET_WEATHER_FAIL:
      return {...state, error: action.payload, isLoaded: action.isLoaded, show: false};

    default:
      return state;
  }
}