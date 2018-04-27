import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import NavBar from './NavBar/NavBar';
import TodoView from './TodoView/TodoView';
import WeatherView from './WeatherView/WeatherView';
import {
  getAllTodos,
  getUncompletedTodosCount,
  addTodo,
  toggleTodo,
  removeTodo,
} from '../../store/modules/todos';
import { WEATHER_CURRENT_URL, WEATHER_FORECAST_URL } from '../../utils/constants';

class MainScreen extends Component {
  state = {
    currentTab: 'TODO_LIST',
    weather: {
      current: { type: '', temperature: 0 },
      forecast: [{ type: '', temperature: 0 }],
    },
  };

  componentDidMount() {
    this.getCurrentWeather();
    this.getForecast();
  }
  onTabButtonClick = (currentTab) => {
    this.setState({ currentTab });
  };
  getCurrentWeather = () =>
    axios
      .get(WEATHER_CURRENT_URL)
      .then(res =>
        this.setState(prevState => ({
          weather: {
            ...prevState.weather,
            current: {
              temperature: res.data.main.temp,
              type: res.data.weather[0].description,
            },
          },
        })))
      .catch(() =>
        this.setState(prevState => ({
          weather: {
            ...prevState.weather,
            current: { type: 'network error', temperature: 0 },
          },
        })));

  getForecast = () =>
    axios
      .get(WEATHER_FORECAST_URL)
      .then(res =>
        this.setState(prevState => ({
          weather: {
            ...prevState.weather,
            forecast: res.data.list
              .filter((el, idx) => idx > 0 && idx < 4)
              .map(el => ({ type: el.weather[0].description, temperature: el.main.temp })),
          },
        })))
      .catch(() =>
        this.setState(prevState => ({
          weather: {
            ...prevState.weather,
            forecast: [{ type: 'network error', temperature: 0 }],
          },
        })));

  render() {
    const {
      todos, addTodo, toggleTodo, removeTodo, uncompletedTodosCount,
    } = this.props;
    const { container, todoViewContainer } = styles;
    const { current, forecast } = this.state.weather;
    return (
      <View style={container}>
        <View style={todoViewContainer}>
          {this.state.currentTab === 'TODO_LIST' ? (
            <TodoView
              todos={todos}
              addTodo={addTodo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ) : (
            <WeatherView current={current} forecast={forecast} />
          )}
        </View>

        <NavBar
          onTabButtonClick={this.onTabButtonClick}
          uncompletedTodosCount={uncompletedTodosCount}
          currentTemperature={current.temperature}
        />
      </View>
    );
  }
}
MainScreen.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  uncompletedTodosCount: PropTypes.number.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

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

const mapStateToProps = state => ({
  todos: getAllTodos(state),
  uncompletedTodosCount: getUncompletedTodosCount(state),
});

export default connect(mapStateToProps, {
  addTodo,
  toggleTodo,
  removeTodo,
})(MainScreen);
