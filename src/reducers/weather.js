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
  error: null,
  errorText: '',
  show: false
};

export default function weather(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER_REQUEST:
      return {...state, city: action.payload, show: false, error: false, errorText: ''};

    case GET_WEATHER_SUCCESS:
      return {...state, weatherData: action.payload, city: action.payloadCity,
        show: true, error: false, errorText: ''};

    case GET_WEATHER_FAIL:
      return {...state, error: true, show: false, errorText: action.payload};

    default:
      return state;
  }
}