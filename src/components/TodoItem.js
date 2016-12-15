import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class TodoItem extends Component {
  static propTypes = {
    user:              PropTypes.object.isRequired,
    todo:              PropTypes.object.isRequired,
    deleteTodoRequest: PropTypes.func.isRequired,
    toggleTodoRequest: PropTypes.func.isRequired
  };

  render() {
    const { user, todo, toggleTodoRequest, deleteTodoRequest } = this.props;
    const icon = todo.completed ?
      {name: 'check-circle-o', type: 'font-awesome', color: 'green'} :
      {name: 'circle-o', type: 'font-awesome', color: 'lightslategray'};
    const style = todo.completed ? styles.completed : styles.active;

    return (
      <ListItem
        key={todo._id}
        title={todo.text}
        titleStyle={style}
        leftIcon={icon}
        hideChevron={true}
        onPress={() => toggleTodoRequest(user, todo._id)}
        />
    )
  }
}

const styles = StyleSheet.create({
  completed: {
    textDecorationLine: 'line-through',
    color: 'lightslategray'
  },
  active: {
    color: 'black'
  }
});

// {() => deleteTodoRequest(user, todo._id)}

export default TodoItem;