import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'

import NewMessage from '../components/Dashboard/NewMessage'
import UsersGraph from '../components/Dashboard/UsersGraph'
import DeviceGraph from '../components/Dashboard/DeviceGraph'
import TopReferrals from '../components/Dashboard/TopReferrals'
import Discussions from '../components/Dashboard/Discussions'


const options = [
  { key: 'lastweek', text: 'Last week', value: 'Last week', content: 'Last week' }
]

class Main extends Component {
  state = {
    value: null
  }

  render() {
    console.log(this.props)
    const { data } = this.props
    return (
      <Container fluid style={{padding: '20px'}}>
      { data && 
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1 className="title-header-description">DASHBOARD</h1>
            <h1 className="title-header">Inicio</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={11} tablet={16}>
            <UsersGraph data={data.users_data_graph} />
          </Grid.Column>
          <Grid.Column computer={5} tablet={16}>
            <DeviceGraph data={data.users_by_device_graph} options={options}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={5} tablet={16}>
            <NewMessage />
          </Grid.Column>
          <Grid.Column computer={7} tablet={16}>
            <Discussions data={data.discussions} options={options}/>
          </Grid.Column>
          <Grid.Column computer={4} tablet={16}>
            <TopReferrals data={data.top_referrals} options={options}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      }
      </Container>
    )
  }
}

const mapStateTopProps = ( state, props ) => ({
  main: state.main
})

export default connect(mapStateTopProps)(Main)