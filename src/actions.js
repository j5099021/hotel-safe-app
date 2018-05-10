/*
 * action types
 */

export const UPDATE_SAFE = 'UPDATE_SAFE'


/*
 * action creators
 */

export function updateSafe(isLocked) {
  return { type: UPDATE_SAFE, isLocked }
}

