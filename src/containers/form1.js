import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class Form1 extends Component {

  constructor(props) {
    super();
    //Initialise state
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => (
    this.setState({value: event.target.value})
  )

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.input_action_creator(event.target.name.value)
  }

  render() {
    return (
      <>
      <div className='item'>
        <form onSubmit={this.handleSubmit} className='submission-form'>
          <input autoFocus id="name" onChange={this.handleChange} type="text" />
          <button className='sendBtn' type="submit"> Submit </button>
        </form>
      </div>
      <div className='item'>
      {this.state.value?<span className='vhalflinehttext'>Local State:{this.state.value}</span>:''}
      <br/>
      {this.props.user_text?<span className='vhalflinehttext'>Application State:{this.props.user_text}</span>:''}
      </div>   
      </>
    )}
}

function mapStateToProps(state) {
  return {
    user_text: state.user_reducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    input_action_creator: (text) => dispatch(ACTIONS.user_input(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1);
