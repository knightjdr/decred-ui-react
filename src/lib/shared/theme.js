export const Themes = {
  blueOnTurquoise: {
    accent1: '#2971ff',
    accent2: '#2971ff',
    active: '#26c08f',
    focus: '#95eacf',
    primary: '#2ed6a1',
    text: '#2971ff',
  },
  darkOnTurquoise: {
    accent1: '#0c1e3e',
    accent2: '#0c1e3e',
    active: '#26c08f',
    focus: '#95eacf',
    primary: '#2ed6a1',
    text: '#0c1e3e',
  },
  oneColorNegative: {
    accent1: '#ffffff',
    accent2: '#ffffff',
    active: '#040a15',
    focus: '#2154ab',
    primary: '#0c1e3e',
    text: '#ffffff',
  },
  oneColorPositive: {
    accent1: '#0c1e3e',
    accent2: '#0c1e3e',
    active: '#ffffff',
    focus: '#e6e6e6',
    primary: '#ffffff',
    text: '#0c1e3e',
  },
  primaryBlue: {
    accent1: '#2971ff',
    accent2: '#2ed6a1',
    active: '#1f3f7a',
    focus: '#5d87d5',
    primary: '#29529f',
    text: '#ffffff',
  },
  primaryNegative: {
    accent1: '#2971ff',
    accent2: '#2ed6a1',
    active: '#040a15',
    focus: '#2154ab',
    primary: '#0c1e3e',
    text: '#ffffff',
  },
  primaryPositive: {
    accent1: '#2971ff',
    accent2: '#2ed6a1',
    active: '#ffffff',
    focus: '#e6e6e6',
    primary: '#ffffff',
    text: '#0c1e3e',
  },
  turquoiseOnBlue: {
    accent1: '#2ed6a1',
    accent2: '#2ed6a1',
    active: '#0055ff',
    focus: '#6699ff',
    primary: '#2971ff',
    text: '#2ed6a1',
  },
  whiteOnBlue: {
    accent1: '#ffffff',
    accent2: '#ffffff',
    active: '#0055ff',
    focus: '#6699ff',
    primary: '#2971ff',
    text: '#ffffff',
  },
};

const Theme = (val, type) => {
  switch (val) {
    case 'blueOnTurquoise':
      return {
        ...Themes.blueOnTurquoise,
        ...{
          className: `decred-ui-${type}-blueOnTurquoise`,
        },
      };
    case 'darkOnTurquoise':
      return {
        ...Themes.darkOnTurquoise,
        ...{
          className: `decred-ui-${type}-darkOnTurquoise`,
        },
      };
    case 'oneColorNegative':
      return {
        ...Themes.oneColorNegative,
        ...{
          className: `decred-ui-${type}-oneColorNegative`,
        },
      };
    case 'oneColorPositive':
      return {
        ...Themes.oneColorPositive,
        ...{
          className: `decred-ui-${type}-oneColorPositive`,
        },
      };
    case 'primaryBlue':
      return {
        ...Themes.primaryBlue,
        ...{
          className: `decred-ui-${type}-primaryBlue`,
        },
      };
    case 'primaryNegative':
      return {
        ...Themes.primaryNegative,
        ...{
          className: `decred-ui-${type}-primaryNegative`,
        },
      };
    case 'primaryPositive':
      return {
        ...Themes.primaryPositive,
        ...{
          className: `decred-ui-${type}-primaryPositive`,
        },
      };
    case 'turquoiseOnBlue':
      return {
        ...Themes.turquoiseOnBlue,
        ...{
          className: `decred-ui-${type}-turquoiseOnBlue`,
        },
      };
    case 'whiteOnBlue':
      return {
        ...Themes.whiteOnBlue,
        ...{
          className: `decred-ui-${type}-whiteOnBlue`,
        },
      };
    default:
      return {
        ...Themes.primaryNegative,
        ...{
          className: `decred-ui-${type}-primaryNegative`,
        },
      };
  }
};
export default Theme;
