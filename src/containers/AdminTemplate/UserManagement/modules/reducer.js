import * as actionTypes from "./constants"
const userList = {
    loading: false,
    data: null,
    err: null
}
export const fetchUserListReducer = (state = userList, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.FETCH_USER_LIST_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_USER_LIST_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_USER_LIST_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default: return { ...state };
    }
}

const addUser = {
    loading: false,
    data: null,
    err: null
}
export const addUserReducer = (state = addUser, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.ADD_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.ADD_USER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.ADD_USER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.ADD_USER_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default: return { ...state };
    }
}

const deleteUser = {
    loading: false,
    data: null,
    err: null
}
export const deleteUserReducer = (state = deleteUser, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.DELETE_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.DELETE_USER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.DELETE_USER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.DELETE_USER_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default: return { ...state };
    }
}


const updateUser = {
    loading: false,
    data: null,
    err: null
}
export const updateUserReducer = (state = updateUser, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.UPDATE_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.UPDATE_USER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.UPDATE_USER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.UPDATE_USER_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default: return { ...state };
    }
}