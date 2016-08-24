// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';

const listItems = [
  'row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'row9', 'row10',
  'row11', 'row12', 'row13', 'row14', 'row15', 'row16', 'row17', 'row18', 'row19',
  'row20', 'row21', 'row22', 'row23', 'row24', 'row25', 'row26', 'row27', 'row28',
  'row29', 'row30', 'row31', 'row32', 'row33', 'row34', 'row35', 'row36', 'row37',
  'row38', 'row39', 'row40', 'row41', 'row42', 'row43', 'row44', 'row45', 'row46'
];

export default class ListViewExperiment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static defaultProps = {
    title: 'List view experiment'
  }

  constructor() {
    super();
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { dataSource: this.ds.cloneWithRows(listItems) };
  }

  renderRow(data) {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>{ data }</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    backgroundColor: '#EEE',
    borderColor: '#AAA',
    borderWidth: 1,
    borderRadius: 5,

  },
  text: {
    fontWeight: 'bold'
  }
});
