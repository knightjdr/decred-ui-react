import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../shared/logo';
import Menu from './menu-container';
import Theme from '../../../shared/theme';

import './navbar.css';

const NavbarHelperContent = ({
  background,
  boxShadow,
  fixed,
  icon,
  links,
  smallScreen,
  style,
  theme,
}) => {
  const className = background ? 'decred-ui-navbar-default' : 'decred-ui-navbar-transparent';
  const linksElement = smallScreen ?
    <Menu links={links} />
    :
    links.map(link => (
      <NavLink
        className="decred-ui-navbar-link"
        key={link.text}
        to={link.route}
      >
        { link.text }
      </NavLink>
    ));
  const themeValues = Theme(theme, 'navbar');
  const logo = Logo(
    themeValues.accent1,
    themeValues.accent2,
    25,
    icon,
  );
  const navBarStyle = {
    ...{
      boxShadow: boxShadow && background ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : null,
      position: fixed ? 'fixed' : 'absolute',
    },
    ...style,
  };
  let classes = `decred-ui-navbar ${themeValues.className}`;
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <div
      className={classes}
      style={navBarStyle}
    >
      <NavLink
        className="decred-ui-navbar-logo-link"
        to="/"
      >
        <div className="decred-ui-navbar-logo">
          {logo}
        </div>
      </NavLink>
      <div className="decred-ui-navbar-link-container">
        { linksElement }
      </div>
    </div>
  );
};

NavbarHelperContent.propTypes = {
  background: PropTypes.bool.isRequired,
  boxShadow: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  smallScreen: PropTypes.bool.isRequired,
  style: PropTypes.shape({}).isRequired,
  theme: PropTypes.string.isRequired,
};

export default NavbarHelperContent;
