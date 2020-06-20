import { connect } from 'react-redux';
import React from 'react';

function Login(props) {
    console.log(props);
    return (
        <div className="Login">
            <button onClick={() => {
               props.dispatchLogin();
            }}> Login
            </button>
           Login Component
        </div>
    );
}

const mapStateToProps = (store) => {
    console.log(store, 'store updated');
    return {
        user: store
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogin: (id) => {
        dispatch({type: 'login'})
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Login);
