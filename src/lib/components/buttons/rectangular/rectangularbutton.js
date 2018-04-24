import React from 'react';
import PropTypes from 'prop-types';

import BoxShadow from '../../../shared/box-shadow';
import Color from '../../../shared/color';
import Content from './rectangularbutton-content';
import Logo from '../../../shared/logo';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

import '../buttons.css';
import './rectangularbutton.css';

const RectangularButton = ({
  boxShadow,
  children,
  className,
  icon,
  iconColor,
  iconOnly,
  onClick,
  scale,
  style,
  text,
  textColor,
  textOnly,
  theme,
}) => {
  const scaleValues = Scale(
    scale,
    {
      containerHeight: 40,
      fontSize: 22,
      fontRatio: 0.78,
      logoHeight: 21,
      paddingTB: 4,
      paddingRatio: 2.5,
    },
  );
  const buttonStyle = {
    ...{
      boxShadow: BoxShadow(boxShadow),
      fontSize: scaleValues.fontSize,
      height: scaleValues.containerScale,
      padding: `${scaleValues.paddingTB}px ${scaleValues.paddingLR}px`,
    },
    ...style,
  };
  const themeValues = Theme(theme, 'button');
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
  );
  let classes = `decred-ui-button decred-ui-rectangular-button ${themeValues.className}`;
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <button
      className={classes}
      onClick={onClick}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};

RectangularButton.defaultProps = {
  boxShadow: true,
  children: null,
  className: null,
  icon: 'dcr',
  iconColor: null,
  iconOnly: false,
  onClick: null,
  scale: 1,
  style: {},
  text: [{ case: 'lower', text: 'de' }, { case: 'upper', text: 'cred' }],
  textColor: null,
  textOnly: false,
  theme: 'primaryNegative',
};

RectangularButton.propTypes = {
  /** Add shadow */
  boxShadow: PropTypes.bool,
  /** Child content */
  children: PropTypes.string,
  /** Optional classes */
  className: PropTypes.string,
  /** Icon. Options: atomic, dcr, decrediton, guide, lightning, miner, politeia or voting */
  icon: PropTypes.string,
  /** Custom icon color. Overrides theme */
  iconColor: PropTypes.string,
  /** Only display icon. iconOnly and textOnly cannot both be true */
  iconOnly: PropTypes.bool,
  /** Gets called when the user clicks the button */
  onClick: PropTypes.func,
  /** The amount to scale the button from its default size. Scale is applied
   *  vertically and width will auto adjust to content */
  scale: PropTypes.number,
  /** Custom style */
  style: PropTypes.shape({}),
  /** Text to add to the button */
  text: PropTypes.arrayOf(PropTypes.shape({
    case: PropTypes.string,
    type: PropTypes.string,
  })),
  /** Custom text color. Overrides theme */
  textColor: PropTypes.string,
  /** Only display text. textOnly and iconOnly cannot both be true */
  textOnly: PropTypes.bool,
  /** Button color theme. Options: blueOnTurquoise, darkOnTurquoise, oneColorNegative,
  * oneColorPositive, primaryBlue, primaryNegative, primaryPositive, turquoiseOnBlue
  * or whiteOnBlue */
  theme: PropTypes.string,
};

export default RectangularButton;
