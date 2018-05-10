import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import Keypad from './Keypad'
import Key from './Key'
import LCDScreen from './LCDScreen'
import LockIndicator from './LockIndicator'

test('App mounts correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.hotelSafe').length).toBe(1)
})

test('App has a Keypad', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Keypad).length).toBe(1)
})

test('App has an LCDScreen', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(LCDScreen).length).toBe(1)
})

test('App has a LockIndicator', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(LockIndicator).length).toBe(1)
})

test('mounted Keypad has 12 keys', () => {
  const wrapper = mount(<App />)
  const keypad = wrapper.find(Keypad)
  expect(keypad.find(Key).length).toBe(12)
})

test('key values match expected', () => {
  const wrapper = mount(<App />)
  const keypad = wrapper.find(Keypad)
  expect(keypad.childAt(0).props().value).toEqual('1')
  expect(keypad.childAt(9).props().value).toEqual('CLR')
  expect(keypad.childAt(10).props().value).toEqual('0')
  expect(keypad.childAt(11).props().value).toEqual('⇨')
})
