import axios from "axios";
import * as actionTypes from "./constants";
export const fetchShowtimeFilm = (filmId) => {
  return (dispatch) => {
    dispatch(fetchShowtimeFilmRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmId}`,
      method: "GET",
    })
      .then((res) => {
        res.data.hinhAnh = res.data.hinhAnh.replace(/http/i, 'https');
        res.data.heThongRapChieu.forEach((item) => {
          item.logo = item.logo.replace(/http/i, 'https');
        })
        dispatch(fetchShowtimeFilmSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchShowtimeFilmFailed(err));
      });
  };
};

export const fetchShowtimeFilmRequest = () => {
  return {
    type: actionTypes.FETCH_FILM_SHOWTIME_REQUEST,
  };
};
export const fetchShowtimeFilmSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FILM_SHOWTIME_SUCCESS,
    payload: data,
  };
};
export const fetchShowtimeFilmFailed = (err) => {
  return {
    type: actionTypes.FETCH_FILM_SHOWTIME_FAILED,
    payload: err,
  };
};

export const fetchCinemaSystem = () => {
  return (dispatch) => {
    dispatch(fetchCinemaSystemRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    })
      .then((res) => {
       res.data.forEach((item) => {
          item.logo = item.logo.replace(/http/i, 'https');
        })
        dispatch(fetchCinemaSystemSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCinemaSystemFailed(err));
      });
  };
};

export const fetchCinemaSystemRequest = () => {
  return {
    type: actionTypes.FETCH_CINEMA_SYSTEM_REQUEST,
  };
};
export const fetchCinemaSystemSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CINEMA_SYSTEM_SUCCESS,
    payload: data,
  };
};
export const fetchCinemaSystemFailed = (err) => {
  return {
    type: actionTypes.FETCH_CINEMA_SYSTEM_FAILED,
    payload: err,
  };
};

export const fetchCinema = (cinemaSystem) => {
  return (dispatch) => {
    dispatch(fetchCinemaRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaSystem}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(fetchCinemaSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCinemaFailed(err));
      });
  };
};

export const fetchCinemaRequest = () => {
  return {
    type: actionTypes.FETCH_CINEMA_REQUEST,
  };
};
export const fetchCinemaSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CINEMA_SUCCESS,
    payload: data,
  };
};
export const fetchCinemaFailed = (err) => {
  return {
    type: actionTypes.FETCH_CINEMA_FAILED,
    payload: err,
  };
};

export const addShowTime = (showTime, filmId) => {
  let accessToken = "";
  if (localStorage.getItem("User")) {
    if (
      JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri"
    ) {
      accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
    }
  }
  return (dispatch) => {
    dispatch(addShowTimeRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: showTime,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        alert("Tạo lịch chiếu thành công");
        dispatch(fetchShowtimeFilm(filmId));
        dispatch(addShowTimeSuccess(res.data));
      })
      .catch((err) => {
        alert(err.response.data);
        dispatch(addShowTimeFailed(err));
      });
  };
};

export const addShowTimeRequest = () => {
  return {
    type: actionTypes.ADD_SHOWTIME_REQUEST,
  };
};
export const addShowTimeSuccess = (data) => {
  return {
    type: actionTypes.ADD_SHOWTIME_SUCCESS,
    payload: data,
  };
};
export const addShowTimeFailed = (err) => {
  return {
    type: actionTypes.ADD_SHOWTIME_FAILED,
    payload: err,
  };
};

export const setShowTimeReset = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_FILM_SHOWTIME_RESET,
    });
  };
};
