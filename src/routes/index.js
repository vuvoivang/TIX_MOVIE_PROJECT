import Home from "../containers/HomeTemplate/Home";
import Dashboard from "../containers/AdminTemplate/DashBoard";
import Login from "../containers/HomeTemplate/Login";
import Register from "../containers/HomeTemplate/Register";
import FilmDetail from "../containers/HomeTemplate/FilmDetail";
import BookingTicket from "../containers/HomeTemplate/BookingTicket";
import UserAccountInfo from "../containers/HomeTemplate/UserAccountInfo";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/login",
    component: Login,
  },
  {
    exact: false,
    path: "/register",
    component: Register,
  },
  {
    exact: false,
    path: "/film-detail/:id",
    component: FilmDetail,
  },
  {
    exact: false,
    path: "/bookticket/:id",
    component: BookingTicket
  },
  {
    exact: false,
    path: "/account-info/:taiKhoan",
    component: UserAccountInfo
  },

];

const routeAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
];
export { routeHome, routeAdmin };
