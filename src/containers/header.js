import React, { Component  } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      selected:"Home"
    };
  } 
  menuItems=["Home","Container (Using Redux)","Hooks (Using Context)","Form 1","List"];
  menuRoutes=["/",  "/container1",            "/hookscontainer",      "/form1","/renderlist"];
  setCurrent=(val)=>{
    this.setState({selected: val});
  }

  render() {
      return(
      <div className='item detaildiv'>
        <ul className="choicebuttons">
          {
            this.menuItems.map((item, index) =>
            <li key={index}>
              <Link to={this.menuRoutes[index]} className={this.state.selected === item ? 'active' : 'dormant'} onClick={() => this.setCurrent(item)}>{item}</Link>
            </li>)
          }
        </ul>
      </div>
    );
  }
}

export default Header;
