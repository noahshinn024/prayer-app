import React, { useState, useEffect, useRef } from "react";
import LoginImg from "../media/login_signup.jpg";

const Login = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const loginEmailField = useRef();
  const passwordField = useRef();
  const loginSubmitBtn = useRef();
  useEffect(() => {
    loginEmailField.current.focus();
  }, []);
  const emailEnterKeyListener = (e) => {
    if (e.keyCode === 13) {
      passwordField.current.focus();
    }
  };
  const passwordEnterKeyListener = (e) => {
    if (e.keyCode === 13) {
      loginSubmitBtn.current.click();
      passwordField.current.blur();
    }
  };
  const emailFieldHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const passwordFieldHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login btn clicked");
  };
  const signupBtnHandler = () => {
    console.log("signup button pressed");
  };
  return (
    <div className="login-signup-container">
      <div className="column-sb login-subcontainer">
        <div className="column-sb circle-photo-container">
          <img src={LoginImg} alt="circle-photo" className="circle-photo" />
          <h1 className="login-signup-header">Login</h1>
        </div>
        <form className="column-sb login-form">
          <input
            onKeyDown={emailEnterKeyListener}
            onChange={emailFieldHandler}
            type="email"
            placeholder="Email"
            ref={loginEmailField}
            className="login-signup-field"
            required
          />
          <input
            onKeyDown={passwordEnterKeyListener}
            onChange={passwordFieldHandler}
            type="password"
            placeholder="Password"
            ref={passwordField}
            className="login-signup-field"
            required
          />
        </form>
        <div className="column-sb login-signup-bottom-subcontainer">
          <button
            onClick={loginHandler}
            type="submit"
            ref={loginSubmitBtn}
            className="login-signup-submit-btn"
          >
            Login
          </button>
          <div className="row-sb login-bottom-container">
            <p className="login-signup-bottom-msg">Don't have an account?</p>
            <button
              onClick={signupBtnHandler}
              className="login-signup-bottom-btn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
