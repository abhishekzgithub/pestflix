import App from './App';
import { AppRegistry, Platform } from 'react-native';
AppRegistry.registerComponent("pestflix", () => App);

// if (Platform.OS === 'web') {
//   const rootTag = document.getElementById('root') || document.getElementById('pestflix');
//   AppRegistry.runApplication('X', { rootTag });
// }
