import React, { PropTypes, Component } from 'react';
import NavigationBar from 'react-native-navbar';

class Header extends Component {
  render() {
    const { user } = this.props;
    const title = { title: user.name + "'s To Dos" };

    return (
        <NavigationBar title={title}/>
    )
  }
}

export default Header;