import React from 'react';
import PropTypes from 'prop-types';

import BoxShadow from '../../../shared/box-shadow';
import Color from '../../../shared/color';
import Logo from '../../../shared/logo';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

import './roundbutton.css';

const RoundButton = ({
  boxShadow,
  className,
  icon,
  iconColor,
  onClick,
  scale,
  style,
  theme,
}) => {
  const scaleValues = Scale(
    scale,
    {
      containerHeight: 50,
      logoHeight: 22,
    },
  );
  const themeValues = Theme(theme, 'button');
  const logo = Logo(
    Color(iconColor) || themeValues.accent1,
    Color(iconColor) || themeValues.accent2,
    scaleValues.logoHeight,
    icon,
  );
  const buttonStyle = {
    ...{
      boxShadow: BoxShadow(boxShadow),
      height: scaleValues.containerScale,
      width: scaleValues.containerScale,
    },
    ...style,
  };
  let classes = `decred-ui-button decred-ui-round-button ${themeValues.className}`;
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <button
      className={classes}
      onClick={onClick}
      style={buttonStyle}
    >
      {logo}
    </button>
  );
};

RoundButton.defaultProps = {
  boxShadow: true,
  className: null,
  icon: 'dcr',
  iconColor: null,
  onClick: null,
  scale: 1,
  style: {},
  theme: 'primaryNegative',
};

RoundButton.propTypes = {
  /** Add shadow */
  boxShadow: PropTypes.bool,
  /** Optional classes */
  className: PropTypes.string,
  /** Icon. Options: atomic, dcr, decrediton, guide, lightning, miner, politeia or voting */
  icon: PropTypes.string,
  /** Custom icon color. Overrides theme */
  iconColor: PropTypes.string,
  /** Gets called when the user clicks the button */
  onClick: PropTypes.func,
  /** The amount to scale the button from its default size */
  scale: PropTypes.number,
  /** Style */
  style: PropTypes.shape({}),
  /** Button color theme. Options: blueOnTurquoise, darkOnTurquoise, oneColorNegative,
  * oneColorPositive, primaryBlue, primaryNegative, primaryPositive, turquoiseOnBlue
  * or whiteOnBlue */
  theme: PropTypes.string,
};

export default RoundButton;
