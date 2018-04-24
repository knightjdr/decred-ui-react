/* eslint max-len: [off] */
import React from 'react';

const MiningContent = (
  blockColor,
  accent1,
  accent2,
  dim,
  duration,
) => {
  const width = dim * 1.1;
  const gStyle = {
    animationDuration: `${duration}s`,
  };
  return (
    <svg className="decred-ui-mining-svg" xmlns="http://www.w3.org/2000/svg" width={width} height={dim} viewBox="3 0 55 48">
      <g className="decred-ui-mining-pickaxe" style={gStyle}>
        <path fill={accent2} d="M43.896,17.517c0.458-0.866,0.458-1.901,0-2.768c-0.765-1.445-2.557-1.999-4.001-1.233l0,0C41.382,14.685,42.726,16.029,43.896,17.517z" />
        <path fill={accent2} d="M32.991,20.338l-23.13,23.11c-1.154,1.16-1.149,3.037,0.011,4.192c1.16,1.153,3.037,1.149,4.191-0.01L37.114,24.48L32.991,20.338z" />
        <path fill={accent1} d="M41.315,24.48l7.684,7.704c-0.009-5.326-1.812-10.494-5.122-14.667l0,0c-1.17-1.488-2.515-2.832-4.001-4.001l0,0c-4.159-3.283-9.309-5.061-14.605-5.042l0,0l7.724,7.664l0.939,1.06l-2,2.102l1.061,1.041l4.122,4.142l1.141,1.081l2-2.102L41.315,24.48z" />
      </g>
      <g className="decred-ui-mining-blocks" style={gStyle}>
        <rect fill={blockColor} x="51.194" y="42.911" transform="matrix(0.6192 0.7852 -0.7852 0.6192 55.779 -23.5726)" width="2" height="5.624" />
        <rect fill={blockColor} x="38.069" y="42.851" transform="matrix(0.6159 -0.7878 0.7878 0.6159 -20.6488 48.1631)" width="1.999" height="4.813" />
        <rect fill={blockColor} x="51.559" y="38.354" transform="matrix(0.8088 0.5881 -0.5881 0.8088 33.9183 -23.1469)" width="1.999" height="4.475" />
        <rect fill={blockColor} x="44.374" y="42.912" transform="matrix(0.7287 -0.6848 0.6848 0.7287 -19.0036 43.4761)" width="2.001" height="5.624" />
      </g>
    </svg>
  );
};
export default MiningContent;
