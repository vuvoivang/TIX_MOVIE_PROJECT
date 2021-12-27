import * as actionTypes from "./constants";
const fetchShowtime = {
  loading: false,
  data: null,
  err: null,
};
export const fetchShowtimeReducer = (
  state = fetchShowtime,
  { payload, type, ...action }
) => {
  switch (type) {
    case actionTypes.FETCH_FILM_SHOWTIME_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_FILM_SHOWTIME_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_FILM_SHOWTIME_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    case actionTypes.FETCH_FILM_SHOWTIME_RESET:
      state.loading = false;
      state.data = null;
      state.err = null;
      return { ...state };
    default:
      return { ...state };
  }
};

const fetchCinema = {
  loading: false,
  data: null,
  err: null,
};
export const fetchCinemaReducer = (
  state = fetchCinema,
  { payload, type, ...action }
) => {
  switch (type) {
    case actionTypes.FETCH_CINEMA_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_CINEMA_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_CINEMA_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return { ...state };
  }
};

const fetchCinemaSystem = {
  loading: false,
  data: null,
  err: null,
};
export const fetchCinemaSystemReducer = (
  state = fetchCinemaSystem,
  { payload, type, ...action }
) => {
  switch (type) {
    case actionTypes.FETCH_CINEMA_SYSTEM_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_CINEMA_SYSTEM_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_CINEMA_SYSTEM_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return { ...state };
  }
};

const addShowTime = {
  loading: false,
  data: null,
  err: null,
};
export const addShowTimeReducer = (
  state = addShowTime,
  { payload, type, ...action }
) => {
  switch (type) {
    case actionTypes.ADD_SHOWTIME_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actionTypes.ADD_SHOWTIME_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case actionTypes.ADD_SHOWTIME_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
