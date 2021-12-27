import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { fetchFilmList } from "../../containers/AdminTemplate/FilmManagement/modules/action";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import Button from "@material-ui/core/Button";
import FilmSelection from "../FilmSelection";
import { Link, NavLink } from "react-router-dom";

export default function IntroFilm() {
  const [IDGroup, setIDGroup] = useState("GP01");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmList(IDGroup));
    //eslint-disable-next-line
  }, [IDGroup]);

  const checkTypeGroup = (type) => {
    if (type === "showing") setIDGroup("GP01");
    else if (type === "coming") setIDGroup("GP03");
  };

  const filmListReducer = useSelector(
    (filmListReducer) => filmListReducer.fetchFilmListReducer
  );
  //console.log(filmListReducer.data);
  // Tao 1 mang 2 chieu danh sach phim, moi phan tu chua 8 film de lam thanh 1 slider
  let filmList;
  if (filmListReducer.data && filmListReducer.data.length > 0) {
    filmList = new Array(Math.floor(filmListReducer.data.length / 8) + 1);
    filmList.forEach((filmSlider) => {
      filmSlider = [];
    });

    for (let i = 0; i < filmList.length - 1; i++) {
      filmList[i] = filmListReducer.data.slice(i * 8, (i + 1) * 8);
    }
    let beg = (filmList.length - 1) * 8;
    filmList[filmList.length - 1] = filmListReducer.data.slice(
      beg,
      filmListReducer.data.length
    );
  }

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "transparent",
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [stateFilm, setStateFilm] = useState({
    id: null,
    index: null,
    trailer: null,
  });

  const handleOpen = (id, idx) => {
    setOpen(true);
    let index = filmListReducer.data.findIndex((film) => film.maPhim === id);
    if (index !== -1) {
      setStateFilm({
        id: id,
        index: idx,
        trailer: filmListReducer.data[index].trailer,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const renderStars = (point) => {
    if (point > 0) {
      // Tao 1 mang de xet star tu diem danh gia
      let arr = [];
      for (let i = 2; i <= point; i += 2) {
        arr.push(i);
      }

      // Them -1 vao mang cho truong hop star 1/2
      if (Number.isInteger(point) && point % 2 !== 0) {
        arr.push(-1);
      }

      return arr.map((star, index) => {
        if (star !== -1) {
          return <img key={index} alt="" src="./images/star1.png" />;
        } else {
          return <img key={index} alt="" src="./images/star1.2.png" />;
        }
      });
    }
  };

  let count = 0;

  const renderFilm = (film) => {
    let idx = count++;
    if (film) {
      return (
        <div className="col-lg-3 col-md-4 col-6 pb-5">
          <div className="item">
            <div className="filmThumbnail">
              <NavLink
                to={{
                  pathname: "/film-detail/" + film.maPhim,
                  state: {
                    film,
                    filmList: filmListReducer.data,
                    idx,
                  },
                }}
              >
                <img
                  alt={film.biDanh}
                  src={film.hinhAnh}
                  className="film-poster border rounded imgFilmThumbnail"
                />
              </NavLink>

              <div className="rating">
                <p>{film.danhGia} </p>
                <div className="star">{renderStars(film.danhGia)}</div>
              </div>
              <div className="hidden-content">
                <div>
                  <button
                    className="play-trailer"
                    type="button"
                    onClick={() => handleOpen(film.maPhim, idx)}
                  >
                    <img alt="" src="./images/play-video.png" />
                  </button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={
                      film.maPhim === stateFilm.id && idx === stateFilm.index
                        ? open
                        : false
                    }
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade
                      in={
                        film.maPhim === stateFilm.id && idx === stateFilm.index
                          ? open
                          : false
                      }
                    >
                      <div className={classes.paper}>
                        <div className="trailer_container">
                          <button
                            type="button"
                            className="close"
                            onClick={handleClose}
                          >
                            <HighlightOffOutlinedIcon
                              style={{
                                color: "white",
                                fontSize: 50,
                              }}
                            />
                          </button>

                          <iframe
                            className="responsive_iframe"
                            src={`${stateFilm.trailer}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </Fade>
                  </Modal>
                </div>
                <Link
                  to={{
                    pathname: "/film-detail/" + film.maPhim,
                    state: {
                      film,
                      filmList: filmListReducer.data,
                      idx,
                    },
                  }}
                  className="background_hidden"
                  style={{ display: "block" }}
                />
                <button className="btn">
                  <NavLink
                    to={{
                      pathname: "/film-detail/" + film.maPhim,
                      state: {
                        film,
                        filmList: filmListReducer.data,
                        idx,
                      },
                    }}
                    className="text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    MUA VÉ
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="content-text">
              <div className="film-name">
                <span className="btn red-age text-white">{`C${
                  film.danhGia + 6
                }`}</span>
                {` ${film.tenPhim}`}
              </div>
              <div className="time-film mt-1">
                {50 + film.danhGia * 10} phút
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderFilmSlider = (filmSlider) => {
    if (filmSlider && filmSlider.length > 0) {
      return filmSlider.map((film, index) => {
        return <React.Fragment key={index}>{renderFilm(film)}</React.Fragment>;
      });
    }
  };

  const renderFilmList = () => {
    if (filmList && filmList.length > 0) {
      return filmList.map((filmSlider, index) => {
        return (
          <div
            key={index}
            className={index === 0 ? "carousel-item active" : "carousel-item"}
            data-interval={5000}
          >
            <div className="container">
              <div className="row">{renderFilmSlider(filmSlider)}</div>
            </div>
          </div>
        );
      });
    }
  };

  const renderArrow = (id) => {
    if (filmListReducer.data && filmListReducer.data.length > 0) {
      return (
        <React.Fragment>
          <a
            className="carousel-control-prev"
            href={`#${id}`}
            role="button"
            data-slide="prev"
            style={{
              justifyContent: "flex-end",
            }}
          >
            <span className="sr-only">Previous</span>
            <img
              style={{
                width: 50,
                height: 50,
                marginRight: 20,
              }}
              alt=""
              src="./images/back-session.png"
              className="back-img"
            />
          </a>
          <a
            className="carousel-control-next"
            href={`#${id}`}
            role="button"
            data-slide="next"
            style={{
              justifyContent: "flex-start",
            }}
          >
            <span className="sr-only">Next</span>
            <img
              style={{
                width: 50,
                height: 50,
                marginLeft: 20,
              }}
              alt=""
              src="./images/next-session.png"
              className="next-img"
            />
          </a>
        </React.Fragment>
      );
    }
  };

  // render Intro-Film
  return (
    <section id="intro-film" className="intro-film">
      <FilmSelection filmList={filmListReducer.data} />

      <div className="list-film">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#showing"
              role="tab"
            >
              <Button
                type="button"
                className="button-link"
                onClick={() => checkTypeGroup("showing")}
              >
                Đang Chiếu
              </Button>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#coming" role="tab">
              <Button
                type="button"
                className="button-link"
                onClick={() => checkTypeGroup("coming")}
              >
                Sắp Chiếu
              </Button>
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="showing"
            role="tabpanel"
          >
            <div
              id="carousel_showing"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner mt-5">{renderFilmList()}</div>
              {renderArrow("carousel_showing")}
            </div>
          </div>
          <div className="tab-pane fade" id="coming" role="tabpanel">
            <div
              id="carousel_coming"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner mt-5">{renderFilmList()}</div>
              {renderArrow("carousel_coming")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
