import Radium from 'radium';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import colors from 'modules/colors';
import EventForm from 'components/EventForm';
import Home from 'components/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={EventForm} />
        </div>
      </Router>
    );
  }
}

export default Radium(App);