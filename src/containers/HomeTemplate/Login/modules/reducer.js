import * as actionTypes from "./constants";
const initialState = {
    loading: false,
    data: null,
    err: null,
}
const authReducer = (state = initialState, { type, payload, ...action }) => {
    switch (type) {
        case actionTypes.AUTH_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.AUTH_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.AUTH_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.AUTH_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}
export default authReducer;