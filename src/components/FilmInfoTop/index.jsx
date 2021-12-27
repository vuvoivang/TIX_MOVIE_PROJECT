import { Fade, Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./style.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
export default function FilmInfoTop(props) {
  const { film, filmList, idx } = props;
  const date = new Date(film.ngayKhoiChieu);
  //console.log(film);
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
          return <img key={index} alt="star" src="/images/star1.png" />;
        } else {
          return <img key={index} alt="half star" src="/images/star1.2.png" />;
        }
      });
    }
  };
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
    let index = filmList.findIndex((film) => film.maPhim === id);
    if (index !== -1) {
      setStateFilm({
        id: id,
        index: idx,
        trailer: filmList[index].trailer,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="detailMainTop">
      <div className="styleBlur">
        <img
          src={film.hinhAnh}
          alt="anh phim"
          className="posterLandscapeFilm"
          style={{ height: 620, backgroundSize: "contain" }}
        />
      </div>
      <div
        className="styleGradient"
        style={{
          background:
            "linear-gradient(to top, rgb(10, 32, 41), transparent 100%",
        }}
      ></div>
      <div className="detailMainInfo">
        <div className="col-sm-3 col-xs-4 filmPosterTop">
          <div
            className="row posterMain"
            style={{
              backgroundImage: `url('${film.hinhAnh}'), url('/images/default-film.webp)`,
            }}
          >
            <button
              className="playTrailerDetail showHover"
              type="button"
              onClick={() => handleOpen(film.maPhim, idx)}
            >
              <img alt="button play trailer" src="/images/play-video.png" />
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
        </div>
        <div className="col-sm-5 infoMain">
          <div>
            <span className="detailMainInfo1">
              {date.getDate() +
                "." +
                date.getMonth() +
                "." +
                date.getFullYear()}
            </span>
            <br></br>
          </div>
          <div className="parentInfo2">
            <span className="detailMainInfo2">
              <span className="ageType ageType-general">{`C${
                film.danhGia + 6
              }`}</span>
              <span>{film.tenPhim}</span>
            </span>
          </div>
          <div>
            <span className="detailMainInfo1">
              {50 + film.danhGia * 10} phút - {Math.floor(Math.random() * 10)}{" "}
              IMDb - 3D/Digital
            </span>
            <br />
          </div>
        </div>
        <div className="col-sm-2 circleStar">
          <div style={{ width: "130px", height: "130px", margin: "auto" }}>
            <CircularProgressbar
              value={Number(film.danhGia)}
              maxValue={10}
              text={Number(film.danhGia)}
              strokeWidth={7}
              styles={buildStyles({
                strokeLinecap: "butt",
                textColor: "white",
                pathColor: "#44c020",
                textSize: "38px",
                backgroundColor: "rgba(0,0,0,.4)",
              })}
            />
          </div>

          <div className="row star" id="starMain" style={{ marginTop: 10 }}>
            {renderStars(film.danhGia)}
          </div>
          <div className="row star">
            <span className="detailMainInfo1" style={{ marginTop: 10 }}>
              3 người đánh giá
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
