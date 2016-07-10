import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
//import {GoogleMapLoader, GoogleMap} from "react-google-maps";

export default (props) => {
  return (
    <Map center={props.position} zoom={14} style={{height: '100%'}}>
      <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      <Marker position={props.position}>
        <Popup>
          <span>{props.id}</span>
        </Popup>
      </Marker>
    </Map>
  );
}
