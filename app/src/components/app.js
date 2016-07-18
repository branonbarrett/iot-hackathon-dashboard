import React from 'react';
import { Component } from 'react';
import { AppBar, IconButton, EnhancedButton } from 'material-ui';
import * as Colors from 'material-ui/styles/colors';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SearchBar from '../containers/search_bar';
import EventList from '../containers/event_list';
import LargeMap from '../containers/large_map';

export default class App extends Component {

  getChildContext() {
    let theme = getMuiTheme(baseTheme);
    theme.appBar.color = Colors.blueGrey400;
    theme.appBar.height = 50;
    return { muiTheme: theme };
  }

  render() {
    const position = [ 33.7490, -84.3880 ];

    // <LargeMap position={position}/>
    // <SearchBar />
    return (
      <div>
        <AppBar title="Event Dashboard" style={{position: 'fixed', top: '0', left: '0'}} iconStyleLeft={{display: 'none'}}/>

        <EventList />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
