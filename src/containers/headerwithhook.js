import React, { useState  } from 'react';
import { Link } from 'react-router-dom';

const Header = ()=> {
  const [selected, setSelected] = useState("Home");
  const menuItems=["Home","Container (Using Redux)","Hooks (Using Context)","Form 1","List"];
  const menuRoutes=["/",  "/container1",            "/hookscontainer",      "/form1","/renderlist"];
  const setCurrent=(val)=>{
    setSelected(val);
  }
      return(
      <div className='item detaildiv'>
        <ul className="choicebuttons">
          {
            menuItems.map((item, index) =>
            <li key={index}>
              <Link to={menuRoutes[index]} className={selected === item ? 'active' : 'dormant'} onClick={() => setCurrent(item)}>{item}</Link>
            </li>)
          }
        </ul>
      </div>
    );
}

export default Header;
