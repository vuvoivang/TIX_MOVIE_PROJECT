import React from "react";
import Movie from "../Movie";

export default function ListMovieAgents(props) {
  return (
    <div>
      {props.cumRap.lstCumRap.map((item, index) => {
        return (
          <div
            className={
              index === 0 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id={item.maCumRap}
            key={index}
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="listMovie">
              {/* render n movies  */}
              {item.danhSachPhim.map((item) => {
                return <Movie key={item.maPhim} movie={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
