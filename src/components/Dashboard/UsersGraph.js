import React from 'react';

import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import AreaChartCool from '../Charts/AreaChart';

const calendar = (<Calendar 
    format = "DD-MM-YYYY"
    onSelect= {(value) =>{
      console.log('onSelect');
    }}
    showDateInput={false}
    showToday={false}
    onChange = {
      (moment)=>{
        console.log(moment.format("DD-MM-YYYY"))
      }
    }
    />);
const UsersGraph = ({data}) => (
    <div className="card-cool">
        <div className="card-header-cool">
        Users
        <div className="icon-cool icon-dashboard-cool icon-dashboard-options"></div>
        </div>
        <div className="card-toolbar-cool">
        <DatePicker animation="slide-up" calendar={calendar}  >
            { () => 
                <span tabIndex="0">
                    <input placeholder="Start Date" readOnly tabIndex="-1" className="calendar-cool" />
                </span>
            }
        </DatePicker>
        <DatePicker animation="slide-up" calendar={calendar}  >
            { () => 
                <span tabIndex="0">
                    <input  placeholder="End Date" style={{ borderRadius: '0 4.11px  4.11px 0'}} readOnly tabIndex="-1" className="calendar-cool" />
                </span>
            }
        </DatePicker>
        <span className="report-cool">View Full Report →</span>
        </div>
        <div className="card-content-1">
        <AreaChartCool data={data} />
        </div>
    </div>
);

export default UsersGraph;