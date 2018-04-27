import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const NavBar = ({ onTabButtonClick, uncompletedTodosCount, currentTemperature }) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => onTabButtonClick('TODO_LIST')}
        title={`Todo List ${uncompletedTodosCount ? `(${uncompletedTodosCount})` : ''}`}
        color="skyblue"
      />
    </View>

    <View style={styles.buttonContainer}>
      <Button
        onPress={() => onTabButtonClick('WEATHER')}
        title={`Weather (${
          currentTemperature.toFixed(0) < 0
            ? currentTemperature.toFixed(0)
            : `+${currentTemperature.toFixed(0)}`
        }C)`}
        color="powderblue"
      />
    </View>
  </View>
);
NavBar.propTypes = {
  onTabButtonClick: PropTypes.func.isRequired,
  uncompletedTodosCount: PropTypes.number.isRequired,
  currentTemperature: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#b2e6e0',
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default NavBar;
