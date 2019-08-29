import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class Container1 extends Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      signalon:false
    };
}
  render() {
    return (
      <>
      <div className='item'>
        <form className='submission-form'>
        {this.props.signalon
        ? 
        <button className='sendBtn' onClick={(e) => {e.preventDefault();this.props.action_false()}}>Make False</button>
        :
        <button className='sendBtn' onClick={(e) => {e.preventDefault();this.props.action_true()}}>Make True</button>
        }
        <button className='sendBtn' onClick={(e) => {e.preventDefault();this.props.action_toggle(this.props.signalon)}}>Toggle Boolean</button>
        </form>
      </div>
      <div className='item vcentretext'>
        {this.props.signalon
          ? <span>Boolean is true</span>
          : <span>Boolean is false</span>
        }
      </div>
      </>
    )}
}

function mapStateToProps(state) {
  return {
    signalon: state.reducer1.signalon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action_true: () => dispatch(ACTIONS.success()),
    action_false: () => dispatch(ACTIONS.failure()),
    action_toggle: (val) => dispatch(ACTIONS.all(val))
       
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
