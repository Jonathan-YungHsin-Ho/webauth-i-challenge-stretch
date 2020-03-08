import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://webauth-i-challenge-jyh.herokuapp.com/api/users')
      .then(res => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <button
        className='logout'
        onClick={() => {
          localStorage.removeItem('token');
          props.history.push('/login');
        }}>
        Log Out
      </button>
      <div className='box'>
        <h2>Users List</h2>
        {users.map(user => (
          <p>{user.username}</p>
        ))}
      </div>
    </div>
  );
}
