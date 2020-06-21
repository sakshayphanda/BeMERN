import { connect } from 'react-redux';
import React, {useState} from 'react';

function Login(props) {
    console.log(props);
    return (
        <div className="Login">
            <button onClick={() => {
               props.dispatchLogin();
            }}> Dispatch Action
            </button>
            {props.text && ( // equavalent to ng-if
           <p>{props.text}</p>
            )
            }
        </div>
    );
}

const mapStateToProps = (store) => {
    console.log(store, 'store updated');
    return {
        store: store,
        text: store.auth.text
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
