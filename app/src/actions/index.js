import axios from 'axios';

const ROOT_URL = 'http://ec2-54-152-171-134.compute-1.amazonaws.com:9200/_search';

export const FETCH_EVENTS = 'FETCH_EVENTS';

// {
//     "query" : {
//         "match" : {
//             "about" : "rock climbing"
//         }
//     }
// }

export function fetchEvents(term) {
  const body = {
    query: {
      match: {
        deviceID: term
      }
    }
  }
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}
