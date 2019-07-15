import React, { Component } from 'react';
import Chart from 'chart.js';

export default class Graph extends Component {
  componentDidMount() {
    const ctx = this.refs.canvas.getContext('2d');
    const dataPoints = [];
    for (let i = 0; i < 31; i++) {
      dataPoints.push(
        {
          x: new Date(new Date().setDate(new Date().getDate()-i)), 
          y: Math.pow(i, 2) * 2 + 834
        }
      );
    }

    const dataOb = {
      datasets: [{
        label: 'Scatter Dataset',
        data: dataPoints,
        fill: false,
        lineTension: 0.4
      }]
    }

    new Chart(ctx, {
      type: 'line',
      data: dataOb,
      options: {
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                      unit: 'day'
                  }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
          },
          legend: {
            display: false
          }
      }
  });
  }

  render() {
    return (
      <div>
        <canvas ref="canvas"></canvas>
      </div>
    )
  }
}
