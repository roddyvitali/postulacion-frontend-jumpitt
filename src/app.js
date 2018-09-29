import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './views/Login'
import Protected from './views/Protected'
import { PrivateRoute } from './components/PrivateRoute'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return(
      <Router>
        <Container className="containerMain" fluid>
          <Route path='/' exact component={ Login } />
          <PrivateRoute path='/main' component={ Protected } />
        </Container>
      </Router>
    )
  }
}

export default App