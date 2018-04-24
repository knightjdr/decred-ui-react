import React from 'react';
import PropTypes from 'prop-types';

import Color from '../../../shared/color';
import Content from './loading-content';
import Scale from '../../../shared/scale';

import './loading.css';

const Loading = ({
  color,
  duration,
  scale,
}) => {
  const scaleValues = Scale(
    scale,
    {
      containerHeight: 20,
    },
  );
  const content = Content(
    Color(color),
    scaleValues.containerScale,
    duration,
  );
  return (
    <div className="decred-ui-loading-container">
      {content}
    </div>
  );
};

Loading.defaultProps = {
  color: 'blue',
  duration: 1.5,
  scale: 1,
};

Loading.propTypes = {
  /** Dot color */
  color: PropTypes.string,
  /** Animation duration in seconds */
  duration: PropTypes.number,
  /** The amount to scale the loading dots from the default size */
  scale: PropTypes.number,
};

export default Loading;
