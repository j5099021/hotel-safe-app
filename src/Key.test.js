import React from 'react'
import { shallow } from 'enzyme'
import Key from './Key'

test('renders Key button', () => {
  const wrapper = shallow(<Key value="TEST" onClick={() => {}} extraClasses="" />)
  expect(wrapper.find('.keypad__key button').length).toBe(1)
})

test('renders button value', () => {
  const wrapper = shallow(<Key value="TEST" onClick={() => {}} extraClasses="" />)
  expect(wrapper.find('.keypad__key button').text()).toEqual('TEST')
})

test('renders extra classes on button', () => {
  const extraClasses = 'test1 test2'
  const wrapper = shallow(<Key value="TEST" onClick={() => {}} extraClasses={extraClasses} />)
  expect(wrapper.find('.keypad__key button').hasClass('test1')).toBe(true)
  expect(wrapper.find('.keypad__key button').hasClass('test2')).toBe(true)
})
