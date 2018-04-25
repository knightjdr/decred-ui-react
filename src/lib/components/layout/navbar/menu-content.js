import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Bars from './bars-content';

import './menu.css';

const MenuHelperContent = ({
  links,
  closeBackdrop,
  showMenu,
  viewMenu,
}) => (
  <div className="decred-ui-navbar-menu-container">
    <button
      className="decred-ui-navbar-menu-button"
      onClick={showMenu}
    >
      {Bars()}
    </button>
    <button
      className="decred-ui-navbar-menu-backdrop"
      onClick={closeBackdrop}
      style={{
        pointerEvents: viewMenu ? 'auto' : 'none',
      }}
    >
      <div
        className={`decred-ui-navbar-menu ${viewMenu ? 'decred-ui-navbar-menu-show' : 'decred-ui-navbar-menu-hide'}`}
      >
        <ul>
          {
            links.map(link => (
              <NavLink
                className="decred-ui-navbar-menu-navlink"
                key={link.text}
                to={link.route}
              >
                <li>
                  {link.text}
                </li>
              </NavLink>
            ))
          }
        </ul>
      </div>
    </button>
  </div>
);

MenuHelperContent.propTypes = {
  closeBackdrop: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  showMenu: PropTypes.func.isRequired,
  viewMenu: PropTypes.bool.isRequired,
};

export default MenuHelperContent;
