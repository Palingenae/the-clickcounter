import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import createStore from './store/createStore';
import history from './utils/history';
import ComposedClicker from './components/Clicker/ClickerCompose';
// Create redux store with history
const initialState = {};
const store = createStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main className="main" role="main">
        <Router>
          <h1>Clic Counter </h1>
          <Routes>
            <Route exact path="/" element={<ComposedClicker />} />
            <Route element={() => (<h2>Page introuvable</h2>)} />
          </Routes>
        </Router>
        </main>
      </Provider>
    )
  }
}

export default App;
