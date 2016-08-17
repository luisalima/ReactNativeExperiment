import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class ExperimentList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static defaultProps = {
    title: 'Font experiments'
  };

  items() {
    return [
      { name: 'FontExperiments', title: 'Font experiments' },
      { name: 'ImageExperiments', title: 'Image experiments' }
    ];
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          Experiments!
        </Text>
        {this.items().map((item, index) => {
          return (
            <TouchableHighlight
              key={index}
              style={styles.button}
              onPress={ () => this.props.navigator.push({name: item.name}) }
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
    letterSpacing: 5,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
    margin: 5,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EDD2E0'
  }
});
