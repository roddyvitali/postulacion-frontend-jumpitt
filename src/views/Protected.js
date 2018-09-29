import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'

import { Container, Sidebar } from 'semantic-ui-react'
import { itemFetchDataCool } from '../actions/main'

import MenuTop from '../components/MenuTop';
import MenuCool from '../components/MenuCool';
import Main from '../containers/Main';

class Protected extends Component {
  constructor(props){
    super(props)
    
  }
  componentWillMount(){
    this.props.getCoolDashboard()
  }
  render() {
    const { main, menu, toolbar, dashboard } = this.props
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="containerApp">
        <MenuCool dataMenu={menu}/>
        <Sidebar.Pushable as={ Container } fluid className="containerPushable" >
          <Sidebar.Pusher>
            <MenuTop dataToolbar={toolbar} handle={this.handleButtonClick}/>
            <Route path='/main' component={ ()=><Main data={ dashboard }/>} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

const mapStateToProps = ( state, props ) => ({
  menu: state.menu,
  toolbar: state.toolbar,
  dashboard: state.dashboard
})
const mapDispatchToProps = dispatch => ({
  getCoolDashboard: payload => dispatch(itemFetchDataCool(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Protected))
