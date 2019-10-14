import React, { useState } from 'react';
import axios from 'axios';

export default function Register(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(credentials);
    axios
      .post(
        'https://webauth-i-challenge-jyh.herokuapp.com/api/register',
        credentials,
      )
      .then(res => {
        console.log(res);
        props.history.push('/users');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Register Below:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='...username'
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='...password'
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
