import React from 'react';
import { NavLink } from 'react-router-dom';

const LinksHelper = links => (
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
          className="decred-ui-navbar-link"
          href={link.route}
          key={link.key || link.text}
          {...props}
        >
          { link.text }
        </a>
      );
    }
    return (
      <NavLink
        className="decred-ui-navbar-link"
        key={link.key || link.text}
        to={link.route}
      >
        { link.text }
      </NavLink>
    );
  })
);
export default LinksHelper;
