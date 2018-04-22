import React from 'react';
import PropTypes from 'prop-types';

import Color from '../../../shared/color';
import Content from './header-helper-content';
import Logo from '../../../shared/logo';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

import './header.css';

const Header = ({
  children,
  icon,
  iconColor,
  iconOnly,
  scale,
  text,
  textColor,
  textOnly,
  textStyle,
  theme,
}) => {
  // scale icon, icon margin, text and border
  const scaleValues = Scale(
    scale,
    {
      logoHeight: 18,
      fontSize: 20,
      fontRatio: 0.78,
    },
  );
  const themeValues = Theme(theme, 'header');
  const logo = Logo(
    Color(iconColor) || themeValues.accent1,
    Color(iconColor) || themeValues.accent2,
    scaleValues.logoHeight,
    icon,
  );
  const content = Content(
    logo,
    text,
    iconOnly,
    textOnly,
    Color(textColor) || themeValues.text,
    scaleValues.fontSize,
    scaleValues.fontSizeUpper,
    children,
    textStyle,
  );
  return (
    <div className="decred-ui-header">
      {content}
    </div>
  );
};

Header.defaultProps = {
  children: null,
  icon: 'dcr',
  iconColor: null,
  iconOnly: false,
  scale: 1,
  text: [{ case: 'lower', text: 'de' }, { case: 'upper', text: 'cred' }],
  textColor: null,
  textOnly: false,
  textStyle: {},
  theme: 'primaryPositive',
};

Header.propTypes = {
  /** Child content */
  children: PropTypes.string,
  /** Icon. Options: atomic, dcr, decrediton, guide, lightning, miner, politeia or voting */
  icon: PropTypes.string,
  /** Custom icon color. Overrides theme */
  iconColor: PropTypes.string,
  /** Only display icon. iconOnly and textOnly cannot both be true */
  iconOnly: PropTypes.bool,
  /** The amount to scale the header from its default size */
  scale: PropTypes.number,
  /** Text to add to the button */
  text: PropTypes.arrayOf(PropTypes.shape({
    case: PropTypes.string,
    type: PropTypes.string,
  })),
  /** Custom text color. Overrides theme */
  textColor: PropTypes.string,
  /** Only display text. textOnly and iconOnly cannot both be true */
  textOnly: PropTypes.bool,
  /** Custom styling for text */
  textStyle: PropTypes.shape({}),
  /** Color theme. Options: blueOnTurquoise, darkOnTurquoise, oneColorNegative,
  * oneColorPositive, primaryBlue, primaryNegative, primaryPositive, turquoiseOnBlue
  * or whiteOnBlue */
  theme: PropTypes.string,
};

export default Header;
