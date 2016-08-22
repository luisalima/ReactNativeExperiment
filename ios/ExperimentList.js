import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';

import FontExperiments from './FontExperiments';
import ImageExperiments from './ImageExperiments';
import ModalExperiment from './ModalExperiment';

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
      { component: FontExperiments, title: 'Font experiments',
        type: 'Normal' },
      { component: ImageExperiments, title: 'Image experiments',
        type: 'Normal' },
      { component: ModalExperiment, title: 'Modal experiment',
        type: 'Modal', onPress: () => {
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () =>
                console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () =>
                console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () =>
                console.log('OK Pressed')},
            ]
          );
        }
      }
    ];
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          Experiments!
        </Text>
        {this.items().map((item, index) => {
          console.log(item);
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
