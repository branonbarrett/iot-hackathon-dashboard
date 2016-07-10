import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class LargeMap extends Component {

  renderMarker(event) {
    const position = [ event.lat, event.lon ];

    return (
      <Marker position={position}>
        <Popup>
          <span>{event.id}</span>
        </Popup>
      </Marker>
    );
  }

  render() {

    if (!this.props.events) return <div></div>;

    return (
      <div style={{display: 'flex', flex: '1'}}>
        <Map center={this.props.position} zoom={10} style={{height: '100%'}}>
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          {this.props.events.map(this.renderMarker)}
        </Map>
      </div>
    );
  }
}

function mapStateToProps({ events }) {
  return { events }; // ES6 - { events } === { events: events }
}

export default connect(mapStateToProps)(LargeMap);
