import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';
import expectExport from 'expect';

//this test fails refactor test and component
// describe('<Button />', () => {
//     it('Should call props.onClick when the button is clicked', () => {
//         const wrapper = shallow(<Button />);
//         wrapper.find('button').simulate('click');
//     });
// });


// 1.) Mock Implementations
//Still, there are cases where it's useful to go beyond the ability to 
//specify return values and full-on replace the implementation of a mock function. 
//This can be done with jest.fn or the mockImplementationOnce method on mock functions.
//2. pass in the props onClick to the component
//3.Use .toHaveBeenCalled() to ensure that a mock function got called.
describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<Button onClick = {onClick}/>);
        wrapper.find('button').simulate('click');
        expect (onClick).toHaveBeenCalled()
    });
});