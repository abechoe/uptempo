import React from 'react';

export default class extends React.Component {
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
      <form method="post" onSubmit={this.handleSubmit}>
        <fieldset>
          <h1>Create an Event</h1>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Start Time:
            <input name="event_start" type="datetime-local" onChange={this.handleInputChange} />
          </label>
          <label>
            End Time:
            <input name="event_end" type="datetime-local" onChange={this.handleInputChange} />
          </label>
          <label>
            Recurs
            <input name="recurs" type="checkbox" onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}