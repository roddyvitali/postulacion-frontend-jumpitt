import React from 'react';
import {  Dropdown } from 'semantic-ui-react';
import PieChartCool from '../Charts/PieChart';

const DeviceGraph = ({data, options}) => (
    <div className="card-cool">
    <div className="card-header-cool">
      Users by device
      <div className="icon-cool icon-dashboard-cool icon-dashboard-options"></div>
    </div>
    <div className="card-content-1">
      <PieChartCool data={data} />
    
    </div>
    <div className="card-footer-cool">
        <Dropdown inline className="dropdown-cool" options={options} defaultValue={options[0].value} />
        <span className="report-cool">View full report →</span>
      </div>
  </div>
);

export default DeviceGraph;