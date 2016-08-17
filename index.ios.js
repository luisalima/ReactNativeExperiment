// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';

import ExperimentList from './ios/ExperimentList'

class ReactNativeExperiment extends Component {
  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps} />;
  }

  render() {
    return (
      <Navigator
        style={{flex: 1, padding: 10}}
        initialRoute={{component: ExperimentList}}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
