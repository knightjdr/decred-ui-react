import React from 'react';

const LoadingContent = (
  theme,
  dim,
  duration,
) => {
  const delay = 0.2 * duration; // delay 0.2s for each second;
  const dotStyle = {
    animationDuration: `${duration}s`,
    fill: theme,
  };
  const dotMiddleStyle = {
    ...dotStyle,
    ...{ animationDelay: `${delay}s` },
  };
  const dotRightStyle = {
    ...dotStyle,
    ...{ animationDelay: `${2 * delay}s` },
  };
  const dotSvgStyle = {
    height: dim,
    width: dim,
  };
  return ([
    <svg
      className="decred-ui-loading-svg"
      key="loading-left"
      style={dotSvgStyle}
    >
      <circle
        className="decred-ui-loading-dot-left"
        style={dotStyle}
      />
    </svg>,
    <svg
      className="decred-ui-loading-svg"
      key="loading-middle"
      style={dotSvgStyle}
    >
      <circle
        className="decred-ui-loading-dot-middle"
        style={dotMiddleStyle}
      />
    </svg>,
    <svg
      className="decred-ui-loading-svg"
      key="loading-right"
      style={dotSvgStyle}
    >
      <circle
        className="decred-ui-loading-dot-right"
        style={dotRightStyle}
      />
    </svg>,
  ]);
};
export default LoadingContent;
