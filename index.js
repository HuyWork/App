import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Welcome from './screens/Welcom';

AppRegistry.registerComponent(appName, () => Welcome);
