import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherView = () => (
  <View style={styles.container}>
    <Text style={styles.text}>WEATHER VIEW WILL BE HERE</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    backgroundColor: '#e3f9f7',
  },
});

export default WeatherView;
