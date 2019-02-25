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
              <Route exact path='https://namidad.github.io/playarena-puchar/' component={MainDraw}/>
              <Route path='https://namidad.github.io/playarena-puchar/home' component={HomePage}/>
              <Route path='https://namidad.github.io/playarena-puchar/create' component={CreatePools}/>
              <Route path='https://namidad.github.io/playarena-puchar/wroclaw' component={MainDraw}/>
            </Switch>
          </div>

    );
  }
}

export default App;
