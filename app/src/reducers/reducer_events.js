import { FETCH_EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log(action.payload.data);

      // todo: do elasticsearch data transformation here
      return action.payload.data.hits.hits;
  }
  return state;
}
