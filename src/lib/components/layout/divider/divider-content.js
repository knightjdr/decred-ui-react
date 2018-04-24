import React from 'react';

import TextTransform from '../../../shared/text-transform';

const DividerContent = (
  icon,
  text,
  iconOnly,
  textOnly,
  textColor,
  fontSize,
  fontSizeUpper,
  children,
  textStyle,
) => {
  // determine if icon and/or text should be shown and set text margin
  let showIcon = true;
  let showText = true;
  let textClass = {
    color: textColor,
    marginLeft: 6,
    marginTop: -2,
  };
  if (iconOnly && textOnly) {
    showIcon = true;
    showText = true;
  } else if (iconOnly) {
    showText = false;
  } else if (textOnly) {
    showIcon = false;
    textClass.marginLeft = 0;
  }
  // create icon element
  const iconElement = showIcon ?
    (
      <span className="decred-ui-divider-icon">
        {icon}
      </span>
    )
    :
    null;
  // add any custom text
  textClass = {
    ...textClass,
    ...textStyle,
  };
  // create text element
  let textElement = null;
  if (
    showText &&
    children
  ) {
    textElement = (
      <div
        className="decred-ui-divider-text"
        style={textClass}
      >
        {children}
      </div>
    );
  } else if (showText) {
    textElement = (
      <div
        className="decred-ui-divider-text"
        style={textClass}
      >
        { TextTransform(text, fontSize, fontSizeUpper) }
      </div>
    );
  }
  return (
    <div className="decred-ui-divider-content">
      {iconElement}
      {textElement}
    </div>
  );
};
export default DividerContent;
