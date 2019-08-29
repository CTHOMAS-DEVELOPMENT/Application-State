import Reducer1 from './reducer1'
import UserReducer from './user_reducer';
import { HooksReducer } from './hooks_reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  reducer1: Reducer1,
  user_reducer: UserReducer,
  hooks_reducer: HooksReducer
})

export default rootReducer;
