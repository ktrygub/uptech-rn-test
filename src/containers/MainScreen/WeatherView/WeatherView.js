import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import uuid from 'uuid/v4';

import PropTypes from 'prop-types';

const WeatherView = ({ current, forecast }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`Now: ${
        current.temperature < 0
          ? current.temperature.toFixed(0)
          : `+${current.temperature.toFixed(0)}`
      }C,  ${current.type}`}
    </Text>
    {forecast.map((el, id) => (
      <Text key={uuid()} style={styles.text}>
        {`In ${(id + 1) * 3} hours: ${
          el.temperature < 0 ? el.temperature.toFixed(0) : `+${el.temperature.toFixed(0)}`
        }C,  ${el.type}`}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#e3f9f7',
  },
});
WeatherView.propTypes = {
  current: PropTypes.shape().isRequired,
  forecast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WeatherView;
