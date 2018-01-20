import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from '../components/Nav'

import Availability from './Availability'
import Dashboard from './Dashboard'
import Documentation from './Documentation'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Nav />
                
                <Switch>
                    <Route exact path='/private' component={Dashboard} />
                    <Route path='/private/availability' component={Availability} />
                    <Route path='/private/documentation' component={Documentation} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
