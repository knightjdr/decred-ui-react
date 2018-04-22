import React from 'react';

const FlipPanelContent = (
  front,
  back,
  backgroundColor,
  textColor,
  dim,
  boxShadow,
  style,
) => {
  const panelStyle = {
    ...{
      backgroundColor,
      boxShadow,
      color: textColor,
      height: dim,
      width: dim,
    },
    ...style,
  };
  return (
    <div
      className="decred-ui-flip-panel-container"
      style={panelStyle}
    >
      <div className="decred-ui-flip-panel-side decred-ui-flip-panel-front">
        {front}
      </div>
      <div className="decred-ui-flip-panel-side decred-ui-flip-panel-back">
        {back}
      </div>
    </div>
  );
};
export default FlipPanelContent;
