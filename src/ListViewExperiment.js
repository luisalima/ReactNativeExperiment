// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image
} from 'react-native';

import Svg,{
    Polygon,
  } from 'react-native-svg';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';

const listItems = [
  'row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'row9', 'row10',
  'row11', 'row12', 'row13', 'row14', 'row15', 'row16', 'row17', 'row18', 'row19',
  'row20', 'row21', 'row22', 'row23', 'row24', 'row25', 'row26', 'row27', 'row28',
  'row29', 'row30', 'row31', 'row32', 'row33', 'row34', 'row35', 'row36', 'row37',
  'row38', 'row39', 'row40', 'row41', 'row42', 'row43', 'row44', 'row45', 'row46'
];

const SwipeableButton = () =>
  <View>
    <Text>Ninjas</Text>
    <Icon
       name="rocket"
       size={20}
       color="white"
    />
  </View>;

const swipeoutBtns = [
  {
    component: SwipeableButton()
  }
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

  renderRow(data: String) {
    return (
      <Swipeout right={swipeoutBtns}>
        <View style={styles.row}>
          <Text style={styles.text}>{ data }</Text>
          <Image source={require('../images/cat1.png')} style={styles.catStyle} resizeMode="contain" />
          <Svg
            height="40"
            width="40"
            style={{marginLeft: -60}}
          >
            <Polygon
                points="0,0 20,0 0,40 "
                fill="#EEE"
            />
          </Svg>
          <Svg
            height="40"
            width="40"
            style={{marginLeft: 0}}
          >
            <Polygon
                points="20,0 0,40 20,40"
                fill="#EEE"
            />
          </Svg>
        </View>
      </Swipeout>
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
  },
  catStyle: {
    width: 60,
    height: 60
  }
});
