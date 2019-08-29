import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  signalon: false,
  total: 0
}

export const HooksReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          signalon: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          signalon: false
        }
      case ACTION_TYPES.ALTER_GLOBAL_STATE:
        return {
          ...state,
          total: state.total + parseInt(action.val)
        }
              
      default:
        return state
    }
}
