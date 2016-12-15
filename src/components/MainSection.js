import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { List } from 'react-native-elements';
import Header from './Header';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]:       () => true,
  [SHOW_ACTIVE]:    (todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo) => todo.completed
};

class MainSection extends Component {
  static propTypes = {
    user:    PropTypes.object.isRequired,
    todos:   PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  state = {filter: SHOW_ALL};

  handleShow = (filter) => {
    this.setState({filter})
  };

  render() {
    const { user, todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    return (
      <View style={{ flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between' }}>
        <Header user={user}/>
        <ScrollView automaticallyAdjustContentInsets={false}>
            {filteredTodos.map(todo =>
                <TodoItem user={user} key={todo._id} todo={todo} {...actions} />
            )}
        </ScrollView>
        <Footer filter={filter}
                onShow={this.handleShow}/>
      </View>
    )
  }
}

export default MainSection;