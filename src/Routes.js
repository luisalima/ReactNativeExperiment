import FontExperiments from './FontExperiments';
import ImageExperiments from './ImageExperiments';
import ModalExperiment from './ModalExperiment';
import HideNavigationBarExperiment from './HideNavigationBarExperiment';
import ListViewExperiment from './ListViewExperiment';
import SideFilters from './SideFilters';

class Route {
  constructor(...args) {
    for(e in args[0]) {
      this[e] = args[0][e];
    }
  }
}

export default class Routes {
  static list() {
    const onPressEllipsis = () => {
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
    };

    const onPressRocket = () => {
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
    };

    return [
      new Route({
        name: 'FontExperiments',
        component: FontExperiments,
        title: 'Font experiments',
        type: 'Normal'
      }),
      new Route({
        name: 'ImageExperiments',
        component: ImageExperiments,
        title: 'Image experiments',
        type: 'Normal'
      }),
      new Route({
        name: 'ModalExperiment',
        component: ModalExperiment,
        title: 'Modal experiment',
        type: 'Modal',
        onPressRocket,
        onPressEllipsis
      }),
      new Route({
        name: 'HideNavigationBarExperiment',
        component: HideNavigationBarExperiment,
        title: 'Hide Navigation Bar Experiment',
        type: 'Normal',
        navigationBarHidden: true
      }),
      new Route({
        name: 'ListViewExperiment',
        component: ListViewExperiment,
        title: 'List View Experiment'
      }),
      new Route({
        name: 'SideFilters',
        component: SideFilters,
        title: 'Filters',
        type: 'sideFilters',
        hideRightNavigationButton: true
      }),
    ];
  }

  static get(name) {
    console.log("FILTER", Routes.list().filter((e) => e.name == name)[0]);
    return Routes.list().filter((e) => e.name == name)[0];
  }
}
