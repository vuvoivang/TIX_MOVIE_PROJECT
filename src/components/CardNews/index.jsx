import React from "react";
import { Fragment } from "react";

export default function CardNews(props) {
  const { img, title, description, like, comment } = props.data;
  return (
    <Fragment>
      <a href="#slider" className="img-thumb">
        <img src={img} alt="cai gi quen roi" />
      </a>
      <a href="#slider" className="header-thumb">
        <h3 style={{ WebkitBoxOrient: "vertical" }}>{title}</h3>
      </a>
      <p>{description}</p>
      <div className="icon-fb-thumb">
        <div className="icon-like icon">
          <img src="images/like.png" alt="icon like fb" /> <span>{like}</span>
        </div>
        <div className="icon-comment icon">
          <img src="images/comment.png" alt="icon like fb" />{" "}
          <span>{comment}</span>
        </div>
      </div>
    </Fragment>
  );
}
