import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/index';

import Map from '../components/map';

class EventList extends Component {

  constructor(props) {
    super(props);

    props.fetchEvents('');

    //this.runner();
  }

  runner() {
    this.props.fetchEvents('');
    setTimeout(() => {
        this.runner();
    }, 2000);
  }


  renderEvent(event) {

    console.log(event);
    let data = event._source;

    const date = data['@timestamp'];
    const position = [ data.lat, data.lng ];

    return (
      <tr key={data.seqNumber}>
        <td><Map position={position} id={data.deviceID}/></td>
        <td>{data.deviceID}</td>
        <td>{date}</td>
        <td>{data.station}</td>
      </tr>
    );
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Location</th>
            <th>Device ID</th>
            <th>Date</th>
            <th>Data Station</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map(this.renderEvent)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ events }) {
  return { events }; // ES6 - { events } === { events: events }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
