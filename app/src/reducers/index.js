import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  events: EventsReducer,
  toastr: toastrReducer
});

export default rootReducer;
