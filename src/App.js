/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import MainScreen from './containers/MainScreen/MainScreen';

export default class App extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
