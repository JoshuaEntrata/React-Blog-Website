import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import { Link } from "react-router-dom";
import {
  AiOutlineClockCircle,
  AiOutlineShareAlt,
  AiOutlineComment,
  AiOutlineTags,
} from "react-icons/ai";

export const Card = () => {
  return (
    <>
      <section className="blog">
        <div className="container grid">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />
                  <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" />
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />
                  <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};