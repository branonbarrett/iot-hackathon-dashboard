import { FETCH_EVENTS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      const count = action.payload.data.hits.total;
      const data = action.payload.data.hits.hits;

      return { count: count, data: data };
  }
  return state;
}
