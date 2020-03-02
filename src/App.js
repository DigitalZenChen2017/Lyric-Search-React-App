import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
