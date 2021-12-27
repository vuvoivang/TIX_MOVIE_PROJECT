import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShowtimeFilm,
  setShowTimeReset,
} from "../../containers/AdminTemplate/ShowTimesManagement/modules/action";
import AsyncCreatableSelect from "react-select/creatable";
import "./style.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function FilmSelection(props) {
  const [valueFilm, setValueFilm] = useState(null); // lay phim user chon
  // console.log("valueFilm", valueFilm);

  const dispatch = useDispatch();
  useEffect(() => {
    if (valueFilm) {
      dispatch(fetchShowtimeFilm(valueFilm.id));
    } else {
      dispatch(setShowTimeReset());
    }
    //eslint-disable-next-line
  }, [valueFilm]);

  const showtimeReducer = useSelector(
    (showtimeReducer) => showtimeReducer.fetchShowtimeReducer
  );

  // Film Select Option
  let optionFilms = [];
  if (props.filmList && props.filmList.length > 0) {
    props.filmList.forEach((film, index) => {
      optionFilms.push({
        id: film.maPhim,
        value: film.tenPhim,
        label: film.tenPhim,
      });
    });
  }

  const handleChangeFilm = useCallback((inputValue) => {
    setValueFilm(inputValue);
    setValueCinema(null);
    setValueShowDate(null);
    setValueShowtime(null);
  }, []);

  const loadOptionFilms = (inputValue, callback) =>
    setTimeout(() => {
      callback(
        optionFilms?.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }, 3000);

  // Cinema Selection
  // Lay danh sach rap chieu phim tuong ung voi ma phim chon truoc do
  const [valueCinema, setValueCinema] = useState(null);
  let showtimeList;
  let optionCinemas = [];
  if (
    showtimeReducer.data?.heThongRapChieu &&
    showtimeReducer.data?.heThongRapChieu.length > 0
  ) {
    showtimeList = showtimeReducer.data.heThongRapChieu;
    for (let cinemaCluster of showtimeList) {
      for (let cinema of cinemaCluster.cumRapChieu) {
        optionCinemas.push({
          value: cinema.tenCumRap,
          label: cinema.tenCumRap,
          lichChieu: cinema.lichChieuPhim,
        });
      }
    }
  }
  // console.log("optionCinemas", optionCinemas);
  // console.log("valueCinema", valueCinema);

  const handleChangeCinema = useCallback((inputValue) => {
    setValueCinema(inputValue);
    setValueShowDate(null);
    setValueShowtime(null);
  }, []);

  const loadOptionCinemas = (inputValue, callback) =>
    setTimeout(() => {
      callback(
        optionCinemas?.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }, 3000);

  // ShowDate Selection
  const [valueShowDate, setValueShowDate] = useState(null);
  let optionShowDates = [];
  if (valueCinema) {
    for (let date of valueCinema.lichChieu) {
      let idSchedule = date.maLichChieu;

      let UTCdate = new Date(date.ngayChieuGioChieu).toLocaleDateString();
      let indexDuplicate = optionShowDates.findIndex(
        (sDate) => sDate.value === UTCdate
      );
      let UTCtime = new Date(date.ngayChieuGioChieu).toLocaleTimeString();
      if (indexDuplicate === -1) {
        optionShowDates.push({
          value: UTCdate,
          label: UTCdate,
          showtimes: [
            {
              idSchedule: idSchedule,
              UTCtime: UTCtime,
            },
          ],
        });
      } else {
        optionShowDates[indexDuplicate].showtimes.push({
          idSchedule: idSchedule,
          UTCtime: UTCtime,
        });
      }
    }
  }
  // console.log("optionShowDates", optionShowDates);
  // console.log("valueShowDate", valueShowDate);

  const handleChangeShowDate = useCallback((inputValue) => {
    setValueShowDate(inputValue);
    setValueShowtime(null);
  }, []);

  const loadOptionShowDates = (inputValue, callback) =>
    setTimeout(() => {
      callback(
        optionShowDates?.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }, 3000);

  // Showtime Selection
  const [valueShowtime, setValueShowtime] = useState(null);
  let optionShowtimes = [];
  if (valueShowDate) {
    for (let time of valueShowDate.showtimes) {
      let indexDuplicate = optionShowtimes.findIndex(
        (stime) => stime.value === time.UTCtime
      );
      if (indexDuplicate === -1) {
        optionShowtimes.push({
          value: time.UTCtime,
          label: time.UTCtime,
          idSchedule: time.idSchedule,
        });
      }
    }
  }
  // console.log("optionShowtimes", optionShowtimes);
  // console.log("valueShowtime", valueShowtime);

  const handleChangeShowtime = useCallback(
    (inputValue) => setValueShowtime(inputValue),
    []
  );
  const handleBookSeatButton = () => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      return (
        <Button
          variant="contained"
          size="large"
          color="secondary"
          disabled={disabled}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={{
              pathname: "/bookticket/" + valueShowtime?.idSchedule,
              state: {
                idSchedule: valueShowtime?.idSchedule,
              },
            }}
          >
            MUA VÉ
          </Link>
        </Button>
      );
    }
    return (
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={disabled}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={{
            pathname: "/login",
            state: {
              idSchedule: valueShowtime?.idSchedule,
            },
          }}
        >
          MUA VÉ
        </Link>
      </Button>
    );
  };
  const loadOptionShowtimes = (inputValue, callback) =>
    setTimeout(() => {
      callback(
        optionShowtimes?.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }, 3000);

  const disabled =
    valueFilm && valueCinema && valueShowDate && valueShowtime ? false : true;

  return (
    <section className="film_selection">
      <div className="container box-ticket">
        <div className="row border rounded py-3 border-ticker">
          <div className="col-sm-6 col-lg-4 px-2 py-2">
            <AsyncCreatableSelect
              isClearable
              noOptionsMessage={() => "nothing found"}
              LoadingMessage={() => "searching..."}
              value={valueFilm}
              options={optionFilms}
              onChange={handleChangeFilm}
              cacheOptions
              loadOptions={loadOptionFilms}
              formatCreateLabel={() => undefined}
              placeholder="Phim"
            />
          </div>
          <div className="col-sm-6 col-lg-2 px-2 py-2">
            <AsyncCreatableSelect
              pageSize={10}
              isClearable
              noOptionsMessage={() => "Vui lòng chọn phim"}
              LoadingMessage={() => "searching..."}
              value={valueCinema}
              options={optionCinemas}
              onChange={handleChangeCinema}
              cacheOptions
              loadOptions={loadOptionCinemas}
              formatCreateLabel={() => undefined}
              placeholder="Rạp"
            />
          </div>
          <div className="col-sm-6 col-lg-2 px-2 py-2">
            <AsyncCreatableSelect
              isClearable
              noOptionsMessage={() => "Vui lòng chọn phim và rạp"}
              LoadingMessage={() => "searching..."}
              value={valueShowDate}
              options={optionShowDates}
              onChange={handleChangeShowDate}
              cacheOptions
              loadOptions={loadOptionShowDates}
              formatCreateLabel={() => undefined}
              placeholder="Ngày xem"
            />
          </div>
          <div className="col-sm-6 col-lg-2 px-2 py-2">
            <AsyncCreatableSelect
              isClearable
              noOptionsMessage={() => "Vui lòng chọn phim, rạp và ngày chiếu"}
              LoadingMessage={() => "searching..."}
              value={valueShowtime}
              options={optionShowtimes}
              onChange={handleChangeShowtime}
              cacheOptions
              loadOptions={loadOptionShowtimes}
              formatCreateLabel={() => undefined}
              placeholder="Xuất chiếu"
            />{" "}
          </div>
          <div
            className="col-lg-2 py-2 border-0"
            style={{ textAlign: "center" }}
          >
            <div className={disabled ? "no-drop" : "pointer"}>
              {handleBookSeatButton()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
