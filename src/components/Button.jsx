import Radium from 'radium';
import React from 'react';
import colors from 'modules/colors';

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
      border: `1px solid ${colors.BUTTON_HOVER_BORDER_GREEN}`,
      background: colors.BUTTON_HOVER_GREEN,
      color: '#fff',
    },
  },
}

export default Radium(Button);