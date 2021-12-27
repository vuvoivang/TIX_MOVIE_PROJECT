import axios from "axios";
import * as actionTypes from "./constants";
export const fetchLogin = (user, history) => {
    return (dispatch) => {
        dispatch(actAuthRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: user,
        })
            .then((res) => {
                localStorage.setItem("User", JSON.stringify(res.data));
                dispatch(actAuthSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actAuthFailed(err));
            })
    }
}
export const resetAuth = () => {
    return (dispatch) => {
        dispatch(actAuthReset());
    }
}

const actAuthRequest = () => {
    return {
        type: actionTypes.AUTH_REQUEST,
    }
}
const actAuthReset = () => {
    return {
        type: actionTypes.AUTH_RESET,
    }
}
const actAuthSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: data
    }
}
const actAuthFailed = (err) => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: err
    }
}