import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLinksHelper = links => (
  links.map((link) => {
    const props = link.newTab ?
      {
        rel: 'noreferrer nofollow',
        target: '_blank',
      }
      :
      {};
    if (link.href) {
      return (
        <a
          className="decred-ui-navbar-menu-navlink"
          href={link.route}
          key={link.key || link.text}
          {...props}
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
