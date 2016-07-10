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

    // console.log(event);

    const date = event.date;
    const position = [ event.lat, event.lon ];

    return (
      <tr key={event.id}>
        <td><Map position={position} id={event.id}/></td>
        <td>{event.id}</td>
        <td>{event.date}</td>
        <td>{event.name}</td>
      </tr>
    );
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Location</th>
            <th>Event ID</th>
            <th>Date</th>
            <th>Name</th>
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
