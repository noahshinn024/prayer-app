import React, { useState, useEffect, useRef } from "react";
import SignupImg from "../media/login_signup.jpg";

const Signup = (props) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const firstNameField = useRef();
  const lastNameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const signupSubmitBtn = useRef();
  useEffect(() => {
    firstNameField.current.focus();
  }, []);
  const firstNameEnterKeyListener = (e) => {
    if (e.keyCode === 13) {
      lastNameField.current.focus();
    }
  };
  const lastNameEnterKeyListener = (e) => {
    if (e.keyCode === 13) {
      emailField.current.focus();
    }
  };
  const emailEnterKeyListener = (e) => {
    if (e.keyCode === 13) {
      passwordField.current.focus();
    }
  };
  const passwordEnterKeyListener = (e) => {
    if (e.keyCode === 13) {
      signupSubmitBtn.current.click();
      passwordField.current.blur();
    }
  };
  const firstNameFieldHandler = (e) => setFirstNameInput(e.target.value);
  const lastNameFieldHandler = (e) => setLastNameInput(e.target.value);
  const emailFieldHandler = (e) => setEmailInput(e.target.value);
  const passwordFieldHandler = (e) => setPasswordInput(e.target.value);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login btn clicked");
  };
  const signupBtnHandler = () => {
    console.log("signup button pressed");
  };
  return (
    <div className="login-signup-container">
      <div className="column-sb signup-subcontainer">
        <div className="column-sb circle-photo-container">
          <img src={SignupImg} alt="circle-photo" className="circle-photo" />
          <h1 className="login-signup-header">Signup</h1>
        </div>
        <form className="column-sb signup-form">
          <input
            onKeyDown={firstNameEnterKeyListener}
            onChange={firstNameFieldHandler}
            type="text"
            placeholder="First Name"
            ref={firstNameField}
            className="login-signup-field"
            required
          />
          <input
            onKeyDown={lastNameEnterKeyListener}
            onChange={lastNameFieldHandler}
            type="text"
            placeholder="Last Name"
            ref={lastNameField}
            className="login-signup-field"
            required
          />
          <input
            onKeyDown={emailEnterKeyListener}
            onChange={emailFieldHandler}
            type="email"
            placeholder="Email"
            ref={emailField}
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
            ref={signupSubmitBtn}
            className="login-signup-submit-btn"
          >
            Sign Up
          </button>
          <div className="row-sb signup-bottom-container">
            <p className="login-signup-bottom-msg">Already have an account?</p>
            <button
              onClick={signupBtnHandler}
              className="login-signup-bottom-btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
