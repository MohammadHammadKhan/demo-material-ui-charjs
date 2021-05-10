import React from 'react';
import { Line } from 'react-chartjs-2';



const LineChart = ({data,options}) => (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;