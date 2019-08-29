import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  signalon: false,
}

const Reducer1 = (state = initialState, action) => {
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
      case ACTION_TYPES.ALL:
        return {
          ...state,
          signalon: action.value
        }
      default:
        return state
    }
}

export default Reducer1;
