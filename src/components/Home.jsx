import Radium from 'radium';
import React from 'react';

let Link = require('react-router-dom').Link;
Link = Radium(Link);

class Home extends React.Component {
  render() {
    return (
      <ul style={styles.base}>
        <li style={styles.li}>
          <Link to="/create" style={styles.a}>Create an Event</Link>
        </li>
      </ul>
    );
  }
}

const styles = {
  base: {
    font: '20px Helvetica, sans-serif',
  },

  li: {
    listStyle: 'none',
  },

  a: {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    }
  }
}

export default Radium(Home);