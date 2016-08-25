// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import Svg,{
    Circle,
  } from 'react-native-svg';

export default class ImageExperiments extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static defaultProps = {
    title: 'Image experiments'
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          This is Image Experiments!
        </Text>

        <View>
          <Text>
            This is a remote image...
          </Text>
          <Image
            source={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
            style={styles.imageStyle}
            resizeMode="contain"
            onLoadStart={(e) => console.log(e)}
            onLoadEnd={(e) => console.log(e)}
          />
        </View>

        <View>
          <Text>
            This is an svg, generated on the fly!
          </Text>
          <Svg
            height="100"
            width="100"
          >
            <Circle
              cx="50"
              cy="50"
              r="50"
              fill="pink"
            />
          </Svg>
        </View>
      </ScrollView>
    )
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
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});
