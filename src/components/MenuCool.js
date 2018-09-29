import React, { Component } from 'react'
import { Icon, Image, Menu, Label } from 'semantic-ui-react'

export default class MenuCool extends Component {
    constructor(props){
        super(props);
    }

  render() {
    const { dataMenu } = this.props
    console.log(dataMenu)
    return (
        <aside>
            <div className="sidebar-header">
                <Image className="logo-header" src='/images/Logo Icon.svg'/> Cool Dashboard
            </div>
            <ul>
                {
                    dataMenu && 
                    dataMenu.map( item => <li className="menu-cool" key={item.id_section}><i className={`icon-cool icon-menu-cool icon-menu${item.id_section}`}></i>{item.section_name}</li> )
                }
                
            </ul>
        </aside>
    )
  }
}


