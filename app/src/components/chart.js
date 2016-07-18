import _ from 'lodash';
import React from 'react';
import { Doughnut } from 'react-chartjs';
import * as Colors from 'material-ui/styles/colors';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  let data = {
    labels: [
      'Non-reporting Devices',
      'Devices'
    ],
    datasets: [
      {
        data: [2, 300],
        backgroundColor: [
          Colors.red600,
          Colors.green500
        ],
        hoverBackgroundColor: [
          Colors.red600,
          Colors.green500
        ]
    }]
  };

  return (
    <div>
      <Doughnut data={data}></Doughnut>
      <div>Device Tracking</div>
    </div>
  );
}
