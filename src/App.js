import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

import { connect } from 'react-redux'


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetch() {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/todos/');
      console.log(response.data);
      setPosts(response.data);
    }
    fetch();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>BE MERN STACK</p>
      </header>
      <div>
        {
          posts.map(
            item => (<div>{item.title}</div>)
          )
        }
      </div>
    </div>
  );
}

export default App;
