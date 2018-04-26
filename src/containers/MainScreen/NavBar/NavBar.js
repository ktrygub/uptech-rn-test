import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const NavBar = ({ onButtonClick }) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button onPress={() => onButtonClick('TODO_LIST')} title="Todo List" color="skyblue" />
    </View>

    <View style={styles.buttonContainer}>
      <Button onPress={() => onButtonClick('WEATHER')} title="Weather" color="powderblue" />
    </View>
  </View>
);
NavBar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
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
