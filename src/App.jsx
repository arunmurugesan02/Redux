import React from 'react';
import Home from './Home';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
export default App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
);
