import Radium from 'radium';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type={this.props.type}
        style={styles.base}
      >
        {this.props.title}
      </button>
    );
  }
}

const styles = {
  base: {
    height: '30px',
    width: '60px',
    borderRadius: '5px',
    ':hover': {
      border: '1px solid #19d642',
      background: '#29a043',
      color: '#fff',
    },
  },
}

export default Radium(Button);