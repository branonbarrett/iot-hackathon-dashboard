import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/index';
import { toastr } from 'react-redux-toastr'
import moment from 'moment';

import Map from '../components/map';

class EventList extends Component {

  constructor(props) {
    super(props);

    props.fetchEvents('');

    this.runner();
  }

  runner() {
    this.props.fetchEvents('');
    setTimeout(() => {
        this.runner();
    }, 2000);
  }

  componentWillReceiveProps(nextprops) {
    console.log('nextprops...', nextprops.events);
    console.log('props...', this.props.events);

    if (!nextprops.events || !this.props.events) return;
    // const data = nextprops.events[0]._source
    console.log('events...', nextprops.events.data);
    if (this.props.events.count !== nextprops.events.count) {
      toastr.error(`Event from device: ${nextprops.events.data[0]._source.deviceID}`);
    }
  }

  renderEvent(event) {

    let data = event._source;

    const date = moment(data['@timestamp']).format('llll');

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
    if (!this.props.events || !this.props.events.data) return <div></div>;

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
          {this.props.events.data.map(this.renderEvent)}
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
