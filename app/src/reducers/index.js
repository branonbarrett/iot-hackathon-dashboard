import { combineReducers } from 'redux';
import WeatherReducer from './reducer_events';
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  events: WeatherReducer,
  toastr: toastrReducer
});

export default rootReducer;
