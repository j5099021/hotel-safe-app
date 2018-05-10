import React from 'react'
import { shallow } from 'enzyme'
import LCDScreen from './LCDScreen'

test('renders LCDScreen', () => {
  const wrapper = shallow(<LCDScreen outputText="8888" />)
  expect(wrapper.find('.LCDScreen__output').text()).toEqual('8888')
})
