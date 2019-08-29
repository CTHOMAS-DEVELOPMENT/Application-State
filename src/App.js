import React, { useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import {alt_global_state} from './store/actions/actions';
import {HooksReducer, initialState} from './store/reducers/hooks_reducer';

const App = () => {
  const [valueGlobal, dispatchActionsGlobal] = useReducer(HooksReducer, initialState)

  const alterGlobalValue = (val) => {
    dispatchActionsGlobal(alt_global_state(val.formvalue) )
  }
  return(
    <>
      <Context.Provider
                  value={{
                    valueGlobalState: valueGlobal,
                    altGlobalValue: (val) => alterGlobalValue(val)
                  }}>
      <Routes />
      </Context.Provider>
    </>
  )
}

export default App;
