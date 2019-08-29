import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RenderList extends Component {
  state = {
      items:
        [
          {id: 1, text: "text 1", num: 10},
          {id: 2, text: "text 2", num: 20},
          {id: 3, text: "text 3", num: 30 }
        ]
  }

  render() {
    return (
      <>
      {this.state.items.map(list_item =>
        <div className='item detaildiv vcentretext' key={list_item.id}>
          <Link to={{pathname:'/listitem/' + list_item.id, state:{list_item} }} >
            List Item {list_item.id}
          </Link>
        </div>
        )}
      </>
    )
  };
}

export default RenderList;
