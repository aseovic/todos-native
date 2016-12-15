import React, { PropTypes, Component } from 'react'
import { View } from 'react-native';
import Button from 'react-native-button';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTERS = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

class Footer extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onShow: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {selectedIndex: 0};
  }

  updateFilter = (selectedIndex) => {
    this.setState({selectedIndex});
    this.props.onShow(FILTERS[selectedIndex]);
  };

  render() {
    const { selectedIndex } = this.state;
    const containerStyle = {borderWidth: 1, padding: 8, height: 40, width: 120, overflow: 'hidden', borderRadius: 6, backgroundColor: 'white'};
    const selectedStyle  = {color: 'green'};
    const defaultStyle   = {color: 'lightslategray'};

    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60}}>
        <Button onPress={() => this.updateFilter(0)}
                containerStyle={containerStyle}
                style={selectedIndex === 0 ? selectedStyle : defaultStyle}>
          All
        </Button>
        <Button onPress={() => this.updateFilter(1)}
                containerStyle={containerStyle}
                style={selectedIndex === 1 ? selectedStyle : defaultStyle}>
          Active
        </Button>
        <Button onPress={() => this.updateFilter(2)}
                containerStyle={containerStyle}
                style={selectedIndex === 2 ? selectedStyle : defaultStyle}>
          Completed
        </Button>
      </View>
    )
  }
}

export default Footer;