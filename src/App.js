import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from "./Payment";

function App() {
  const [{ basket }, dispatch] = useStateValue(); //datalayer

  // code that runs base on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {  //if user signs in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {   // clean up actions
      unsubscribe(); //detaches and reattaches listener
    }
  }, [] );

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />        
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
