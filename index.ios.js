// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

import ExperimentList from './ios/ExperimentList'

class ReactNativeExperiment extends Component {
  renderScene(route, navigator) {
    const RouteComponent = route.component;
    return (
      <RouteComponent
        navigator={navigator}
        {...route.passProps}
      />);
  }

  configureScene(route, routeStack){
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromLeft
  }

  render() {
    const NavigationBarRouteMapper={
      LeftButton: function(route, navigator, index, navState) {
        return null;
      },

      RightButton: function(route, navigator, index, navState) {
        return null;
      },

      Title: function(route, navigator, index, navState) {
        return (
          <Text>
            {route.title}
          </Text>
        );
      }
    };

    return (
      <Navigator
        configureScene={ this.configureScene }
        style={{flex: 1, padding: 10}}
        initialRoute={{component: ExperimentList, title: "Experiment List"}}
        renderScene={ this.renderScene }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
