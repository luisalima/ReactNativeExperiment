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
        type: 'Normal'
      },
      { component: ImageExperiments, title: 'Image experiments',
        type: 'Normal' },
      { component: ModalExperiment, title: 'Modal experiment',
        type: 'Modal',
        onPressEllipsis: () => {
          Alert.alert(
            'Ellipsis',
            'Ellipsis ellipsis!',
            [
              {text: 'OK', onPress: () =>
                console.log('OK Pressed')},
              {text: 'Cancel', onPress: () =>
                console.log('Cancel Pressed'), style: 'cancel'},
            ]
          );
        },
        onPressRocket: () => {
          Alert.alert(
            'Rocket',
            'Rocket rocket!',
            [
              {text: 'OK', onPress: () =>
                console.log('OK Pressed')},
              {text: 'Cancel', onPress: () =>
                console.log('Cancel Pressed'), style: 'cancel'},
            ]
          );
        }
      }
    ];
  }

  _renderContent() {
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
              onPress={ () => this.props.navigator.push(item) }
            >
              <Text>{item.title}</Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    );
  }

  render() {
    var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="Blue Tab"
              icon={{uri: base64Icon, scale: 3}}
              selected={true}
              onPress={() => {}}
          >
          {this._renderContent()}
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
