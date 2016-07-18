import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import * as Colors from 'material-ui/styles/colors';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { fetchEvents } from '../actions/index';
import { toastr } from 'react-redux-toastr'
import moment from 'moment';
import randomstring from 'randomstring';

import Map from '../components/small_map';

class EventList extends Component {

  isAlertOpen = false;
  alertMessage = '';

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

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.events) return true;

    return this.props.events.count !== nextProps.events.count;
  }

  componentWillReceiveProps(nextprops) {

    if (!nextprops.events || !this.props.events) return;

    let time = moment(nextprops.events.data[0]['@timestamp']).format('llll');
    // console.log('events...', nextprops.events.data);
    if (this.props.events.count !== nextprops.events.count) {
      this.alertMessage = `Discharge event received from device: ${nextprops.events.data[0]._source.deviceID}. Event ID: ${nextprops.events.data[0]._id}`;
      this.isAlertOpen = true;
      //toastr.error(`Event from device: ${nextprops.events.data[0]._source.deviceID}`);
    }
  }

  renderEvent(event) {

    let data = event._source;

    if(!data) return <span/>;

    const date = moment(data['@timestamp']).format('llll');

     let position = [33.884852, -84.465927];
     if (data.lat) {
       position = [ data.lat, data.lng ];
     }

     const id = randomstring.generate(7);


     return (
        <TableRow key={id} style={{height: '200px'}}>
          <TableRowColumn><Map position={position} id={data.deviceID}/></TableRowColumn>
          <TableRowColumn>{data.deviceID}</TableRowColumn>
          <TableRowColumn>{date}</TableRowColumn>
          <TableRowColumn>{data.station}</TableRowColumn>
          <TableRowColumn>{event._id}</TableRowColumn>
        </TableRow>
     );
  }

  render() {

    if (!this.props.events || !this.props.events.data) return <div></div>;

    return (
      <div style={{paddingTop: '50px'}}>
        <h4 style={{color: '#6b6b6b', paddingLeft: '24px'}}>Showing {this.props.events.data.length} out of {this.props.events.count} discharge events</h4>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Location</TableHeaderColumn>
              <TableHeaderColumn>Device ID</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Data Station</TableHeaderColumn>
              <TableHeaderColumn>Event ID</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.events.data.map(this.renderEvent)}
          </TableBody>
        </Table>
        <Snackbar
          open={this.isAlertOpen}
          bodyStyle={{backgroundColor: Colors.red700, height: '200px', maxWidth: '500px'}}
          message={this.alertMessage}
          autoHideDuration={10000}
          onRequestClose={this.handleRequestClose} />
      </div>
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
