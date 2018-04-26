import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onTodoPress }) => (
  <FlatList
    // contentContainerStyle={styles.flatListContainer}
    data={todos}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <Text
        key={item.id}
        style={[styles.todoItem, item.isCompleted && styles.completedTodoItem]}
        onPress={() => onTodoPress(item.id)}
      >
        {item.text}
      </Text>
    )}
  />
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  onTodoPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  //   flatListContainer: {
  //     flexDirection: 'column',
  //     justifyContent: 'flex-start',
  //     alignItems: 'stretch',
  //   },
  todoItem: {
    padding: 14,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 2,
    color: '#d0d0d0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#51A39A',
  },
  completedTodoItem: {
    backgroundColor: '#eee',
  },
});

export default TodoList;
