import '../styles/navbar.css';
import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <img src={logo} alt={logo} />
      <ul className='links'>
        <li>
          <a href='#' className='link-item'>
            Home
          </a>
        </li>
        <li>
          <a href='#' className='link-item'>
            New
          </a>
        </li>
        <li>
          <a href='#' className='link-item'>
            Popular
          </a>
        </li>
        <li>
          <a href='#' className='link-item'>
            Trending
          </a>
        </li>
        <li>
          <a href='#' className='link-item'>
            Category
          </a>
        </li>
      </ul>
      <div className='menu-icon'>
        <img src={menuIcon} alt='' onClick={() => setShowMenu(!showMenu)} />
      </div>
      {showMenu && (
        <Sidebar
          handleCloseMenu={handleCloseMenu}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
