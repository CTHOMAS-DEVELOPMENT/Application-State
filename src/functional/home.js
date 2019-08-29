import React from 'react'
const Home = props => (
  <>
    <div className='item detaildiv'>
    <b>Container (Using Redux)</b>
    <p>Controls one prop (signalon) using Redux.
      The signalon prop is stored in the Redux store and alters the ui depending if it is set to true or false.
      Three methods are mapped to mapDispatchToProps. One contains a single parammeter which is used by the reducer to toggle it's value.
    </p>
    </div>
    <div className='item detaildiv'>
    <b>Hooks (Using Context)</b>
    <p>Uses the React Context instead of Redux to maintain application state. This hooks container can reference the Context provider.
      Illustrates the control of local state and the application state (Held in the context object)
    </p>
    </div>
    <div className='item detaildiv'>
    <b>Form 1</b>
    <p>Uses the 'Redux side' of the application. Maintains one text variable in Redux.
      Shows a method to refer to one of the two reducers open to the 'Redux side' of the application.
    </p>
    </div>
    <div className='item detaildiv'>
    <b>List</b>
    <p>
      Illustrates routing for a small list of items with id's. Useful for update of records in applications.
    </p>
    </div>
</>
);

export default Home;
