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