import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="main-page">
      <h1 className="brand-name">
        Text<span id="brand-name-highlight">Me</span>
      </h1>
      <div className="login-container">
        <img
          className="main-page__art"
          src="/images/bg-art-1.png"
          alt="mobile-art"
        />
        <div className="main__content">
          <p className="main__about">
            <span className="main__about--highlight">TextMe</span> is a social
            media web application. Where you can chat with your firends and see
            post and feeds.
          </p>
          <div className="main__login-buttons">
            <button className="btn signin">
              <img
                src="images/google-light-normal.svg"
                alt="signup with google"
              />
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
