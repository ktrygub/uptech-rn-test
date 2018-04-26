import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from './TodoList';
import AddTodoInput from './AddTodoInput';
import { getAllTodos, addTodo, toggleTodo, removeTodo } from '../../../store/modules/todos';

class TodoView extends React.Component {
  onDoublePress = (id) => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;

    const DOUBLE_PRESS_DELAY = 200;
    if (delta < DOUBLE_PRESS_DELAY) {
      this.lastPress = 0;
      this.props.removeTodo(id);
    } else {
      this.lastPress = time;
      this.props.toggleTodo(id);
    }
  };

  render() {
    const { todos, addTodo } = this.props;
    return (
      <View style={styles.container}>
        <AddTodoInput onSubmit={addTodo} />

        <View style={styles.listContainer}>
          <TodoList todos={todos} onTodoPress={this.onDoublePress} />
        </View>
      </View>
    );
  }
}
TodoView.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2e6e0',
  },
  listContainer: {
    flex: 12,
  },
});

const mapStateToProps = state => ({
  todos: getAllTodos(state),
});

export default connect(mapStateToProps, {
  addTodo,
  toggleTodo,
  removeTodo,
})(TodoView);
