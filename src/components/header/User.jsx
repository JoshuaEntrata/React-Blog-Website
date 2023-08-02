import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiChatUploadLine, RiContactsBookLine } from "react-icons/ri";
import { IoHelp } from "react-icons/io5";
import { BsEnvelopeHeart } from "react-icons/bs";
import { BiHome, BiLogOutCircle } from "react-icons/bi";

export const User = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };
  return (
    <div>
      <div className="profile">
        <>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img
              src="https://i.pinimg.com/1200x/6a/7f/ba/6a7fba865bd67b02a800bc1d60b98686.jpg"
              alt="images"
            />
          </button>

          {profileOpen && (
            <div className="openProfile boxItems" onClick={close}>
              <Link to="/account">
                <div className="image">
                  <div className="img">
                    <img
                      src="https://i.pinimg.com/1200x/6a/7f/ba/6a7fba865bd67b02a800bc1d60b98686.jpg"
                      alt="images"
                    />
                  </div>

                  <div className="text">
                    <h4>Joshua Entrata</h4>
                    <p>Mandaluyong, Philippines</p>
                  </div>
                </div>
              </Link>

              <Link to="/">
                <button className="box">
                  <BiHome className="icon" />
                  <h4>Home</h4>
                </button>
              </Link>

              <Link to="/create">
                <button className="box">
                  <RiChatUploadLine class="icon" />
                  <h4>Create Post</h4>
                </button>
              </Link>

              <button className="box">
                <BsEnvelopeHeart className="icon" />
                <h4>Wishlist</h4>
              </button>

              <button className="box">
                <RiContactsBookLine className="icon" />
                <h4>Contact</h4>
              </button>
            </div>
          )}
        </>
      </div>
    </div>
  );
};
