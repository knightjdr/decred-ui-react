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
        fixed={this.props.fixed}
        links={this.props.links}
        smallScreen={this.state.isSmallScreen}
        style={this.props.style}
      />
    );
  }
}

Navbar.defaultProps = {
  background: false,
  fixed: true,
  links: [],
  style: {},
};

Navbar.propTypes = {
  background: PropTypes.bool,
  fixed: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    text: PropTypes.string,
  })),
  style: PropTypes.shape({}),
};

export default Navbar;
