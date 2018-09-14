import React from 'react';
import { shallow } from 'enzyme';

import Home from 'components/Home';

describe('Home component tests', () => {
  it('renders the Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});