import * as actionTypes from "./constants";
import axios from "axios";

export const registerUser = (user) => {
    return (dispatch) => {
        dispatch(registerUserRequest())
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            method: "POST",
            data: user
        })
            .then((res) => {
                dispatch(registerUserSuccess(res.data))
            })
            .catch((err) => {
                dispatch(registerUserFailed(err))
            })
    }

}
export const setResetRegister = () => {
    return (dispatch) => {
        dispatch(registerUserReset())
    }
}
export const registerUserRequest = () => {
    return {
        type: actionTypes.REGISTER_REQUEST
    }
}
export const registerUserSuccess = (data) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: data
    }
}
export const registerUserFailed = (err) => {
    return {
        type: actionTypes.REGISTER_FAILED,
        payload: err
    }
}
export const registerUserReset = () => {
    return {
        type: actionTypes.REGISTER_RESET
    }
}