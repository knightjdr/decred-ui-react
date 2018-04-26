import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLinksHelper = links => (
  links.map((link) => {
    if (link.href) {
      return (
        <a
          className="decred-ui-navbar-menu-navlink"
          href={link.route}
          key={link.key || link.text}
          rel="noreferrer nofollow"
          target="_blank"
        >
          <li>
            { link.text }
          </li>
        </a>
      );
    }
    return (
      <NavLink
        className="decred-ui-navbar-menu-navlink"
        key={link.key || link.text}
        to={link.route}
      >
        <li>
          { link.text }
        </li>
      </NavLink>
    );
  })
);
export default MenuLinksHelper;
