import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

it('renders without crashing', () => {
	const wrapper = shallow(
		<Form />
	);
	expect(wrapper).toMatchSnapshot();
});

it('should validate errors', () => {

});