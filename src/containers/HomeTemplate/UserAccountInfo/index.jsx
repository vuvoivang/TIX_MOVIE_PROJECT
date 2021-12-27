import React, { useEffect } from "react";
import AccountTicketsBooked from "../../../components/AccountTicketsBooked";
import Footer from "../../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { fetchUserInfo } from "./modules/action";
import { useLocation } from "react-router";
import Loading from "../../../components/Loading";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
export default function UserAccountInfo() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const taiKhoan = useLocation().state;
  useEffect(() => {
    dispatch(fetchUserInfo({ taiKhoan: taiKhoan }));
    //eslint-disable-next-line
  }, []);
  const userInfo = useSelector((state) => state.userInfoReducer);
  //console.log(userInfo);
  const { loading } = userInfo;
  if (loading) {
    return (
      <div className={classes.root}>
        <Loading />
      </div>)
  }
  return (
    <div className="userAccountInfo">
      <AccountTicketsBooked userInfo={userInfo} />
      <Footer />
    </div>
  );
}
