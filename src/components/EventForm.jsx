import Radium from 'radium';
import React from 'react';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import colors from 'modules/colors';

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
    fetch(`${process.env.REACT_APP_API_URL}/events`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    }).then((myJson) => {
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
    background: colors.BACKGROUND_GREEN,
    color: colors.WHITE,
    borderRadius: '5px',
  },

  fieldset: {
    border: 'none',
  },
};

export default Radium(EventForm);
