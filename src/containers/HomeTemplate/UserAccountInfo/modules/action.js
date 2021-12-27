import * as actionTypes from "./constant";
import axios from "axios";

export const fetchUserInfo = (tenTaiKhoan) => {
    return (dispatch) => {
        dispatch(fetchUserInfoRequest())
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            method: "POST",
            data: tenTaiKhoan


        })
            .then((res) => {
                dispatch(fetchUserInfoSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchUserInfoFailed(err))
            })
    }

}

export const fetchUserInfoRequest = () => {
    return {
        type: actionTypes.FETCH_USER_INFO_REQUEST
    }
}
export const fetchUserInfoSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USER_INFO_SUCCESS,
        payload: data
    }
}
export const fetchUserInfoFailed = (err) => {
    return {
        type: actionTypes.FETCH_USER_INFO_FAILED,
        payload: err
    }
}
