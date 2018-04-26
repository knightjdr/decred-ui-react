import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Color from '../../../shared/color';
import LinksHelper from './links-helper';
import Logo from '../../../shared/logo';
import Menu from './menu-container';
import Theme from '../../../shared/theme';

import './navbar.css';

const NavbarHelperContent = ({
  background,
  boxShadow,
  fixed,
  icon,
  iconColor,
  links,
  smallScreen,
  style,
  theme,
}) => {
  const className = background ? 'decred-ui-navbar-default' : 'decred-ui-navbar-transparent';
  const linksElement = smallScreen ?
    <Menu links={links} />
    :
    LinksHelper(links);
  const themeValues = Theme(theme, 'navbar');
  const logo = Logo(
    Color(iconColor) || themeValues.accent1,
    Color(iconColor) || themeValues.accent2,
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

NavbarHelperContent.defaultProps = {
  iconColor: null,
};

NavbarHelperContent.propTypes = {
  background: PropTypes.bool.isRequired,
  boxShadow: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    key: PropTypes.string,
    route: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  smallScreen: PropTypes.bool.isRequired,
  style: PropTypes.shape({}).isRequired,
  theme: PropTypes.string.isRequired,
};

export default NavbarHelperContent;
