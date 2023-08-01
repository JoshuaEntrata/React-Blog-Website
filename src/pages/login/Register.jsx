import React from "react";
import back from "../../assets/images/pfp.jpg";
import "./login.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <section className="login">
        <div className="containers">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>Email Address</span>
            <input type="email" requied />
            <span>Username</span>
            <input type="text" requied />
            <span>Password</span>
            <input type="password" requied />
            <button className="button">Register</button>

            <Link to="/login">Login</Link>
          </form>
        </div>
      </section>
    </>
  );
};
