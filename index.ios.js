// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';

import ExperimentList from './ios/ExperimentList'
import FontExperiments from './ios/FontExperiments'
import ImageExperiments from './ios/ImageExperiments'

class ReactNativeExperiment extends Component {
  renderScene(route, navigator) {
    switch(route.name) {
    case 'ExperimentList':
      return <ExperimentList navigator={navigator} />;
    case 'FontExperiments':
      return <FontExperiments navigator={navigator} />;
    case 'ImageExperiments':
      return <ImageExperiments navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        style={{flex: 1, padding: 10}}
        initialRoute={{name: 'ExperimentList'}}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
