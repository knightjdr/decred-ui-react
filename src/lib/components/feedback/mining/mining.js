import React from 'react';
import PropTypes from 'prop-types';

import Color from '../../../shared/color';
import Content from './mining-helper-content';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

import './mining.css';

const Mining = ({
  blockColor,
  duration,
  pickAxeColor,
  scale,
  theme,
}) => {
  const scaleValues = Scale(
    scale,
    {
      containerHeight: 40,
    },
  );
  const themeValues = Theme(theme, 'mining');
  const content = Content(
    blockColor ? Color(blockColor) : themeValues.primary,
    pickAxeColor ? Color(pickAxeColor) : themeValues.accent1,
    pickAxeColor ? Color(pickAxeColor) : themeValues.accent2,
    scaleValues.containerScale,
    duration,
  );
  return (
    <div className="decred-ui-mining-container">
      {content}
    </div>
  );
};

Mining.defaultProps = {
  blockColor: null,
  duration: 1.6,
  pickAxeColor: null,
  scale: 1,
  theme: 'primaryNegative',
};

Mining.propTypes = {
  /** Block color */
  blockColor: PropTypes.string,
  /** Animation duration in seconds */
  duration: PropTypes.number,
  /** Pickaxe color */
  pickAxeColor: PropTypes.string,
  /** The amount to scale the loading dots from the default size */
  scale: PropTypes.number,
  /** Button color theme. Options: blueOnTurquoise, darkOnTurquoise, oneColorNegative,
  * oneColorPositive, primaryBlue, primaryNegative, primaryPositive, turquoiseOnBlue
  * or whiteOnBlue */
  theme: PropTypes.string,
};

export default Mining;
