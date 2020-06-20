import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import login from '../login.container/login';

function App() {
  const [posts, setPosts] = useState([]); // react hooks
  const [newPost, setPost] = useState('');
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);

  useEffect(() => {
    async function fetch() {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts/');
      console.log(response.data);
      setPosts(response.data);
    }
    fetch();
  }, [newPost]);

  async function hitApi() {
    await Axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: newPost,
      body: 'bar',
      userId: 1
    });

    

    setPosts(posts => [
      {
      title: newPost,
      body: 'bar',
      userId: 1
      }, ...posts]);
  }

  const routing = (
    <Router>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <Route exact path="/login" component={login} />
      </Switch>
    </Router>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width: '100%', display: 'flex'}}>React todo list <span style={{marginLeft: 'auto'}}>{currentTime}</span></div>
      </header>
      <div>
        {routing}
      </div>

      <div>
        <input type="text" onBlur={(event) => { setPost(event.target.value) }}/>
        <p>{newPost}</p>
        <button onClick={hitApi}>Add</button>
        <div>
        {
          posts.map(
            item => (<li>{item.title}</li>)
          )
        }
        </div>
      </div>
    </div>
  );
}

export default App;
