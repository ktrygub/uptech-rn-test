import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import NavBar from './NavBar/NavBar';
import TodoView from './TodoView/TodoView';
import WeatherView from './WeatherView/WeatherView';

class MainScreen extends Component {
  state = {
    currentTab: 'TODO_LIST',
  };

  onButtonClick = (currentTab) => {
    this.setState({ currentTab });
  };
  render() {
    const { container, todoViewContainer } = styles;

    return (
      <View style={container}>
        <View style={todoViewContainer}>
          {this.state.currentTab === 'TODO_LIST' ? <TodoView /> : <WeatherView />}
        </View>

        <NavBar onButtonClick={this.onButtonClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  todoViewContainer: {
    flex: 14,
  },
});

export default MainScreen;
