import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Button';

describe('Button component tests', () => {
  it('renders a Button component', () => {
    const wrapper = shallow(<Button type="submit" title="Submit" />);
    expect(wrapper).toMatchSnapshot();
  });
});