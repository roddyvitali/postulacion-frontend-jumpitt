import React, { Component } from 'react';
import { ResponsiveContainer, Area,  AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

export default class AreaChartCool extends Component {
  constructor(props){
    super(props)
  }

  static displayName = 'AreaChartCool';

  render() {
    const { current_month_data, past_month_data } = this.props.data
    const new_data = past_month_data.map( (item,index) => ({ name: index+1, pm: item, cm: current_month_data[index] }))

    return (
      <div style={{ width: '100%', height: '250px' }}>
        <ResponsiveContainer>
          <AreaChart width={600} height={400} data={new_data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
            <Legend  iconType="rect" verticalAlign="top" verticalAlign={'top'} wrapperStyle={{lineHeight: '20px', height: '20px', margin: '-10px'}}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"  interval={5} />
            <YAxis/>
            <Tooltip/>
            <Area name="Current Month" type='monotone' dataKey='pm' stackId="1" stroke='#8884d8' fill='#8884d8'/>
            <Area name="Past Month" type='monotone' dataKey='cm' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}