import Radium from 'radium';
import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if (this.props.name === 'event_interval_join_attributes') {
      const interval_attrs = {
        interval_attributes: {
          seconds: event.target.value,
        }
      }
      this.props.onChange({[this.props.name]: interval_attrs});
    } else {
      this.props.onChange({[this.props.name]: event.target.value});
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.title}:</label>
        <input type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleInputChange}
          style={styles.base}
        />
      </div>
    );
  }
}

const styles = {
  base: {
    display: 'block',
    margin: '2px 0 10px 0',
    borderRadius: '5px',
    padding: '1px',
    height: '20px',
  }
}

export default Radium(Input);