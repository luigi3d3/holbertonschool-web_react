import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header Cell" />);
    expect(wrapper.find('th[colSpan="2"]').length).toEqual(1);
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Header Cell" textSecondCell="Second Header Cell" />
    );
    expect(wrapper.find('th').length).toEqual(2);
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data Cell" textSecondCell="Data Cell 2" />);
    expect(wrapper.find('td').length).toEqual(2);
  });
});
