/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable  no-console */

// library imports
import Reactotron from 'reactotron-react-native';

import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let exportable;
exportable = Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

Reactotron.clear();

console.tron = Reactotron.log;

const reactotron = exportable;

export {reactotron};
