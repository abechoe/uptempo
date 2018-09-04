import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/Input';

describe('Input component tests', function() {
  it('renders an Input component', function() {
    const wrapper = shallow(<Input type="text" id="name" name="name" value="Bob" />)
    expect(wrapper).toMatchSnapshot();
  });
})