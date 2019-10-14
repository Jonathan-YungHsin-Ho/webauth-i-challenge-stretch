import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <h1>Users</h1>
      <Nav />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/users' component={Users} />
      {/* <PrivateRoute path='/users' component={Users} /> */}
    </div>
  );
}

export default App;
