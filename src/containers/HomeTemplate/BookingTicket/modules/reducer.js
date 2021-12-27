import * as actionTypes from "./constants";

const roomList = {
    loading: false,
    data: null,
    err: null
}

export const fetchRoomListReducer = (state = roomList, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_ROOM_LIST_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_ROOM_LIST_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_ROOM_LIST_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default:
            return { ...state };
    }
}

const bookTicket = {
    loading: false,
    data: null,
    err: null
}

export const bookTicketReducer = (state = bookTicket, { type, payload, ...action }) => {
    switch (type) {
        case actionTypes.BOOK_TICKET_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.BOOK_TICKET_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.BOOK_TICKET_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default:
            return { ...state };
    }
}
