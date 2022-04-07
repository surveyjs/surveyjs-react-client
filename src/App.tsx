import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Routing, { NavBar } from './routes'
import store from './redux';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="sjs-client-app">
            <header className="sjs-client-app__header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              {/* <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
              <NavBar/>
            </header>
            <main>
              <Routing/>
            </main>
            <footer className="sjs-client-app__footer">

            </footer>
          </div>
        </Router>
    </Provider>
  );
}

export default App;
