import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSystemCinema } from "../../components/Schedule/modules/action.js";
import "./style.css";
import { Link } from "react-router-dom";
export default function DetailScheduleFilm(props) {
  const showTimesFilm = props.showTimesFilm;
  //console.log(showTimesFilm);
  const [notExistFilmOfDay, setnotExistFilmOfDay] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSystemCinema());
  }, [dispatch]);
  const listCinema = useSelector((rootState) => rootState.systemCinemaReducer);
  const clickButtonDay = (index) => {
    //console.log(notExistFilmOfDay);
    return () => {
      if (index % 3 === 1) {
        setnotExistFilmOfDay(true);
      } else setnotExistFilmOfDay(false);
    };
  };
  const renderDay = (i, date, dayOfWeek) => {
    return (
      <li key={date} className="detail__listOfDay--item nav-item">
        <a
          className={i === 0 ? "nav-link active" : "nav-link"}
          onClick={clickButtonDay(i)}
          data-toggle="tab"
          role="tab"
          href="#a"
          aria-selected="true"
        >
          <p className="dayOfWeek">
            {dayOfWeek !== 0 ? `Thứ ${dayOfWeek + 1}` : "Chủ Nhật"}
          </p>
          <p className="date">{date}</p>
        </a>
      </li>
    );
  };
  const renderListOfDays = () => {
    const startDay = new Date(Date.now());
    let i = 0;
    let result = [];
    while (i < 14) {
      result.push(renderDay(i, startDay.getDate(), startDay.getDay()));
      startDay.setDate(startDay.getDate() + 1);
      i++;
    }
    return result;
  };
  const renderHeThongRap = () => {
    return listCinema.system.data?.map((cumRap, index) => {
      return (
        <div
          className={index === 0 ? "logo__wrapper active" : "logo__wrapper"}
          data-toggle="tab"
          role="tab"
          data-target={"#" + cumRap.maHeThongRap}
          aria-selected="true"
          key={cumRap.maHeThongRap + 1000}
        >
          <div className="logo__detail">
            <img
              className="theaterList__image"
              src={cumRap.logo}
              alt={cumRap.tenHeThongRap}
            />
            <span className="tenHeThong">{cumRap.tenHeThongRap}</span>
            <span className="arrow" />
          </div>
        </div>
      );
    });
  };
  const xuLyLichChieu = (cumRap) => {
    const indexRap = showTimesFilm?.heThongRapChieu.findIndex(
      (item) => cumRap.maHeThongRap === item.maHeThongRap
    );
    if (indexRap === -1) {
      return (
        <div className="alert alert-info">
          Tạm thời rạp chưa có lịch chiếu phim này
        </div>
      );
    }
    if (notExistFilmOfDay) {
      return (
        <div className="alert alert-danger">
          Hiện ngày này không có lịch chiếu
        </div>
      );
    }

    return showTimesFilm?.heThongRapChieu[indexRap].cumRapChieu.map((rap) => {
      const subName = rap.tenCumRap.split("-");
      return (
        <div key={rap.maCumRap + 100} className="wrapper__collapse ">
          <div
            className="main__collapse"
            data-toggle="collapse"
            data-target={"#" + cumRap.maHeThongRap + rap.maCumRap}
          >
            <div className="cinema__details--item">
              <img
                className="theaterList__image"
                src="/images/bhd-star-bitexco-15379552241200.jpg"
                alt="cgv"
              />
              <div className="wrapInfo">
                <span className="chiNhanh">
                  <span className="tenRap CGV">{subName[0]}</span> -{" "}
                  {subName[1]}
                </span>
              </div>
            </div>
          </div>
          <div className="collapse" id={cumRap.maHeThongRap + rap.maCumRap}>
            <div className="pt-3 row content__collapse stack">
              <div className="col-12" style={{ padding: "0 15px" }}>
                2D Digital
              </div>
              <div className="col-12">{renderButtonTime(rap)}</div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderButtonTime = (rap) => {
    return rap.lichChieuPhim
      .filter((lichChieu, index) => index < 8)
      .map((lichChieu, index) => {
        // console.log(lichChieu.ngayChieuGioChieu);
        const date_time = new Date(lichChieu.ngayChieuGioChieu);
        const hour = date_time.getHours();
        const minute = date_time.getMinutes();
        const date_time_end = new Date(date_time);
        date_time_end.setMinutes(
          date_time_end.getMinutes() + lichChieu.thoiLuong
        );
        //console.log(date_time_end);
        const hour1 = date_time_end.getHours();
        const minute1 = date_time_end.getMinutes();
        const user = JSON.parse(localStorage.getItem("User"));
 if (user) {
          return (
            <Link
              to={{
                pathname: "/bookticket/" + lichChieu.maLichChieu,
                state: {
                  idSchedule: lichChieu.maLichChieu,
                },
              }}
              key={lichChieu.maLichChieu}
            >
              <button className="btn btn-time">
                <span className="start">
                  {hour.toString().padStart(2, "0")}:
                {minute.toString().padStart(2, "0")}
                </span>{" "}
              ~ {hour1.toString().padStart(2, "0")}:
              {minute1.toString().padStart(2, "0")}
              </button>
            </Link>
          );
        }
        return (
          <Link
            to={{
              pathname: "/login",
              state: {
                idSchedule: lichChieu.maLichChieu,
              },
            }}
            key={lichChieu.maLichChieu}
          >
            <button className="btn btn-time">
              <span className="start">
                {hour.toString().padStart(2, "0")}:
                {minute.toString().padStart(2, "0")}
              </span>{" "}
              ~ {hour1.toString().padStart(2, "0")}:
              {minute1.toString().padStart(2, "0")}
            </button>
          </Link>)
      });
  };
  const renderLichChieuChiNhanh = () => {
    if (showTimesFilm?.heThongRapChieu.length === 0)
      return (
        <div className="alert alert-info">
          Hiện không có lịch chiếu trên hệ thống rạp này
        </div>
      );
    return listCinema.system.data?.map((cumRap, index) => {
      return (
        <div
          className={
            index === 0 ? "tab-pane fade active show" : "tab-pane fade"
          }
          id={cumRap.maHeThongRap}
          key={cumRap.maHeThongRap}
        >
          {xuLyLichChieu(cumRap)}
        </div>
      );
    });
  };
  return (
    <div className="detailContentScheduleFilm">
      <div className="detailSchedule">
        <ul className="nav nav-tabs" id="tabListOfDay" role="tablist">
          {renderListOfDays()}
        </ul>

        <div className="nav detail__theater" role="tablist">
          {renderHeThongRap()}
        </div>

        <div className="detail__showList tab-content">
          {renderLichChieuChiNhanh()}
        </div>
      </div>
    </div>
  );
}
