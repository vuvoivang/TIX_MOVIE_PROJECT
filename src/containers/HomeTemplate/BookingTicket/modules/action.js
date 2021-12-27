import axios from "axios";
import * as actionTypes from "./constants";

export const fetchRoomList = (id) => {
    return (dispatch) => {
        dispatch(fetchRoomListRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method: "GET",
        })
            .then((res) => {
                dispatch(fetchRoomListSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchFilmListFailed(err));
            })
    }
};

export const fetchRoomListRequest = () => {
    return {
        type: actionTypes.FETCH_ROOM_LIST_REQUEST,
    };
};

export const fetchRoomListSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ROOM_LIST_SUCCESS,
        payload: data
    };
};

export const fetchFilmListFailed = (err) => {
    return {
        type: actionTypes.FETCH_ROOM_LIST_FAILED,
        payload: err
    };
};

export const bookTicket = (ticket) => {
    let accessToken = "";

    if (localStorage.getItem("User")) {
        if (
            JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "KhachHang"
        ) {
            accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
        }
    }

    return (dispatch) => {
        dispatch(bookTicketRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            method: "POST",
            data: ticket,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                dispatch(bookTicketSuccess(res.data));
            })
            .catch((err) => {
                dispatch(bookTicketFailed(err));
            })
    }
}

export const bookTicketRequest = () => {
    return {
        type: actionTypes.BOOK_TICKET_REQUEST
    }
}

export const bookTicketSuccess = (data) => {
    return {
        type: actionTypes.BOOK_TICKET_SUCCESS,
        payload: data
    }
}

export const bookTicketFailed = (err) => {
    return {
        type: actionTypes.BOOK_TICKET_FAILED,
        payload: err,
    }
}
