import React from "react";
import "./create.css";

export const Create = () => {
  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img">
            <img
              src="https://i.pinimg.com/1200x/6a/7f/ba/6a7fba865bd67b02a800bc1d60b98686.jpg"
              alt="images"
            />
          </div>
          <form action="">
            <div className="inputFile flexCenter">
              <input type="file" />
            </div>
            <input type="text" placeholder="Title" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};
