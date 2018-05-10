import React from 'react'
import { shallow } from 'enzyme'
import Keypad from './Keypad'
import Key from './Key'

test('renders 2 Keys', () => {
  const wrapper = shallow(
    <Keypad>
      <Key value="1" onClick={() => {}} extraClasses="" />
      <Key value="2" onClick={() => {}} extraClasses="" />
    </Keypad>,
  )
  expect(wrapper.find(Key).length).toBe(2)
})
