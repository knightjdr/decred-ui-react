import React from 'react';
import { NavLink } from 'react-router-dom';

const IconLinkHelper = (icon, link) => {
  const props = link.newTab ?
    {
      rel: 'noreferrer nofollow',
      target: '_blank',
    }
    :
    {};
  return (
    link.href ?
      (
        <a
          className="decred-ui-navbar-logo-link"
          href={link.route}
          {...props}
        >
          <div className="decred-ui-navbar-logo">
            {icon}
          </div>
        </a>
      )
      :
      (
        <NavLink
          className="decred-ui-navbar-logo-link"
          to={link.route}
        >
          <div className="decred-ui-navbar-logo">
            {icon}
          </div>
        </NavLink>
      )
  );
};
export default IconLinkHelper;
