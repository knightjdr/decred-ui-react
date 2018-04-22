import React from 'react';

import TextTransform from '../../../shared/text-transform';

const HeaderContent = (
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
  // create icon element, span need for padding when iconOnly = true
  const iconElement = showIcon ?
    (
      <span className="decred-ui-header-icon">
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
        className="decred-ui-header-text"
        style={textClass}
      >
        {children}
      </div>
    );
  } else if (showText) {
    textElement = (
      <div
        className="decred-ui-header-text"
        style={textClass}
      >
        { TextTransform(text, fontSize, fontSizeUpper) }
      </div>
    );
  }
  return (
    <div className="decred-ui-header-content">
      {iconElement}
      {textElement}
    </div>
  );
};
export default HeaderContent;
