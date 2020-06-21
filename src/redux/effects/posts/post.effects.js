import Axios from 'axios';

export function readPosts() {
    return Axios.get('https://jsonplaceholder.typicode.com/posts/');    
}

export function create(post) {
    return Axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: post,
        body: 'bar',
        userId: 1
    });
}

/**
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
Standard way to define async action creators.

An action creator returns an action instead of action object 

Used to dispatch a fucntion instead of the action object
dispatch(actionCreator())
 */
export const addTodo = ({ title, userId }) => {
    return dispatch => {
      dispatch({type: 'start'});
      Axios
        .post(`https://jsonplaceholder.typicode.com/todos`, {
          title,
          userId,
          completed: false
        })
        .then(res => {
          dispatch({type: 'success'});
        })
        .catch(err => {
          dispatch({type: 'fail'});
        });
    };
  };
  