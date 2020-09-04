import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Router path = "/Login">
            <h1> Login page </h1>
          </Router>
          <Route path="/">
            <h1> HOME </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
