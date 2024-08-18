import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import history from './utils/history';
import CountClickCompose from './store/storeCompose';
// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <h1>Clic Counter </h1>
          <Routes>
            <Route exact path="/" element={<CountClickCompose />} />
            <Route element={() => (<h2>Page introuvable</h2>)} />
          </Routes>
        </Router>
      </Provider>
    )
  }
}

export default App;
