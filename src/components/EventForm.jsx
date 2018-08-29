import Radium, { Style } from 'radium';
import React from 'react';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      event_start: '',
      event_end: '',
      recurs: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/events', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(function(response) {
      return response.json();
    }).then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} style={[styles.base]}>
        <fieldset style={[styles.fieldset]}>
          <h1>Create an Event</h1>
          <dl>
            <dt style={[styles.dt]}>
              <label htmlFor="name">Name:</label>
            </dt>
            <dd style={[styles.dd]}>
              <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} style={[styles.input]} />
            </dd>
            <dt style={[styles.dt]}>
              <label htmlFor="event_start">Start Time:</label>
            </dt>
            <dd style={[styles.dd]}>
              <input id="event_start" name="event_start" type="datetime-local" onChange={this.handleInputChange} style={[styles.input]} />
            </dd>
            <dt style={[styles.dt]}>
              <label htmlFor="event_end">End Time:</label>
            </dt>
            <dd style={[styles.dd]}>
              <input id="event_end" name="event_end" type="datetime-local" onChange={this.handleInputChange} style={styles.input} />
            </dd>
            <dt style={[styles.dt]}>
              <label htmlFor="recurs">Recurs</label>
            </dt>
            <dd style={[styles.dd]}>
              <input id="recurs" name="recurs" type="checkbox" onChange={this.handleInputChange} />
            </dd>
          </dl>
          <button type="submit" style={[styles.button]}>Submit</button>
        </fieldset>
      </form>
    );
  }
}

EventForm = Radium(EventForm);

const styles = {
  base: {
    width: '800px',
    margin: '0 auto',
    font: '12px Helvetica, sans-serif',
    background: '#2f723e',
    color: '#fff',
    borderRadius: '5px',
  },

  fieldset: {
    border: 'none',
  },

  dt: {
    padding: '0 0 2px 0',
  },

  dd: {
    display: 'inline-block',
    margin: '0 0 10px 0',
  },

  input: {
    margin: '0',
    borderRadius: '5px',
    padding: '1px',
    height: '20px',
  },

  button: {
    height: '30px',
    width: '60px',
    borderRadius: '5px',
    ':hover': {
      border: '1px solid #19d642',
      background: '#29a043',
      color: '#fff',
    },
  },
};