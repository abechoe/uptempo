import Radium from 'radium';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledLink = Radium(Link);

class Home extends React.Component {
  render() {
    return (
      <ul style={styles.base}>
        <li style={styles.li}>
          <StyledLink to="/new" style={styles.a}>Create an Event</StyledLink>
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
    },
  },
}

export default Radium(Home);