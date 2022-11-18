import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import TxnSuccess from "./components/txn-success/TxnSuccess"
import SecurityCheck from './components/security-check/security-check'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true



function App() {
 

  const [ user, setLoginUser] = useState({})
  useEffect(function(){
    axios.get("http://localhost:9002/user/session").then((res) => {
      console.log("from useEffect ", res.data)
      setLoginUser(res.data);
      
    });
  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage user={user} setLoginUser={setLoginUser} /> : <Login  setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/txn-success">
            <TxnSuccess setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/security-check">
            <SecurityCheck user={user} setLoginUser={setLoginUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
