const Color = (color) => {
  switch (color) {
    case 'blue':
      return '#2971ff';
    case 'darkBlue':
      return '#0c1e3e';
    case 'green':
      return '#41BF53';
    case 'lightBlue':
      return '#69D3F5';
    case 'orange':
      return '#FD714A';
    case 'turquoise':
      return '#2ed6A1';
    case 'white':
      return '#ffffff';
    default:
      return color;
  }
};
export default Color;
