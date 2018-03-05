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
      isLoaded: false
    });


    fetch(weatherApi).then(function(response) {


      response.json().then(function(data) {
        dispatch({
          type: GET_WEATHER_SUCCESS,
          payload: data,
          payloadCity: city,
          isLoaded: true
        })
      }, function(err) {
          dispatch({
            type: GET_WEATHER_FAIL,
            payload: err,
            isLoaded: false
          })
      })


      // try {
      //   response.json().then(function(data) {
      //
      //     dispatch({
      //       type: GET_WEATHER_SUCCESS,
      //       payload: data,
      //       payloadCity: city
      //     })
      //
      //   })
      // } catch (err) {
      //
      //   dispatch({
      //     type: GET_WEATHER_FAIL,
      //     payload: new Error(err)
      //   });
      //
      //   console.log('Error ' + err.name + ":" + err.message);
      // }

    })
  }
}