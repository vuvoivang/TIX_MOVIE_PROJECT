import React from "react";

export default function Movie(props) {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <div className="movie">
      <div className="info">
        <img
          src={
            props.movie.hinhAnh === null
              ? "./images/chi-muoi-ba-2-16061875740652_60x60.png"
              : props.movie.hinhAnh
          }
          alt=""
        />
        <div className="content">
          <p>
            <span className="age">C{getRndInteger(12, 21)}</span>
            {props.movie.tenPhim}
          </p>
          <span>
            {getRndInteger(90, 150)} phút - TIX {getRndInteger(4, 10)} - IMDb{" "}
            {getRndInteger(0, 10)}
          </span>
        </div>
      </div>
      <h1>2D Digital</h1>
      <a href="#slider" className="session">
        <span className="light">9:15</span>~10:55
      </a>
      <a href="#slider" className="session">
        <span className="light">14:35</span>~16:15
      </a>
      <a href="#slider" className="session">
        <span className="light">15:40</span>~17:20
      </a>
    </div>
  );
}
