import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Menu from './menu-content';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMenu: false,
    };
  }
  closeBackdrop = () => {
    this.setState({
      viewMenu: false,
    });
  }
  showMenu = () => {
    this.setState(prevState => ({
      viewMenu: !prevState.viewMenu,
    }));
  }
  render() {
    return (
      <Menu
        links={this.props.links}
        closeBackdrop={this.closeBackdrop}
        showMenu={this.showMenu}
        viewMenu={this.state.viewMenu}
      />
    );
  }
}

MenuContainer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default MenuContainer;
