import React from 'react';
import { shallow, mount } from 'enzyme';

import EventForm from 'components/EventForm';

describe('EventForm component tests', () => {
  it('renders an EventForm component', () => {
    const wrapper = shallow(<EventForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('EventForm submit tests', () => {
  let mockEvent;
  let mockInputValues;
  let mockCreatedEvent;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    mockInputValues = {
      name: 'Sunday Service',
      event_start: '2018-09-06T02:00',
      event_end: '2018-09-06T03:00',
      recurs: true,
      event_interval_join_attributes: {
        interval_attributes: {
          seconds: '30',
        },
      },
      _radiumStyleState: {},
    };

    mockCreatedEvent = {
      "name":"Sunday Service",
      "event_start":"2018-09-06 02:00:00 UTC",
      "event_end":"2018-09-06 03:00:00 UTC",
      "recurs":true,
      "interval":null,
      "tasks":[]
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        event: mockCreatedEvent,
      })
    }));
  });

  it('calls fetch with the supplied input values', () => {
    const wrapper = shallow(<EventForm />);
    const expectedFetchBody = {
      method: 'POST',
      body: JSON.stringify(mockInputValues),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    wrapper.setState(mockInputValues);
    wrapper.instance().handleSubmit(mockEvent);
    expect(global.fetch)
      .toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/events`, expectedFetchBody);
  });
});