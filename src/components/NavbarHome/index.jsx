import { HashLink as Link } from "react-router-hash-link";
import React, { Fragment, useState } from "react";
import "./style.css";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { NavLink } from "react-router-dom";
export default function NavbarHome() {
  const user = JSON.parse(localStorage.getItem("User"));
  // eslint-disable-next-line
  const [render, setRender] = useState(false);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 15,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 5,
      textAlign: "center",
      width: 500,
    },
  }));

  const classes = useStyles();
  const [openLogout, setOpenLogout] = React.useState(false);

  const handleOpenLogout = () => {
    setOpenLogout(true);
  };

  const handleCloseLogout = () => {
    localStorage.clear();
    setOpenLogout(false);
  };

  const [openCheckout, setOpenCheckout] = React.useState(false);

  const handleOpenCheckout = () => {
    setOpenCheckout(true);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };

  const renderStatus = () => {
    if (user) {
      return (
        <Fragment>
          <NavLink
            to={{
              pathname: "/account-info/" + user.taiKhoan,
              state: user.taiKhoan,
            }}
            className="nav-item border-right"
          >
            <div className="nav-link d-flex align-items-center">
              <Avatar src="https://i.pravatar.cc/32" alt="avatar" />
              <span className="user ml-1 px-1">{user.hoTen}</span>
            </div>
          </NavLink>
          <li className="nav-item">
            <div className="nav-link d-flex">
              {/* thong bao Modal kiem tra co dang xuat khong */}
              <Fragment>
                <Button
                  type="button"
                  className="logout"
                  onClick={handleOpenCheckout}
                >
                  Đăng Xuất
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openCheckout}
                  onClose={handleCloseCheckout}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openCheckout}>
                    <div className={classes.paper}>
                      <HelpOutlineIcon
                        style={{
                          color: "rgb(165 194 187)",
                          fontSize: 100,
                          margin: "20px 0",
                        }}
                      />
                      <h2
                        style={{
                          fontWeight: 600,
                          marginBottom: 20,
                        }}
                      >
                        Bạn có chắc chắn muốn đăng xuất ?
                      </h2>

                      <Button
                        className="logout mr-4"
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={handleOpenLogout}
                      >
                        Đồng Ý
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={handleCloseCheckout}
                      >
                        Hủy
                      </Button>
                    </div>
                  </Fade>
                </Modal>
              </Fragment>

              {/* thong bao modal cam on vi su dung TIX */}
              <Fragment>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openLogout}
                  onClose={handleCloseLogout}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openLogout}>
                    <div className={classes.paper}>
                      <CheckRoundedIcon
                        style={{
                          color: "rgb(95 216 95)",
                          fontSize: 90,
                          margin: "20px 0",
                          border: "5px solid rgb(204 255 204)",
                          borderRadius: "50%",
                        }}
                      />
                      <h2
                        style={{
                          fontWeight: 600,
                          marginBottom: 15,
                        }}
                      >
                        Đã đăng xuất
                      </h2>
                      <p
                        style={{
                          fontSize: 20,
                        }}
                      >
                        Cảm ơn bạn đã sử dụng TIX
                      </p>
                      <Link to="/">
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          style={{
                            padding: "10px 30px",
                          }}
                          onClick={() => {
                            setRender(true);
                            localStorage.clear();
                          }}
                        >
                          OK
                        </Button>
                      </Link>
                    </div>
                  </Fade>
                </Modal>
              </Fragment>
            </div>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item border-right">
            <Link className="nav-link d-flex" to="/login">
              <i className="fa fa-user-circle user-icon" />
              <span className="mt-1 ml-1 px-1">Đăng Nhập</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex" to="/register">
              <span className="mt-1 ml-1 px-1">Đăng Ký</span>
            </Link>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <header id="header" className="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link
          className="navbar-brand ml-3 col-5 col-md-2 col-lg-3 col-xl-4"
          to="/"
        >
          <img src="/images/logo.png" target="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler col-1 mr-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse col-md-10 col-lg-9 col-xl-8"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav item-left col-md-7">
            <li className="nav-item">
              <Link className="nav-link" to="/#intro-film">
                Lịch Chiếu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#schedule">
                Cụm rạp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#news">
                Tin tức
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#application">
                Ứng dụng
              </Link>
            </li>
          </ul>
          <ul
            className="navbar-nav item-right col-md-5"
            style={{ justifyContent: "center" }}
          >
            {renderStatus()}
          </ul>
        </div>
      </nav>
    </header>
  );
}
