import * as ACTION_TYPES from './action_types'

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  }
}

export const all = (val) => {
  return {
    type: ACTION_TYPES.ALL,
    value: !val
  }
}

export const user_input = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  }
}

export const alt_global_state = (val) => {
  return {
    type: ACTION_TYPES.ALTER_GLOBAL_STATE,
    val: val
  }
}

