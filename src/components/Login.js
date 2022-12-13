import React from "react";
import center from "./photos/center.jpg";
export function Login() {
  return (
    <div className="center">
      <img src={center} className="img" alt="loginpage" />
      <div className="login-div">
        <form action="#" className="login-form">
          <b>Username:-</b>
          <input type="email" name="e1" />
          <br />
          <b>Password:-</b> &nbsp;
          <input type="password" name="e2" />
          <br />
          <input type="submit" className="button" value="login" name="b1" />
        </form>
      </div>
    </div>
  );
}
