import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  API_URL,
  API_WEATHER_KEY
} from '../constants/Weather';


export function setWeather(city) {
  const weatherApi = API_URL + city + API_WEATHER_KEY;

  return function(dispatch) {

    dispatch({
      type: GET_WEATHER_REQUEST,
    });

    fetch(weatherApi)
      .then(response => {
        if (response.ok) {
          return response.json()
            .then(data => {
              dispatch({
                type: GET_WEATHER_SUCCESS,
                payload: data,
                payloadCity: city,
              })
            })
        }

      })
      .catch((error) => {
        dispatch({
          type: GET_WEATHER_FAIL,
          payload: error.message,
        })
      })
  }
}