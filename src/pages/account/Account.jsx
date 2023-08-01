import React from "react";
import image from "../../assets/images/pfp.jpg";
import "./account.css";

export const Account = () => {
  return (
    <>
      <section className="accountInfo">
        <section className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" src={image} alt="img" />
                <img src={image} alt="images" />
              </div>
            </div>
            <div className="right">
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email Address</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <button className="button">Update</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};