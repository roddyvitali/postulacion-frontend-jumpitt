import React, { Component } from 'react'
import { Input, Image, Button, Menu, Dropdown, Label } from 'semantic-ui-react'
import fullscreen from '@roddyvitali/fullscreen-js'
import { withRouter } from 'react-router-dom'

class MenuTop extends Component {
  state = {
    iconFullscreen: 'expand'
  }
  constructor(props){
    super(props)
  }

  logout = () => {
      this.props.history.push('/')
  }
  render(){
    const { dataToolbar } = this.props
    console.log(this.props)
    const trigger = (displayName) => (
      <span>
        <Image avatar src='/images/Avatar.png' /> 
        &nbsp;{displayName}
      </span>
    )
    return(
      <Menu borderless attached className="header-cool">
        <Menu.Item >
          <Input icon='search'  iconPosition='left' placeholder='Buscar...' style={{ border: '0 !important' }} />
        </Menu.Item>
        <Menu.Item position='right' style={{ padding: 0}}>
          <Menu.Item className="only_computer">
            <Button
            basic
            onClick={()=>{
              if(fullscreen.is()){
                fullscreen.exit()
                this.setState({iconFullscreen: 'expand'})
              } else {
                fullscreen.request()
                this.setState({iconFullscreen: 'compress'})
              }
            }}
            circular icon={this.state.iconFullscreen} />
            </Menu.Item>
           <div className="icon-cool icon-header-cool icon-notification-cool">
            { dataToolbar && <div className="badge-notification-cool">{ dataToolbar.notifications_count }</div> }
           </div>
          <Dropdown  trigger={trigger( dataToolbar && dataToolbar.userName )} item style={{height: '100%'}}>
            <Dropdown.Menu>
              <Dropdown.Item >Perfil</Dropdown.Item>
              <Dropdown.Item>FAQ</Dropdown.Item>
              <Dropdown.Item onClick={this.logout}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
 }

export default withRouter(MenuTop)