import React from "react";
import { Link } from "react-router-dom";

export function Menubar() {
  return (
    <div className="menu-bar">
      <Link to={"/Home"}>HOME</Link>
      <Link to={"/Login"}>LOGIN</Link>
      <Link to={"/Contact"}>CONTACT</Link>
      <Link to={"/Info"}>INFO</Link>
      {/* <a href="">LOGIN</a>
      <a href="">CONTACT</a>
      <a href="">INFO</a> */}
    </div>
  );
}
