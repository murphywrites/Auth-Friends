import axios from 'axios';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import axiosWithAuth from './utils/axiosWithAuth'

function App() {
  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res=>{
      localStorage.removeItem('token');
      window.location.href =  '/login';
    })
    .catch(err=>{
      console.log(err);
    })

  }
  return (
    <Router>
    <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Login} />
        <Route path="/friendslist" component={FriendsList}/>
        <PrivateRoute path='/protected' component={Protected} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
