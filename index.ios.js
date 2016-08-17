// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativeExperiment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Font experiments
        </Text>
        <Text style={styles.text1}>
          text 1
        </Text>
        <Text style={styles.text2}>
          text 2
        </Text>
        <Text style={styles.text3}>
          text 3
        </Text>
        <Text style={styles.text4}>
          text 4
        </Text>
        <Text style={styles.text5}>
          text 5
        </Text>
        <Text style={styles.text6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={styles.text7view}>
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    fontFamily: 'Cochin',
    letterSpacing: 10,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#EDD2E0'
  },
  text2: {
    fontFamily: 'Helvetica',
    fontWeight: '100',
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: '#EDBBB4'
  },
  text3: {
    fontFamily: 'Cochin',
    letterSpacing: 10,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    margin: 0,
    padding: 10,
    backgroundColor: '#DBABBE'
  },
  text4: {
    fontFamily: 'Verdana',
    letterSpacing: 10,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    margin: 20,
    padding: 0,
    backgroundColor: '#BAA1A7'
  },
  text5: {
    fontFamily: 'Verdana',
    letterSpacing: -5,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: '#797B84',
    color: '#FFF'
  },
  text6: {
    lineHeight: 30
  },
  text7: {
    lineHeight: 2
  },
  text7view: {
    backgroundColor: '#CCC',
    width: 100,
  }
});

AppRegistry.registerComponent('ReactNativeExperiment', () => ReactNativeExperiment);
