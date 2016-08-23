// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

export default class SideMenuExperiments extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static defaultProps = {
    title: 'Side Menu experiments'
  }

  render() {

    const navigationView = (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>In the Drawer!</Text>
      </View>
    );

    const navigationView2 = (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>In the Drawer 2!</Text>
      </View>
    );

    return (
      <DrawerLayout
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => navigationView}>
        <DrawerLayout
          drawerWidth={300}
          drawerPosition={DrawerLayout.positions.Right}
          renderNavigationView={() => navigationView2}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>
              Side menu experiment, on the
            </Text>
          </ScrollView>
        </DrawerLayout>
      </DrawerLayout>
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
    fontSize: 20
  }
});
