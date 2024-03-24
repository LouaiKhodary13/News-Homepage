import React from 'react';
import closeIcon from '../assets/images/icon-menu-close.svg';
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  handleCloseMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props): JSX.Element => {
  return (
    <div className='sidebar'>
      <ul className='menu-links'>
        <li>
          <a href='#' className='link-items'>
            Home
          </a>
        </li>
        <li>
          <a href='#' className='link-items'>
            New
          </a>
        </li>
        <li>
          <a href='#' className='link-items'>
            Popular
          </a>
        </li>
        <li>
          <a href='#' className='link-items'>
            Trending
          </a>
        </li>
        <li>
          <a href='#' className='link-items'>
            Category
          </a>
        </li>
      </ul>
      <button type='button' onClick={props.handleCloseMenu}>
        <img src={closeIcon} alt={closeIcon} className='close-icon' />
      </button>
    </div>
  );
};

export default Sidebar;
