import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import welcome from './screens/Welcome';

AppRegistry.registerComponent(appName, () => welcome);
