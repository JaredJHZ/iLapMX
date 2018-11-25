import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Layout/>
        </Provider>
      
    );
  }
}

export default App;
