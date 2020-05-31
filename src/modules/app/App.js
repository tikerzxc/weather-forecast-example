import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';

import AppLayout from './components/appLayout/AppLayout';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    );
  }
}

export default App;
