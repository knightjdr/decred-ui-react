import PropTypes from 'prop-types';
import React from 'react';

import Bars from './bars-content';
import MenuLinksHelper from './menu-links-helper';

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
            MenuLinksHelper(links)
          }
        </ul>
      </div>
    </button>
  </div>
);

MenuHelperContent.propTypes = {
  closeBackdrop: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    key: PropTypes.string,
    route: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  showMenu: PropTypes.func.isRequired,
  viewMenu: PropTypes.bool.isRequired,
};

export default MenuHelperContent;
