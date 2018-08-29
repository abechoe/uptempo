import Radium, { Style } from 'radium';
import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      event_start: '',
      event_end: '',
      recurs: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(newState) {
    this.setState(newState);
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
          <Input type="text" id="name" name="name" title="Name" value={this.state.name} onChange={this.updateField} />
          <Input type="datetime-local" id="event_start" name="event_start" title="Start Time" onChange={this.updateField} />
          <Input type="datetime-local" id="event_end" name="event_end" title="End Time" onChange={this.updateField} />
          <Checkbox id="recurs" name="recurs" title="Recurs" onChange={this.updateField} />
          <Button type="submit" title="Submit" />
        </fieldset>
      </form>
    );
  }
}

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
};

export default Radium(EventForm);
