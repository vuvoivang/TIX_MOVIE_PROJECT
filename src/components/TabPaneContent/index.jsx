import React from "react";
import { Fragment } from "react";
import CardNews from "../CardNews";

export default function TabPaneContent(props) {
  const renderCol = (arr) => {
    return arr.map((item2, index) => {
      if (index < 2) {
        return (
          <div key={index} className="col-md-6 col-12 col-6-new">
            <CardNews data={item2} />
          </div>
        );
      } else if (index < 4) {
        return (
          <div key={index} className="col-md-4 col-12 col-6-new">
            <CardNews data={item2} />
          </div>
        );
      } else
        return (
          <div key={index} className="col-md-4 col-12 col-12-new">
            {item2.map((item3, index) => {
              return (
                <a href="#slider" key={index}>
                  <img src={item3.img} alt="" />
                  <p style={{ WebkitBoxOrient: "vertical" }}>{item3.title}</p>
                </a>
              );
            })}
          </div>
        );
    });
  };
  return (
    <Fragment>
      {props.data.listNews.map((item1, index) => {
        return (
          <div
            key={item1.id}
            className={index === 0 ? "row" : "row hide"}
            id={props.data.id + "-" + item1.id}
          >
            {renderCol(item1.arrayItemNews)};
          </div>
        );
      })}
    </Fragment>
  );
}
