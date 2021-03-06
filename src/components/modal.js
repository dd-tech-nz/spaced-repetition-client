import React from 'react';
import {connect} from 'react-redux';
import  LoginForm from './login-form.js';
import  RegistrationForm from './registration-form.js';
import './modal.css';

export class Modal extends React.Component {

  render () {
    const loginStyle = {
      display: 'show'
    }

    if (this.props.ShowLoginForm === true && this.props.currentUser === null) {
      return (
        <section style={loginStyle} className="login-modal">
        <LoginForm />
        </section>
      );
    }
    if (this.props.ShowRegistrationForm) {
      return (
        <section style={loginStyle} className="login-modal">
        <RegistrationForm />
        </section>
      );
    }
    else {
      return (
        <div></div>
      )
    }   
  }
}

const mapStateToProps = state => ({
  ShowLoginForm: state.userReducer.showLoginForm,
  ShowRegistrationForm: state.userReducer.showRegistrationForm,
  userLoggedIn: state.userReducer.userLoggedIn,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Modal);