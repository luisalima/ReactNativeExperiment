// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';
import FontExperiments from './ios/FontExperiments'

class ReactNativeExperiment extends Component {
  _handleNavigationRequest() {
  this.refs.nav.push({
    passProps: { myProp: 'genius' },
    barTintColor: 'green',
  });
  }

  renderScene(route, navigator) {
    // if(route.name == 'Main') {
       return <FontExperiments navigator={navigator} />
     //}
  }

  render() {
    return (
      <Navigator
        style={{flex: 1, padding: 10}}
        initialRoute={{name: 'Main'}}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
