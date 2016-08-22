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

import FontExperiments from './FontExperiments';
import ImageExperiments from './ImageExperiments';
import ModalExperiment from './ModalExperiment';
import ExperimentList from './ExperimentList';

export default class TabBarContainer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static defaultProps = {
    title: 'Font experiments'
  };

  state = {
    selectedTab: 'font'
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">

          <TabBarIOS.Item
            title="Font"
              systemIcon={"featured"}
              selected={true}
              onPress={() => {}}
          >
            <ExperimentList navigator={this.props.navigator}/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="Font"
              systemIcon={"bookmarks"}
              selected={false}
              onPress={() => {}}
          >
            <FontExperiments navigator={this.props.navigator}/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="Image"
              systemIcon={"contacts"}
              selected={false}
              onPress={() => {}}
          >
            <ImageExperiments navigator={this.props.navigator}/>
          </TabBarIOS.Item>

      </TabBarIOS>
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
