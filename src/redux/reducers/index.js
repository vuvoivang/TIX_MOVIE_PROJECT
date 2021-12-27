
import { combineReducers } from 'redux';
import authReducer from "../../containers/HomeTemplate/Login/modules/reducer"
import registerUserReducer from "../../containers/HomeTemplate/Register/modules/reducer"
import systemCinemaReducer from "../../components/Schedule/modules/reducer";
import newsReducer from "../../components/News/reducer";
import { fetchFilmListReducer, addFilmReducer, deleteFilmReducer, updateFilmReducer, addImageReducer } from "../../containers/AdminTemplate/FilmManagement/modules/reducer";
import { fetchUserListReducer, addUserReducer, deleteUserReducer, updateUserReducer } from "../../containers/AdminTemplate/UserManagement/modules/reducer";
import { fetchShowtimeReducer, fetchCinemaSystemReducer, fetchCinemaReducer, addShowTimeReducer } from "../../containers/AdminTemplate/ShowTimesManagement/modules/reducer";
import { fetchRoomListReducer, bookTicketReducer } from "../../containers/HomeTemplate/BookingTicket/modules/reducer";
import userInfoReducer from '../../containers/HomeTemplate/UserAccountInfo/modules/reducer';

const store = combineReducers({
    authReducer,
    fetchFilmListReducer,
    addFilmReducer,
    deleteFilmReducer,
    updateFilmReducer,
    fetchUserListReducer,
    addUserReducer,
    deleteUserReducer,
    updateUserReducer,
    fetchShowtimeReducer,
    fetchCinemaSystemReducer,
    fetchCinemaReducer,
    addShowTimeReducer,
    newsReducer,
    registerUserReducer,
    addImageReducer,
    systemCinemaReducer,
    fetchRoomListReducer,
    bookTicketReducer,
    userInfoReducer,
});
export default store;
