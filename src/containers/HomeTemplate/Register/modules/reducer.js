import * as actionTypes from "./constants"

const registerUser = {
    loading: false,
    data: null,
    err: null
}

const registerUserReducer = (state = registerUser, { payload, type, ...action }) => {
    switch (type) {
        case actionTypes.REGISTER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.REGISTER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state }
        case actionTypes.REGISTER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state }
        case actionTypes.REGISTER_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state }
        default: return { ...state }
    }
}

export default registerUserReducer;