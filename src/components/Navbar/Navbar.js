import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SocialMediaIcons } from './SocialMediaIcons';
import './Navbar.css';
import { IconContext } from 'react-icons';


function Navbar() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu active' >        
          <ul className='nav-menu-items' >

            <li>
              <div className="profilePic">
                <img src={process.env.PUBLIC_URL + "/assets/profilePic.jpg"} />
              </div>
            </li>
            <li>
              <div className="myName">
                <h1>
                  Lasal Hettiarachchi
                </h1>
              </div>
            </li>
            <li>
              <div className="socialMediaIconsRow">
            {SocialMediaIcons.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <a href={item.URL}>
                    {item.icon}
                  </a>
                </div>
              );
            })}
            </div>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
