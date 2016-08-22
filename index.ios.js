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

import TabBarContainer from './ios/TabBarContainer';

import Icon from 'react-native-vector-icons/FontAwesome';

import Drawer from 'react-native-drawer'

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
            </TouchableHighlight>)
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

    closeControlPanel = () => {
       this._drawer.close()
     };

     openControlPanel = () => {
       this._drawer.open()
     };

    return (
      <Drawer
        type="static"
        ref={(ref) => this._drawer=ref}
        content={<View><Text> Olaaaa </Text></View>}
        onOpen={() => console.log("YAY")}
      >
        <Navigator
          configureScene={ this.configureScene }
          style={{flex: 1}}
          initialRoute={{component: TabBarContainer, title: "Experiment List"}}
          renderScene={ this.renderScene }
          navigationBar={
            <Navigator.NavigationBar
              style={styles.nav}
              routeMapper={NavigationBarRouteMapper}
            />
          }
        />
      </Drawer>
    );
  }
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
