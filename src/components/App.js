import Exponent, { Facebook } from 'exponent';
import React, { PropTypes } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/TodoActions';
import * as UserActions from '../actions/UserActions';
import TodoInput from '../components/TodoInput';
import MainSection from '../components/MainSection';

const App = ({user, todos, actions}) => {

  const bypasslogIn = () => {
    const user = {name: 'Aleksandar Seovic'};

    actions.login(user);
    actions.fetchAllTodos(user);
  };

  const logIn = () => {
    Facebook.logInWithReadPermissionsAsync('337661333286285', {behavior: 'system'})
      .then((result) => {
        if (result.type === 'success') {
          // Get the user's name using Facebook's Graph API
          return fetch(`https://graph.facebook.com/me?access_token=${result.token}`);
        }
        throw Error('unable to authenticate');
      })
      .then((response) => response.json())
      .then((json) => {
        console.log('Logged In', json);
        const user = {name: json.name};

        actions.login(user);
        actions.fetchAllTodos(user);
      })
      .catch((error) => {
        console.error(error);
      });

  };

  if (user.name) {
    return (
      <MainSection user={user} todos={todos} actions={actions}/>
    )
  }
  else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../images/todos.png')}/>
        <Text style={{ fontSize: 56 }}>
          To Do List
        </Text>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={logIn}
          />
      </View>
    )
  }
};

App.propTypes = {
  user:    PropTypes.object.isRequired,
  todos:   PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user:  state.user,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: {
    login:                 (user)     => {
      dispatch(UserActions.login(user))
    },
    fetchAllTodos:         (user)     => {
      dispatch(TodoActions.fetchAllTodos(user))
    },
    addTodoRequest:        (user, text)     => {
      dispatch(TodoActions.addTodoRequest(user, text))
    },
    updateTodoRequest:     (user, id, text) => {
      dispatch(TodoActions.updateTodoRequest(user, id, text))
    },
    deleteTodoRequest:     (user, id)       => {
      dispatch(TodoActions.deleteTodoRequest(user, id))
    },
    toggleTodoRequest:     (user, id)       => {
      dispatch(TodoActions.toggleTodoRequest(user, id))
    },
    clearCompletedRequest: (user)         => {
      dispatch(TodoActions.clearCompletedRequest(user))
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
