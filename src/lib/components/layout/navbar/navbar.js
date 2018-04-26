import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NavbarContent from './navbar-content';

const smallScreenSize = 700;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: this.smallScreen(),
    };
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  }
  onResize = () => {
    this.setState({
      isSmallScreen: this.smallScreen(),
    });
  }
  smallScreen = () => {
    const isSmall = window.innerWidth <= smallScreenSize;
    return isSmall;
  }
  render() {
    return (
      <NavbarContent
        background={this.props.background}
        boxShadow={this.props.boxShadow}
        fixed={this.props.fixed}
        icon={this.props.icon}
        iconColor={this.props.iconColor}
        links={this.props.links}
        smallScreen={this.state.isSmallScreen}
        style={this.props.style}
        theme={this.props.theme}
      />
    );
  }
}

Navbar.defaultProps = {
  background: true,
  boxShadow: true,
  fixed: true,
  icon: 'dcr',
  iconColor: null,
  links: [],
  style: {},
  theme: 'primaryNegative',
};

Navbar.propTypes = {
  /** Show the background. If false, a transparent background will be used */
  background: PropTypes.bool,
  /** Add shadow */
  boxShadow: PropTypes.bool,
  /** Fix the navbar to the top of the viewport */
  fixed: PropTypes.bool,
  /** Icon. Options: atomic, dcr, decrediton, guide, lightning, miner, politeia or voting */
  icon: PropTypes.string,
  /** Custom icon color. Overrides theme */
  iconColor: PropTypes.string,
  /** Navigation links */
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    key: PropTypes.string,
    route: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })),
  /** Custom style */
  style: PropTypes.shape({}),
  /** Button color theme. Options: blueOnTurquoise, darkOnTurquoise, oneColorNegative,
  * oneColorPositive, primaryBlue, primaryNegative, primaryPositive, turquoiseOnBlue
  * or whiteOnBlue */
  theme: PropTypes.string,
};

export default Navbar;
