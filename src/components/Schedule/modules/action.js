import axios from "axios";
import * as actionTypes from "./constant";

export const fetchSystemCinema = () => {
  return (dispatch) => {
    dispatch(fetchSystemCinemaRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      // then,catch,finally
      .then((res) => {
        dispatch(fetchSystemCinemaSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchSystemCinemaFailed(err));
      });
  };
};

export const fetchSystemCinemaRequest = () => {
  return {
    type: actionTypes.FETCH_SYSTEM_CINEMA_REQUEST,
  };
};
export const fetchSystemCinemaSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SYSTEM_CINEMA_SUCCESS,
    payload: data,
  };
};
export const fetchSystemCinemaFailed = (err) => {
  return {
    type: actionTypes.FETCH_SYSTEM_CINEMA_FAILED,
    payload: err,
  };
};

export const fetchSystemCinemaAgents = () => {
  return (dispatch) => {
    dispatch(fetchSystemCinemaAgentsRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01
                `,
      method: "GET",
    })
      .then((res) => {
        dispatch(fetchSystemCinemaAgentsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchSystemCinemaAgentsFailed(err));
      });
  };
};

export const fetchSystemCinemaAgentsRequest = () => {
  return {
    type: actionTypes.FETCH_SYSTEM_CINEMA_AGENTS_REQUEST,
  };
};
export const fetchSystemCinemaAgentsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SYSTEM_CINEMA_AGENTS_SUCCESS,
    payload: data,
  };
};
export const fetchSystemCinemaAgentsFailed = (err) => {
  return {
    type: actionTypes.FETCH_SYSTEM_CINEMA_AGENTS_FAILED,
    payload: err,
  };
};
