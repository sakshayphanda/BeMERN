import { connect } from 'react-redux';
import React from 'react';

function login() {
    return (
        <div className="Login">
           Login Component
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
}

export default login;
