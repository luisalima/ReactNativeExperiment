// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import TabBarContainer from './ios/TabBarContainer';

class OurNavigator extends Navigator.NavigationBar {
  render() {
    return super.render();
  }
}

class ReactNativeExperiment extends Component {
  renderScene(route, navigator) {
    const RouteComponent = route.component;
    return (
      <RouteComponent
        navigator={navigator}
        {...route.passProps}
      />
    );
  }

  configureScene(route, routeStack){
    const NoBackSwipe = {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
        gestures: {
          pop: {},
        },
    };

    if (route.title === 'Side Menu experiments') {
      return NoBackSwipe;
    }

    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromRight
  }

  render() {
    const NavigationBarRouteMapper={
      LeftButton: function(route, navigator, index, navState) {
        if(index > 0) {
          return (
            <TouchableHighlight
              style={styles.touchableHighlight}
              underlayColor="transparent"
              onPress={() => { if (index > 0) { navigator.pop() } }}>
              <View
                style={styles.iconContainer}
              >
                <Icon
                  name="chevron-left"
                  size={20}
                  color="white"
                  style={styles.leftButtonIcon}
                />
              </View>
            </TouchableHighlight>
          )
        }
        return null;
      },

      RightButton: function(route, navigator, index, navState) {
        if (route.onPressEllipsis || route.onPressRocket)
          return (
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}
            >
              <TouchableHighlight
                style={styles.touchableHighlight}
                onPress={ () => {route.onPressRocket()} }>
                <Icon
                  name="rocket"
                  size={20}
                  color="white"
                  style={styles.rightButtonIcon}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchableHighlight}
                onPress={ () => {route.onPressEllipsis()} }>
                <Icon
                  name="ellipsis-v"
                  size={20}
                  color="white"
                  style={styles.rightButtonIcon}
                />
              </TouchableHighlight>
            </View>);
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
        style={{flex: 1}}
        initialRoute={{component: TabBarContainer, title: "Experiment List"}}
        renderScene={ this.renderScene }
        navigationBar={
          <OurNavigator
            style={styles.nav}
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#BAA1A7'
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
  leftButtonIcon: {
  },
  rightButtonIcon: {
  },
  iconContainer: {
    //backgroundColor: 'red'
  },
  touchableHighlight: {
    // backgroundColor: 'green',
    padding: 12
  }
});

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
