import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import EventList from '../containers/event_list';
import LargeMap from '../containers/large_map';

export default class App extends Component {

  render() {
    const position = [ 33.7490, -84.3880 ];

    // <LargeMap position={position}/>
    return (
      <div>
        <h2 style={{marginTop: '16px'}}>Event Dashboard</h2>
        <SearchBar />
        <EventList />
      </div>
    );
  }
}
