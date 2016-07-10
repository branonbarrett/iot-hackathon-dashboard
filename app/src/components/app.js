import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import EventList from '../containers/event_list';
import LargeMap from '../containers/large_map';

export default class App extends Component {
  render() {
    const position = [ 33.7490, -84.3880 ];

    return (
      <div>
        <SearchBar />
        <EventList />
        <LargeMap position={position}/>
      </div>
    );
  }
}
