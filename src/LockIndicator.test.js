import React from 'react'
import { shallow } from 'enzyme'
import LockIndicator from './LockIndicator'

test('LockIndicator has locked class', () => {
  const wrapper = shallow(<LockIndicator isLocked />)
  expect(wrapper.find('.lock').hasClass('locked')).toEqual(true)
})

test('LockIndicator has unlocked class', () => {
  const wrapper = shallow(<LockIndicator />)
  expect(wrapper.find('.lock').hasClass('unlocked')).toEqual(true)
})
