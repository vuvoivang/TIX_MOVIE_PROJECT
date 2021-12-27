import React, { Fragment, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, setResetRegister } from "./modules/action";
import { Alert } from "@material-ui/lab";
import "./style.css";
import Loading from "../../../components/Loading";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cybersoft.edu.vn/">
        CyberSoft
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const bg = process.env.PUBLIC_URL + "images/backapp.jpg";
const useStyles = makeStyles((theme) => ({
  bgRoot: {
    marginTop: theme.spacing(8),
    background: `url(${bg})`,
    height: "100vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    background: "#fff",
    padding: theme.spacing(4, 2, 2, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    border: "solid 1px rgba(0,0,0,0.3)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#82ada9",
    "&:hover": {
      background: "#fff",
      color: "#82ada9",
      border: "solid 1px #82ada9",
    },
  },
}));

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const registerErr = useSelector((state) => state.registerUserReducer.err);
  const registerSuccess = useSelector(
    (state) => state.registerUserReducer.data
  );
  const registerLoading = useSelector(
    (state) => state.registerUserReducer.loading
  );
  const logo = process.env.PUBLIC_URL + "/images/logo.png";
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [emptyUsernameNotice, setEmptyUsernameNotice] = useState(false);
  const [emptyPasswordNotice, setEmptyPasswordNotice] = useState(false);
  const [isEmailFormatNotice, setIsEmailFormatNotice] = useState(false);
  const [emptyFullNameNotice, setEmptyFullNameNotice] = useState(false);
  const [registerUserItem, setRegisterUserItem] = useState({
    hoTen: "",
    taiKhoan: "",
    email: "",
    matKhau: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    soDt: "",
  });
  const handleDisableNotice = () => {
    setEmptyUsernameNotice(false);
    setIsValidPhoneNumber(false);
    setEmptyPasswordNotice(false);
    setIsEmailFormatNotice(false);
    setEmptyFullNameNotice(false);
  };
  const handleResetReducer = () => {
    dispatch(setResetRegister());
  };
  const handleChangeRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterUserItem({
      ...registerUserItem,
      [name]: value,
    });
    if (registerUserItem.taiKhoan !== "") {
      setEmptyUsernameNotice(false);
    }
    if (registerUserItem.matKhau !== "") {
      setEmptyPasswordNotice(false);
    }
    if (registerUserItem.hoTen !== "") {
      setEmptyFullNameNotice(false);
    }
    if (
      registerUserItem.taiKhoan !== "" &&
      registerUserItem.matKhau !== "" &&
      registerUserItem.hoTen !== "" &&
      validEmail === true &&
      validPhone === true
    ) {
      setIsDisable(false);
    }
  };
  const validationPhoneNumber = () => {
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(registerUserItem.soDt)) {
      setIsValidPhoneNumber(false);
      setValidPhone(true);
    } else {
      setIsValidPhoneNumber(true);
      setValidPhone(false);
      setIsDisable(true);
    }
  };
  if (registerErr) {
    setTimeout(handleResetReducer, 2000);
  }
  const handleValidationEmptyUserName = () => {
    if (registerUserItem.taiKhoan === "") {
      setEmptyUsernameNotice(true);
    }
  };
  const handleValidationEmptyPassword = () => {
    if (registerUserItem.matKhau === "") {
      setEmptyPasswordNotice(true);
    }
  };
  const handleValidationEmptyFullName = () => {
    if (registerUserItem.hoTen === "") {
      setEmptyFullNameNotice(true);
    }
  };
  const handleValidationEmail = () => {
    const mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (registerUserItem.email.match(mailFormat)) {
      setIsEmailFormatNotice(false);
      setValidEmail(true);
    } else {
      setIsEmailFormatNotice(true);
      setValidEmail(false);
      setIsDisable(true);
    }
  };
  useEffect(() => {
    if (
      registerUserItem.taiKhoan !== "" &&
      registerUserItem.matKhau !== "" &&
      registerUserItem.hoTen !== "" &&
      validEmail === true &&
      validPhone === true
    ) {
      setIsDisable(false);
    }
    //eslint-disable-next-line
  }, [validPhone]);
  useEffect(() => {
    if (
      registerUserItem.taiKhoan !== "" &&
      registerUserItem.matKhau !== "" &&
      registerUserItem.hoTen !== "" &&
      validEmail === true &&
      validPhone === true
    ) {
      setIsDisable(false);
    }
    //eslint-disable-next-line
  }, [validEmail]);
  const handleValidationNotice = () => {
    if (emptyFullNameNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Họ Tên không được để trống</Alert>;
    }
    if (isValidPhoneNumber) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Số điện thoại không đúng</Alert>;
    }
    if (emptyUsernameNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Tài khoản không được để trống</Alert>;
    }
    if (emptyPasswordNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Mật Khẩu không được để trống</Alert>;
    }
    if (isEmailFormatNotice) {
      setTimeout(handleDisableNotice, 1500);
      return <Alert severity="error">Không đúng định dạng email</Alert>;
    }
  };
  const handleRegisterUser = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerUserItem));
  };
  if (registerSuccess) {
    return (
      <div id="card" className="animated fadeIn">
        <div id="upper-side">
          {/*?xml version="1.0" encoding="utf-8"?*/}
          {/* Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          <h3 id="status">Success</h3>
        </div>
        <div id="lower-side">
          <p id="message">
            Congratulations, your account has been successfully created.
          </p>
          <NavLink to={`/login`} id="contBtn">
            Login Now
          </NavLink>
        </div>
      </div>
    );
  }
  if (registerLoading) {
    return (
      <div className={classes.root}>
        <Loading />
      </div>
    );
  }
  return (
    <Fragment>
      <div className={classes.bgRoot}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Avatar className="p-1 mt-1" alt="Logo" src={logo} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {registerErr ? (
              <Alert severity="error">{registerErr?.response.data}</Alert>
            ) : (
              ""
            )}
            {handleValidationNotice()}
            <form
              className={classes.form}
              onSubmit={handleRegisterUser}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="hoTen"
                    variant="outlined"
                    fullWidth
                    label="Họ Tên"
                    onChange={handleChangeRegister}
                    onBlur={handleValidationEmptyFullName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="taiKhoan"
                    variant="outlined"
                    fullWidth
                    label="Tài Khoản"
                    onChange={handleChangeRegister}
                    onBlur={handleValidationEmptyUserName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    variant="outlined"
                    fullWidth
                    label="Email"
                    onChange={handleChangeRegister}
                    onBlur={handleValidationEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="matKhau"
                    label="Mật Khẩu"
                    type="password"
                    onChange={handleChangeRegister}
                    onBlur={handleValidationEmptyPassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="soDt"
                    variant="outlined"
                    fullWidth
                    label="Số Điện Thoại"
                    onChange={handleChangeRegister}
                    onBlur={validationPhoneNumber}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isDisable}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <NavLink
                    to="/login"
                    variant="body2"
                    style={{ color: "#82ada9" }}
                  >
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
              <Box className="mt-4">
                <Copyright />
              </Box>
            </form>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
