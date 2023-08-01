import React from "react";
import back from "../../assets/images/pfp.jpg";
import "./login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <section className="login">
        <div className="containers">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>Username or email address</span>
            <input type="text" requied />
            <span>Password</span>
            <input type="password" requied />
            <button className="button">Log In</button>

            <Link to="/register">Register</Link>
          </form>
        </div>
      </section>
    </>
  );
};
