import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../shared/logo';
import Menu from './menu-container';

import './navbar.css';

const NavbarHelperContent = ({
  background,
  fixed,
  links,
  smallScreen,
  style,
}) => {
  const className = background ? 'Navbar-default' : 'Navbar-transparent';
  const linksElement = smallScreen ?
    <Menu links={links} />
    :
    links.map(link => (
      <NavLink
        className="Navbar-link"
        key={link.text}
        to={link.route}
      >
        { link.text }
      </NavLink>
    ));
  const logo = Logo(
    '#2971ff',
    '#2ed6A1',
    25,
    'dcr',
  );
  const navBarStyle = {
    ...{
      position: fixed ? 'fixed' : 'absolute',
    },
    ...style,
  };
  return (
    <div
      className={`Navbar ${className}`}
      style={navBarStyle}
    >
      <NavLink
        className="Navbar-logo-link"
        to="/"
      >
        <div className="Navbar-logo">
          {logo}
        </div>
      </NavLink>
      <div className="Navbar-link-container">
        { linksElement }
      </div>
    </div>
  );
};

NavbarHelperContent.propTypes = {
  background: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  smallScreen: PropTypes.bool.isRequired,
  style: PropTypes.shape({}).isRequired,
};

export default NavbarHelperContent;
