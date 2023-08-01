import React from "react";
import "./footer.css";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="box">
        <div className="container flex">
          <p>LOrem lorem dfsaasdf erosd f cxlzc asdofsd</p>
          <div className="social">
            <BsFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
};
