import React, { useState, useContext } from 'react';
import Context from '../utils/context';

const HooksContainer = () => {
  const context = useContext(Context)

  const [value, setValue] = useState(0)
  const [formvalue, setFormValue] = useState('')

  const handleIncChange = (val)=>{
    setValue(value + val );
  }
  const handleChange = (event) => {
    let v = parseInt(event.target.value );
    if (isNaN(v)) 
    {
      setFormValue(0)
    }
    else
    {
      setFormValue(parseInt(v))
    }
  }
  const handleGlobalChange = (val) => {
    val.formvalue+=value;
    setValue(0);
    setFormValue('');
    context.altGlobalValue(val);
  }

    return(
      <>
      <div className='item'>
        <form className='submission-form'>
        <button className="sendBtn" onClick={(e) => {e.preventDefault();handleIncChange(1)}}> Add to Local </button>
        <button className="sendBtn" onClick={(e) => {e.preventDefault();handleIncChange(-1)}}> Subtract from Local </button>
        </form>
      </div>
      <div className='item vcentretext'>
      Local State: {value}
      </div>
      <div className='item'>
      <form className='submission-form'>
        <input autoFocus value={ formvalue } id="name" onChange={handleChange} type="number" />
        <button className="sendBtn" onClick={(e) => {e.preventDefault();handleGlobalChange({ formvalue })}}> Alter Global Value </button>
      </form>
      </div>
      <div className='item vcentretext'>
      Application State: {context.valueGlobalState.total}
      </div>
      </>
    )
}

export default HooksContainer;
