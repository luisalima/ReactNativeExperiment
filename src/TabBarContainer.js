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

import Icon from 'react-native-vector-icons/FontAwesome';

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
    selectedTab: 'experimentList'
  }

  _tabIsSelected(tabName: String) {
    return tabName === this.state.selectedTab;
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">

          <Icon.TabBarItemIOS
            iconName={"hotel"}
            title={"Home"}
            selected={this._tabIsSelected('experimentList')}
            onPress={() => {this.setState({selectedTab: 'experimentList'})}}
          >
            <ExperimentList navigator={this.props.navigator}/>
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName={"pencil"}
            title={"Fonts"}
            selected={this._tabIsSelected('font')}
            onPress={() => {this.setState({selectedTab: 'font'})}}
          >
            <FontExperiments navigator={this.props.navigator}/>
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName={"camera"}
            title={"Images"}
            selected={this._tabIsSelected('image')}
            onPress={() => {this.setState({selectedTab: 'image'})}}
          >
            <ImageExperiments navigator={this.props.navigator}/>
          </Icon.TabBarItemIOS>

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
