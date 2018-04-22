import React from 'react';
import shortid from 'shortid';

const TextTransform = (text = [], fontSize, fontSizeUpper) => (
  text.map(str => (
    <span
      className={`decred-ui-text-${str.case}`}
      key={shortid.generate()}
      style={{
        fontSize: str.case === 'upper' ? fontSizeUpper : fontSize,
      }}
    >
      {str.text}
    </span>
  ))
);
export default TextTransform;
