import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainDraw from './mainDraw.js'
import HomePage from './homePage.js'
import CreatePools from './createPools.js'
class App extends Component {


  render() {
    return (
          <div>
            <Switch>
              <Route exact path='/' component={MainDraw}/>
              <Route path='/home' component={HomePage}/>
              <Route path='/create' component={CreatePools}/>
            </Switch>
          </div>

    );
  }
}

export default App;
