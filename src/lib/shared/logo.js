/* eslint max-len: [off] */
import shortid from 'shortid';
import React from 'react';

import DecimalAdjust from './decimal-adjust';

const Logo = (
  color1,
  color2,
  height,
  icon = 'dcr',
) => {
  let width;
  switch (icon) {
    case 'atomic':
      width = DecimalAdjust(height * 1.7);
      return (
        <svg id={`#atomic-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 30">
          <ellipse fill={color2} cx="24.874" cy="14.686" rx="2.186" ry="2.186" />
          <rect fill={color2} y="13.055" width="3.262" height="3.262" />
          <path fill={color2} d="M47.49,12.518l1.255,2.15L50,16.854h-5.021l1.256-2.186L47.49,12.518z" />
          <rect x="5.432" y="14.13" fill={color2} width="14.229" height="1.111" />
          <rect x="29.811" y="14.13" fill={color2} width="13.621" height="1.111" />
          <path fill="none" stroke={color1} strokeMiterlimit="10" d="M38.995,5.305c-0.093-1.196-0.601-2.325-1.435-3.188C34.049-1.397,25.52,1.435,18.53,8.423c-5.162,5.162-8.029,11.111-7.813,15.305" />
          <path fill="none" stroke={color1} strokeMiterlimit="10" d="M12.186,27.454c3.514,3.514,12.008,0.682,18.996-6.343c3.514-3.513,5.985-7.419,7.133-10.861" />
          <path fill="none" stroke={color1} strokeMiterlimit="10" d="M10.86,4.695c-0.896,4.192,2.042,10.788,7.67,16.415c6.99,6.988,15.519,9.82,18.996,6.344c3.478-3.477,0.682-12.006-6.344-18.995C24.803,2.007,17.098-0.896,13.19,1.362" />
          <ellipse fill={color2} cx="13.189" cy="1.326" rx="1.326" ry="1.326" />
          <ellipse fill={color2} cx="38.312" cy="10.286" rx="1.326" ry="1.326" />
          <ellipse fill={color2} cx="10.681" cy="23.726" rx="1.326" ry="1.326" />
        </svg>
      );
    case 'guide':
      width = DecimalAdjust(height * 0.87);
      return (
        <svg id={`#guide-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15.3 17.5">
          <path fill={color1} d="M0.016,1.204L0.016,1.204C0.015,1.213,0.015,1.221,0.014,1.229C0.013,1.24,0.008,1.251,0.008,1.261C0.006,1.281,0,1.302,0,1.321v8.285v6.567c0,0.722,0.602,1.326,1.322,1.326h13.979v-15.3H6.558v6.543l-1.64-1.093L3.279,8.742V2.199H1.322c-0.058,0-0.114-0.006-0.17-0.014c-0.016,0.001-0.032,0-0.049,0C0.538,2.186,0.072,1.755,0.016,1.204z" />
          <path fill={color2} d="M3.279,2.199v6.543l1.639-1.093l1.641,1.093V2.199h8.742h0.012l-1.094-2.187h-1.311H1.322c-0.018,0-0.035-0.001-0.053,0C1.215,0.005,1.16,0,1.103,0C0.499,0,0.011,0.488,0.011,1.092c0,0.038,0.002,0.075,0.005,0.111c0.056,0.552,0.521,0.981,1.087,0.981c0.017,0,0.033,0.002,0.049,0.001c0.056,0.008,0.112,0.014,0.17,0.014H3.279z" />
        </svg>
      );
    case 'decrediton':
      width = DecimalAdjust(height * 1.2);
      return (
        <svg id={`#decrediton-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 17.5 15">
          <path fill={color2} d="M1.5,2.499h13.498V1.5c0-0.825-0.676-1.5-1.5-1.5H1.5C0.76,0,0.141,0.542,0.021,1.25C0.141,1.956,0.76,2.499,1.5,2.499z" />
          <path fill={color1} d="M16,2.499h-1h-0.002H1.5c-0.74,0-1.359-0.542-1.479-1.249l0,0H0.02C0.018,1.268,0.016,1.286,0.013,1.304c-0.001,0.005-0.001,0.01-0.001,0.015C0.01,1.334,0.007,1.35,0.006,1.366c0,0.01-0.002,0.02-0.002,0.029C0.002,1.407,0.002,1.419,0.001,1.431C0,1.454,0,1.477,0,1.5v2.499v6.976v2.498c0,0.826,0.674,1.5,1.5,1.5H16c0.824,0,1.5-0.674,1.5-1.5v-1.609c-1.727,0-3.126-1.4-3.126-3.125c0-1.726,1.399-3.125,3.126-3.125V3.999C17.5,3.174,16.824,2.499,16,2.499z" />
          <path fill={color2} d="M14.374,8.737c0,1.727,1.399,3.125,3.126,3.125v-0.08v-1.25V6.862v-1.25C15.773,5.612,14.374,7.011,14.374,8.737z" />
        </svg>
      );
    case 'lightning':
      width = DecimalAdjust(height * 1.25);
      return (
        <svg id={`#lightning-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 63.7 50.9">
          <polygon fill={color1} stroke={color1} strokeMiterlimit="10" points="49.012,0.989 28.43,0.988 14.709,28.432 28.43,28.432 21.57,49.014 49.012,21.572 34.961,21.572" />
          <circle fill={color2} opacity="0.6" cx="1.708" cy="1.708" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="1.708" cy="13.57" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="1.708" cy="25.433" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="1.708" cy="37.293" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="1.708" cy="49.154" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="13.569" cy="1.708" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="13.569" cy="13.57" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="13.569" cy="25.433" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="13.569" cy="37.293" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="13.569" cy="49.154" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="25.43" cy="1.708" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="25.43" cy="13.57" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="25.43" cy="25.433" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="25.43" cy="37.293" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="25.43" cy="49.154" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="37.291" cy="1.708" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="37.291" cy="13.57" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="37.291" cy="25.433" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="37.291" cy="37.293" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="37.291" cy="49.154" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="49.155" cy="1.708" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="49.155" cy="13.57" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="49.155" cy="25.433" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="49.155" cy="37.293" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="49.155" cy="49.154" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="61.019" cy="1.708" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="61.019" cy="13.57" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="61.019" cy="25.433" r="1.708" />
          <circle fill={color2} opacity="0.6" cx="61.019" cy="37.293" r="1.709" />
          <circle fill={color2} opacity="0.6" cx="61.019" cy="49.154" r="1.708" />
        </svg>
      );
    case 'miner':
      width = height;
      return (
        <svg id={`#miner-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
          <path fill={color2} d="M4.55,2.52h0a1.48,1.48,0,0,0-2,2A11.91,11.91,0,0,1,4.55,2.52Z" />
          <path fill={color2} d="M5.94,8,17.46,19.57a1.48,1.48,0,0,0,2.1-2.09L8,5.93Z" />
          <path fill={color1} d="M4.37,7.49l1,1.05L5.94,8,8,5.93l.53-.52-1-1.05L8,3.83,11.86,0h0a11.72,11.72,0,0,0-7.3,2.52h0a11.91,11.91,0,0,0-2,2h0A11.83,11.83,0,0,0,0,11.85L3.84,8Z" />
        </svg>
      );
    case 'politeia':
      width = DecimalAdjust(height * 1.3);
      return (
        <svg id={`#politeia-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 66.6 50">
          <path fill={color1} d="M49.957,0h-6.34v8.352h6.34c4.609,0.007,8.345,3.742,8.352,8.351c0.01,4.569-3.687,8.281-8.256,8.292c-0.032,0-0.064,0-0.096,0H33.315v16.703h8.352v-8.413h8.351c9.191-0.017,16.629-7.481,16.612-16.673C66.613,7.421,59.148-0.017,49.957,0z" />
          <circle fill={color2} cx="37.46" cy="4.146" r="4.146" />
          <path fill={color1} d="M33.254,8.424h-8.29v8.352h-8.352C7.438,16.776,0,24.214,0,33.388S7.438,50,16.612,50h6.34v-8.291h-6.34C12,41.755,8.223,38.053,8.177,33.44s3.656-8.389,8.268-8.435c0.056,0,0.111,0,0.167,0h16.703V8.424H33.254z" />
          <path fill={color2} d="M29.169,41.65c-2.289,0.002-4.143,1.856-4.146,4.146l0,0c-0.032,2.289,1.797,4.171,4.086,4.204c2.29,0.033,4.171-1.797,4.204-4.086c0-0.039,0-0.078,0-0.117l0,0c0.019-2.271-1.807-4.127-4.077-4.146C29.215,41.65,29.192,41.65,29.169,41.65z" />
        </svg>
      );
    case 'voting':
      width = DecimalAdjust(height * 1.1);
      return (
        <svg id={`#voting-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 57 50">
          <path fill={color2} d="M4.02,49.842h44.619v-0.028l1.254,0.014l7.156-10.678H46.358v5.274h-9.951c-2.94-4.346-8.847-5.485-13.193-2.544c-1.003,0.678-1.866,1.542-2.545,2.544h-9.95V39.15H7.153L0,49.856L4.02,49.842z" />
          <path fill={color1} d="M20.688,44.476c2.94-4.346,8.847-5.485,13.193-2.545c1.003,0.679,1.867,1.542,2.545,2.545h9.95V0h-8.325v0.058c-0.003,5.243-4.256,9.491-9.5,9.488c-5.239-0.003-9.485-4.25-9.488-9.488V0h-8.339v44.476H20.688z M28.543,14.282c5.889,0.001,10.662,4.776,10.661,10.666c-0.001,5.889-4.776,10.662-10.666,10.66c-5.887-0.001-10.659-4.774-10.66-10.661c0.001-5.889,4.776-10.663,10.665-10.663V14.282z" />
          <path fill={color2} d="M28.541,14.242c5.91,0,10.7,4.791,10.7,10.701c0,5.909-4.791,10.7-10.7,10.7c-5.909,0-10.7-4.791-10.7-10.7C17.84,19.033,22.631,14.242,28.541,14.242L28.541,14.242z" />
        </svg>
      );
    default:
      width = DecimalAdjust(height * 1.3); // 1.3 is the ratio of the width to height
      return (
        <svg id={`#dcr-${shortid.generate()}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 360 278">
          <path fill={color2} d="M158.276,172.704h89.065c33.137,0,60-26.862,60-60c0-33.137-26.863-60-60-60H218.96l-60.685-52.68h89.064c62.244,0.002,112.703,50.463,112.699,112.708c-0.002,45.847-27.773,87.125-70.242,104.396l70.225,60.936h-80.4L158.276,172.704z" />
          <path fill={color1} d="M201.765,105.372h-89.064c-33.138,0-60,26.863-60,60c0,33.138,26.863,60,60,60h28.367l60.685,52.68h-89.052C50.455,278.05-0.003,227.59,0,165.345c0.001-45.848,27.775-87.124,70.244-104.396L0.02,0h80.399L201.765,105.372z" />
        </svg>
      );
  }
};
export default Logo;
