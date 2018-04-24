import React from 'react';

import TextTransform from '../../../shared/text-transform';

const RectangularButtonContent = (
  logo,
  text,
  iconOnly,
  textOnly,
  textColor,
  fontSize,
  fontSizeUpper,
  children,
) => {
  // determine if icon and/or text should be shown and set text margin
  let showIcon = true;
  let showText = true;
  let textClass = { marginLeft: 5 };
  if (iconOnly && textOnly) {
    showIcon = true;
    showText = true;
  } else if (iconOnly) {
    showText = false;
  } else if (textOnly) {
    showIcon = false;
    textClass = {};
  }
  // create icon element
  const iconElement = showIcon ?
    (
      <div className="decred-ui-rectangular-button-icon">
        {logo}
      </div>
    )
    :
    null;
  // apply custom text color if specified
  if (textColor) {
    textClass.color = textColor;
  }
  // create text element
  let textElement = null;
  if (
    showText &&
    children
  ) {
    textElement = (
      <div
        className="decred-ui-rectangular-button-text"
        style={textClass}
      >
        {children}
      </div>
    );
  } else if (showText) {
    textElement = (
      <div
        className="decred-ui-rectangular-button-text"
        style={textClass}
      >
        { TextTransform(text, fontSize, fontSizeUpper) }
      </div>
    );
  }
  return (
    <div className="decred-ui-rectangular-button-content">
      {iconElement}
      {textElement}
    </div>
  );
};
export default RectangularButtonContent;
