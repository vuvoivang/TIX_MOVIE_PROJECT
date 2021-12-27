import * as actionTypes from "./constant";
const initialState = {
    // loadingSys: false,
    // dataSys: null,
    // errSys: null,
    system: {
        loading: false,
        data: null,
        err: null,
    },
    agents: {
        loading: false,
        data: null,
        err: null,
    }

}
const systemCinemaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_SYSTEM_CINEMA_REQUEST:
            state.system.loading = true;
            state.system.data = null;
            state.system.err = null;
            return { ...state };
        case actionTypes.FETCH_SYSTEM_CINEMA_SUCCESS:
            state.system.loading = false;
            state.system.data = payload;
            state.system.err = null;
            return { ...state };
        case actionTypes.FETCH_SYSTEM_CINEMA_FAILED:
            state.system.loading = false;
            state.system.data = null;
            state.system.err = payload;
            return { ...state };

        case actionTypes.FETCH_SYSTEM_CINEMA_AGENTS_REQUEST:
            state.agents.loading = true;
            state.agents.data = null;
            state.agents.err = null;
            return { ...state };
        case actionTypes.FETCH_SYSTEM_CINEMA_AGENTS_SUCCESS:
            state.agents.loading = false;
            state.agents.data = payload;
            state.agents.err = null;
            return { ...state };
        case actionTypes.FETCH_SYSTEM_CINEMA_AGENTS_FAILED:
            state.agents.loading = false;
            state.agents.data = null;
            state.agents.err = payload;
            return { ...state };

        default:
            return { ...state };
    }
}
export default systemCinemaReducer;