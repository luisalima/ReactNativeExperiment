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

import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

class ReactNativeExperiment extends Component {
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight
  }

  renderScene(route, navigator) {
    const RouteComponent = route.component;
    return (
      <RouteComponent
        navigator={navigator}
        {...route.passProps}
      />
    );
  }

  routeMapper() {
    const that = this;

    return {
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

        return (
          <TouchableHighlight
            style={styles.touchableHighlight}
            underlayColor="transparent"
            onPress={() => that._drawerLeft.open()}
          >
            <View
              style={styles.iconContainer}
            >
              <Icon
               name="bars"
               size={20}
               color="white"
               style={styles.leftButtonIcon}
             />
            </View>
          </TouchableHighlight>
        );
      },

      RightButton: function(route, navigator, index, navState) {
        if (route.onPressEllipsis || route.onPressRocket) {
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
             </View>
           );
         }

         return (
           <TouchableHighlight
             style={styles.touchableHighlight}
             underlayColor="transparent"
             onPress={() => that._drawerRight.open()}
           >
             <View
               style={styles.iconContainer}
             >
               <Icon
                name="ellipsis-v"
                size={20}
                color="white"
                style={styles.rightButtonIcon}
              />
             </View>
           </TouchableHighlight>
         );
      },

      Title: function(route, navigator, index, navState) {
        return (
          <Text style={styles.title}>
            {route.title}
          </Text>
        );
      }
    };
  }

  controlPanelLeft() {
    return (
      <View>
        <Text>CONTROL PANEL LEFT!!!!</Text>
      </View>
    );
  }

  controlPanelRight() {
    return (
      <View>
        <Text>CONTROL PANEL RIGHT!!!!</Text>
      </View>
    );
  }

  renderNavigatorWrapper() {
    const MainView = ({navigator}) => {
      return (
        <TabBarContainer
          navigator={navigator}
        />
      );
    };

    return (
      <Navigator
        configureScene={ this.configureScene }
        style={{flex: 1}}
        initialRoute={{component: MainView, title: "Experiment List"}}
        renderScene={ this.renderScene }
        navigationBar={
          <Navigator.NavigationBar
            style={styles.nav}
            routeMapper={this.routeMapper()}
          />
        }
      />
    );
  }

  render() {
    return (
      <Drawer
        type="displace"
        openDrawerOffset={100}
        closedDrawerOffset={0}
        styles={drawerLeftStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        ref={(ref) => this._drawerLeft = ref}
        content={this.controlPanelLeft()}
        panOpenMask={0.5}
        side="left"
        tapToClose
        negotiatePan
      >
        <Drawer
          type="displace"
          openDrawerOffset={100}
          closedDrawerOffset={0}
          styles={drawerRightStyles}
          tweenHandler={Drawer.tweenPresets.parallax}
          ref={(ref) => this._drawerRight = ref}
          content={this.controlPanelRight()}
          panOpenMask={0.5}
          side="right"
          tapToClose
          negotiatePan
        >
          {this.renderNavigatorWrapper()}
        </Drawer>
      </Drawer>
    );
  }
}

const drawerLeftStyles = {
  drawer: { backgroundColor: 'green' },
}

const drawerRightStyles = {
  drawer: { backgroundColor: 'red' },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nav: {
    backgroundColor: '#BAA1A7'
  },
  navBtnText: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15
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
