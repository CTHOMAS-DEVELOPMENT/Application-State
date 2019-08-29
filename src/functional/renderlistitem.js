import React from 'react'

const RenderListItem = props => (
  <>
    <div className='item vcentretext'>
      <span><b>Name:</b>{props.location.state.list_item.text}</span>
    </div>
    <div className='item vcentretext'>
      <span><b>Value:</b>{props.location.state.list_item.num}</span>
    </div>
    </>
);

export default RenderListItem;
