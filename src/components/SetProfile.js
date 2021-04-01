import React from "react";
import "./SetProfile.css";

const SetProfile = () => {
  const handleSetProfile = (e) => {
    e.preventDefault();
    console.log(e.target.picture.value);
  };
  return (
    <div>
      <header>
        <h1>Setup your profile</h1>
      </header>
      <main>
        <div className="form-container">
          <form onSubmit={handleSetProfile}>
            <h2 className="form__heading">New Account</h2>
            <div className="form-field">
              <label htmlFor="username" className="form-lable">
                Username
              </label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="form-field">
              <label htmlFor="name" className="form-lable">
                Name
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="form-lable">
                Email
              </label>
              <input type="email" name="email" id="email" />
            </div>
            <button type="submit" className="btn from__set-profile">
              Set Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SetProfile;
