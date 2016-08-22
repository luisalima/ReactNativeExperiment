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
    const RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps} />;
  }

  configureScene(route, routeStack){
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromLeft
  }

  navigationBar() {
    const NavigationBarRouteMapper = {};

    const navigationBar = (
      <Navigator.NavigationBar
        style={ styles.nav }
        routeMapper={ NavigationBarRouteMapper } />
    );

    return navigationBar;
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        style={{flex: 1, padding: 10}}
        initialRoute={{component: ExperimentList}}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
