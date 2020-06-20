import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Login from '../login.container/login';
import * as postsAPIs from '../../redux/effects/posts/post.effects'

function App({props}) {
  // console.log(state, 'APp');
  
  const [posts, setPosts] = useState([]); // react hooks
  const [newPost, setPost] = useState('');
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);

  useEffect(() => {
    postsAPIs.readPosts().then(
      response => {
        setPosts(response.data);
      }
    );
  }, []);

  function createPost() {
    postsAPIs.create(newPost)
    setPosts((posts) => [
      {
        "userId": 1,
        "title": newPost,
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },  ...posts
    ]);
  }

  const routing = (
    <Router>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <Route exact path="/login">
          <Login store={props}></Login>
        </Route>
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
        <input type="text" onChange={(event) => { setPost(event.target.value) }}/>
        <p>{newPost}</p>
        <button onClick={() => createPost()}>Add</button>
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
