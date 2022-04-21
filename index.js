/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/screens/App';
import YaMap from 'react-native-yamap';

YaMap.init('318244ea-6b34-424d-8e7a-bbbdc240bde9');
AppRegistry.registerComponent(appName, () => App);
