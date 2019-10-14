import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://webauth-i-challenge-jyh.herokuapp.com/api/users')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
    </div>
  );
}
