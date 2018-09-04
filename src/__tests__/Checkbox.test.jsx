import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../components/Checkbox';

describe('Checkbox component tests', function() {
  it('renders a Checkbox component', function() {
    const wrapper = shallow(<Checkbox id="recurs" name="recurs" />);
    expect(wrapper).toMatchSnapshot();
  })
});