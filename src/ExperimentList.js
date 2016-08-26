// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
  TabBarIOS
} from 'react-native';

import Routes from './Routes';

export default class ExperimentList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static defaultProps = {
    title: 'Font experiments'
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          Experiments!
        </Text>
        {Routes.list().map((item, index) => {
          return (
            <TouchableHighlight
              key={index}
              style={styles.button}
              onPress={ () => this.props.navigator.push(item) }
            >
              <Text>{item.title}</Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingVertical: 70
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20
  },
  button: {
    padding: 5,
    margin: 5,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EDD2E0'
  }
});
