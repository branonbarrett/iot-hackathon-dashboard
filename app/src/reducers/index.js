import { combineReducers } from 'redux';
import WeatherReducer from './reducer_events';

const rootReducer = combineReducers({
  events: WeatherReducer
});

export default rootReducer;
