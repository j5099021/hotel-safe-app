import { combineReducers } from 'redux'
import {
  UPDATE_SAFE
} from './actions'


function hotelSafe(state = {}, action) {
  switch (action.type) {
    case UPDATE_SAFE:
       return Object.assign({}, state, {
            isLocked: action.isLocked
          })
    default:
      return state
  }
}

const updateSafeStatusApp = combineReducers({
  hotelSafe
})

export default updateSafeStatusApp