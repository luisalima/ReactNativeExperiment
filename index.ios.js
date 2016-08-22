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
        if(index > 0) {
          return (
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => { if (index > 0) { navigator.pop() } }}>
              <Text style={ styles.leftNavButtonText }>Back</Text>
            </TouchableHighlight>)
        }
        return null;
      },

      RightButton: function(route, navigator, index, navState) {
        if (route.onPress)
          return (
            <TouchableHighlight
               onPress={ () => route.onPress() }>
               <Text style={ styles.rightNavButtonText }>
                    { route.rightText || 'Right Button' }
               </Text>
             </TouchableHighlight>);
        return null;
      },

      Title: function(route, navigator, index, navState) {
        return (
          <Text
            style={styles.title}
          >
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
            style={styles.nav}
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#BAA1A7',
  },
  leftNavButtonText: {
    fontFamily: 'SnellRoundhand',
    color: 'white',
    fontSize: 15,
    padding: 10
  },
  rightNavButtonText: {
    fontFamily: 'SnellRoundhand',
    color: 'white',
    fontSize: 15,
    padding: 10
  },
  title: {
    paddingVertical: 10,
    color: 'white',
    fontFamily: 'AmericanTypewriter',
    fontSize: 20
  },
});

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
