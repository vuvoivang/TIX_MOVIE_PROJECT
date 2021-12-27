import * as actionTypes from "./constant"

const userInfo = {
    loading: false,
    data: null,
    err: null
}

const userInfoReducer = (state = userInfo, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.FETCH_USER_INFO_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_USER_INFO_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state }
        case actionTypes.FETCH_USER_INFO_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state }

        default: return { ...state }
    }
}

export default userInfoReducer;
