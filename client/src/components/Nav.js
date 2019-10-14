import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </div>
  );
}
