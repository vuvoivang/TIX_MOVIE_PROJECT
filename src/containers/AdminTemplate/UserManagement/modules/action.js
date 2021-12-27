import axios from "axios";
import * as actionTypes from "./constants";
export const fetchUserList = (group) => {
  return (dispatch) => {
    dispatch(fetchUserListRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${group}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(fetchUserListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUserListFailed(err));
      });
  };
};

export const fetchUserListRequest = () => {
  return {
    type: actionTypes.FETCH_USER_LIST_REQUEST,
  };
};
export const fetchUserListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchUserListFailed = (err) => {
  return {
    type: actionTypes.FETCH_USER_LIST_FAILED,
    payload: err,
  };
};

export const addUser = (user, group) => {
  let accessToken = "";

  if (localStorage.getItem("User")) {
    if (
      JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri"
    ) {
      accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
    }
  }
  return (dispatch) => {
    dispatch(addUserRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        alert("Thêm User Thành Công");
        dispatch(fetchUserList(group));
        dispatch(addUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addUserFailed(err));
      });
  };
};
export const addUserRequest = () => {
  return {
    type: actionTypes.ADD_USER_REQUEST,
  };
};
export const addUserSuccess = (data) => {
  return {
    type: actionTypes.ADD_USER_SUCCESS,
    payload: data,
  };
};
export const addUserFailed = (err) => {
  return {
    type: actionTypes.ADD_USER_FAILED,
    payload: err,
  };
};

export const deleteUser = (user, group) => {
  let accessToken = "";
  if (localStorage.getItem("User")) {
    if (
      JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "QuanTri"
    ) {
      accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
    }
  }
  return (dispatch) => {
    dispatch(deleteUserRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        alert("Xoá User Thành Công");
        dispatch(fetchUserList(group));
        dispatch(deleteUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(deleteUserFailed(err));
      });
  };
};
export const deleteUserRequest = () => {
  return {
    type: actionTypes.DELETE_USER_REQUEST,
  };
};
export const deleteUserSuccess = (data) => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: data,
  };
};
export const deleteUserFailed = (err) => {
  return {
    type: actionTypes.DELETE_USER_FAILED,
    payload: err,
  };
};

export const updateUser = (user, group) => {
  let accessToken = "";

  if (localStorage.getItem("User")) {

    accessToken = JSON.parse(localStorage.getItem("User")).accessToken;

  }
  return (dispatch) => {

    dispatch(updateUserRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        alert("Cập Nhật User Thành Công");
        dispatch(fetchUserList(group));
        dispatch(updateUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(updateUserFailed(err));
      });
  };
};
export const updateUserRequest = () => {
  return {
    type: actionTypes.UPDATE_USER_REQUEST,
  };
};
export const updateUserSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: data,
  };
};
export const updateUserFailed = (err) => {
  return {
    type: actionTypes.UPDATE_USER_FAILED,
    payload: err,
  };
};

export const setUserReset = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_USER_RESET,
    });
    dispatch({
      type: actionTypes.DELETE_USER_RESET,
    });
    dispatch({
      type: actionTypes.UPDATE_USER_RESET,
    });
  };
};
