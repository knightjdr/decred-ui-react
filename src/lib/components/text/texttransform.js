import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';

import Color from '../../shared/color';
import DecimalAdjust from '../../shared/decimal-adjust';

const TextTransform = ({
  children,
  color,
  size,
  ratio,
}) => {
  const sizeUpper = DecimalAdjust(ratio * size);
  return (
    <span className="decred-ui-text-transform">
      {
        children.map(str => (
          <span
            className={`decred-ui-text-${str.case}`}
            key={shortid.generate()}
            style={{
              color: color ? Color(color) : 'inherit',
              fontFamily: 'SourceSansPro, sans-serif',
              fontSize: str.case === 'upper' ? sizeUpper : size,
            }}
          >
            {str.text}
          </span>
        ))
      }
    </span>
  );
};

TextTransform.defaultProps = {
  children: [{ case: 'lower', text: 'de' }, { case: 'upper', text: 'cred' }],
  color: null,
  size: 18,
  ratio: 0.78,
};

TextTransform.propTypes = {
  /** Text array */
  children: PropTypes.arrayOf(PropTypes.shape({
    case: PropTypes.string,
    text: PropTypes.string,
  })),
  /** Custom font color */
  color: PropTypes.string,
  /** Font size for lower and mixed case text */
  size: PropTypes.number,
  /** Size ratio for upper to lower case text */
  ratio: PropTypes.number,
};

export default TextTransform;
