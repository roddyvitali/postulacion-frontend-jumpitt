import React, { Component } from 'react';
import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#b3d6fe','#7fbcfd','#1988fe']

export default class PieChartCool extends Component {
  constructor(props){
    super(props)

  }

  static displayName = 'PieChartCool';

  render() {
    const {data} = this.props;
    console.log(data)

    let new_data = Object.entries(data).filter((item, index) => index !== 0 ).map( item => ( { name: item[0], value: item[1] } ) )
    return (
      <div style={{ width: '100%', height: '250px' }}>
        <ResponsiveContainer>
   
          <PieChart width={800} height={400}>
            <Pie isAnimationActive={false} dataKey="value" legendType="rect" data={new_data} outerRadius={80} >
              {
                new_data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip/>
            <Legend verticalAlign="bottom" wrapperStyle={{lineHeight: '40px', height: '40px',marginBottom: '10px'}}/>

          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}