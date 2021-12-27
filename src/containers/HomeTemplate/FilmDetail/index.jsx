import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import FilmInfoBottom from "../../../components/FilmInfoBottom";
import FilmInfoTop from "../../../components/FilmInfoTop";
import Footer from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import ScrollTopArrow from "../../../components/ScrollTopArrow";
import { fetchShowtimeFilm } from "../../AdminTemplate/ShowTimesManagement/modules/action";
import "./style.css";
import { makeStyles } from "@material-ui/core";
import Loading from "../../../components/Loading";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
export default function FilmDetail() {
  // const { film, filmList, idx } = useLocation().state;
  const classes = useStyles()
  const dispatch = useDispatch();
  const dataPass = useLocation().state;
  const { film, filmList, idx } = dataPass;
  useEffect(() => {
    dispatch(fetchShowtimeFilm(film.maPhim));
    //eslint-disable-next-line
  }, []);
  const showTimesFilm = useSelector((state) => state.fetchShowtimeReducer);
  const { loading } = showTimesFilm;
  if (loading) {
    return (
      <div className={classes.root}>
        <Loading />
      </div>)
  }
  return (
    <div className="film-detail">
      <NavbarHome />
      <div className="filmDetailContent">
        <FilmInfoTop film={film} filmList={filmList} idx={idx} />
        <FilmInfoBottom film={film} showTimesFilm={showTimesFilm.data} />
      </div>
      <Footer />
      <ScrollTopArrow />
    </div>
  );
}
