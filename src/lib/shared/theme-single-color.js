export const ThemesSingleColor = {
  blue: {
    primary: '#2971ff',
    text: '#ffffff',
  },
  darkBlue: {
    primary: '#0c1e3e',
    text: '#ffffff',
  },
  turquoise: {
    primary: '#2ed6a1',
    text: '#ffffff',
  },
  white: {
    primary: '#ffffff',
    text: '#0c1e3e',
  },
};

const ThemeSingleColor = (val) => {
  switch (val) {
    case 'blue':
      return ThemesSingleColor.blue;
    case 'darkBlue':
      return ThemesSingleColor.darkBlue;
    case 'turquoise':
      return ThemesSingleColor.turquoise;
    case 'white':
      return ThemesSingleColor.white;
    default:
      return ThemesSingleColor.blue;
  }
};
export default ThemeSingleColor;
