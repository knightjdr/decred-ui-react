import React from 'react';
import PropTypes from 'prop-types';

import Color from '../../../shared/color';
import Content from './divider-helper-content';
import Logo from '../../../shared/logo';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

import './divider.css';

const Divider = ({
  children,
  icon,
  iconColor,
  iconOnly,
  lineStyle,
  ratio,
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
      fontRatio: 0.78, // ratio of uppercase font to lower
    },
  );
  const themeValues = Theme(theme, 'divider');
  // set the ratio of the right line to the left
  const dividerLineRightStyle = {
    ...{
      flex: ratio,
    },
    lineStyle,
  };
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
    <div className="decred-ui-divider">
      <span
        className="decred-ui-divider-left"
        style={lineStyle}
      />
      {content}
      <span
        className="decred-ui-divider-right"
        style={dividerLineRightStyle}
      />
    </div>
  );
};

Divider.defaultProps = {
  children: null,
  icon: 'dcr',
  iconColor: null,
  iconOnly: false,
  lineStyle: {},
  ratio: 1,
  scale: 1,
  text: [{ case: 'lower', text: 'de' }, { case: 'upper', text: 'cred' }],
  textColor: null,
  textOnly: false,
  textStyle: {},
  theme: 'primaryPositive',
};

Divider.propTypes = {
  /** Child content */
  children: PropTypes.string,
  /** Icon. Options: atomic, dcr, decrediton, guide, lightning, miner, politeia or voting */
  icon: PropTypes.string,
  /** Custom icon color. Overrides theme */
  iconColor: PropTypes.string,
  /** Only display icon. iconOnly and textOnly cannot both be true */
  iconOnly: PropTypes.bool,
  /** Line style */
  lineStyle: PropTypes.shape({}),
  /** The scale of the right border relative to the left */
  ratio: PropTypes.number,
  /** The amount to scale the divider from its default size */
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

export default Divider;
