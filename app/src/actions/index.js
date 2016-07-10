import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents(city) {
  const url = `${ROOT_URL}/events`;
  const request = axios.get(url);

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}
