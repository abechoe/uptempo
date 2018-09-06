import Radium from 'radium';
import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onChange({[this.props.name]: event.target.checked})
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id} style={styles.base}>{this.props.title}</label>
        <input 
          type="checkbox"
          id={this.props.id}
          name={this.props.name}
          onChange={this.handleInputChange}
          style={[styles.base, styles.input]}
        />
      </div>
    );
  }
}

const styles = {
  base: {
    display: 'inline-block',
    marginBottom: '10px',
  },

  input: {
    marginLeft: '5px',
  },
}

export default Radium(Checkbox);