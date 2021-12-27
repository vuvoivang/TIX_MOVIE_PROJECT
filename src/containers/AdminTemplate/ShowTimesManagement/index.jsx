import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  Select,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmList } from "../FilmManagement/modules/action";
import {
  addShowTime,
  fetchCinema,
  fetchCinemaSystem,
  fetchShowtimeFilm,
} from "./modules/action";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 240,
  },
}));

export default function ShowTimesManagement() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filmGroup, setFilmGroup] = useState("GP01");
  const [filmId, setFilmId] = useState("");
  const filmList = useSelector((state) => state.fetchFilmListReducer.data);
  const fetchFilmLoading = useSelector(
    (state) => state.fetchFilmListReducer.loading
  );
  const addShowTimeLoading = useSelector(
    (state) => state.addShowTimeReducer.loading
  );
  const [cinemaSystemItem, setCinemaSystemItem] = useState("");
  const [cinemaItem, setCinemaItem] = useState("");
  const [cinemaRoom, setCinemaRoom] = useState("");
  const [disableCinemaSystem, setDisableCinemaSystem] = useState(true);
  const [disableCinemaItem, setDisableCinemaItem] = useState(true);
  const [disableCinemaRoom, setDisableCinemaRoom] = useState(true);
  const [disableDateTime, setDisableDateTime] = useState(true);
  const [disablePrice, setDisablePrice] = useState(true);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const cinemaSystem = useSelector(
    (state) => state.fetchCinemaSystemReducer.data
  );
  const cinemaList = useSelector((state) => state.fetchCinemaReducer.data);
  const showTimesFilm = useSelector((state) => state.fetchShowtimeReducer.data);
  const fetchCinemaSystemLoading = useSelector(
    (state) => state.fetchCinemaSystemReducer.loading
  );
  const fetchCinemaListLoading = useSelector(
    (state) => state.fetchCinemaReducer.loading
  );
  const fetchShowTimesFilmLoading = useSelector(
    (state) => state.fetchShowtimeReducer.loading
  );
  const [showTimeItem, setShowTimeItem] = useState({
    maPhim: 0,
    ngayChieuGioChieu: "",
    maRap: "",
    giaVe: 0,
  });
  const [render, setRender] = useState(false);
  useEffect(() => {
    dispatch(fetchFilmList(filmGroup));
    if (filmId !== "") {
      dispatch(fetchShowtimeFilm(filmId));
      dispatch(fetchCinemaSystem());
    }
    if (cinemaSystemItem !== "") {
      dispatch(fetchCinema(cinemaSystemItem));
    }
    //eslint-disable-next-line
  }, [render]);
  const handleAfterEvent = () => {
    setCinemaSystemItem("");
    setCinemaItem("");
    setCinemaRoom("");
    setDisableCinemaSystem(true);
    setDisableCinemaItem(true);
    setDisableCinemaRoom(true);
    setDisableDateTime(true);
    setDisablePrice(true);
    setDisableSubmit(true);
  };
  const handleGroupFilm = (e) => {
    const value = e.target.value;
    setFilmGroup(value);
    setCinemaSystemItem("");
    setCinemaItem("");
    setCinemaRoom("");
    setRender(!render);
  };
  const renderData = () => {
    if (showTimesFilm) {
      return showTimesFilm.heThongRapChieu.map((item) => {
        return item.cumRapChieu.map((cumRap) => {
          return cumRap.lichChieuPhim.map((lichChieu, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">
                <img
                  style={{ height: 30, width: "auto" }}
                  src={item.logo}
                  alt=""
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                {item.maHeThongRap}
              </StyledTableCell>
              <StyledTableCell align="center">
                {cumRap.tenCumRap}
              </StyledTableCell>
              <StyledTableCell align="center">
                {lichChieu.tenRap}
              </StyledTableCell>
              <StyledTableCell align="center">
                {lichChieu.ngayChieuGioChieu}
              </StyledTableCell>
              <StyledTableCell align="center">
                {lichChieu.giaVe}
              </StyledTableCell>
            </StyledTableRow>
          ));
        });
      });
    } else {
      return (
        <StyledTableRow>
          <StyledTableCell colSpan={12} align="center">
            <h5 className="text-center">Chọn phim để coi thông tin rạp</h5>
          </StyledTableCell>
        </StyledTableRow>
      );
    }
  };
  const renderCinemaRoom = () => {
    if (cinemaList) {
      return cinemaList
        .filter((item) => item.maCumRap === cinemaItem)
        .map((item) => {
          return item.danhSachRap.map((room) => {
            return (
              <option key={room.maRap} value={`${room.maRap}`}>
                {" "}
                {room.tenRap}
              </option>
            );
          });
        });
    }
  };

  const handleFilmName = (e) => {
    const value = e.target.value;
    setFilmId(value);
    setShowTimeItem({
      ...showTimeItem,
      maPhim: e.target.value,
    });
    setDisableCinemaSystem(false);
    setRender(!render);
  };
  const handleCinemaSystem = (e) => {
    const value = e.target.value;
    setCinemaSystemItem(value);
    setDisableCinemaItem(false);
    setRender(!render);
  };
  const handleCinema = (e) => {
    const value = e.target.value;
    setCinemaItem(value);
    setDisableCinemaRoom(false);
    setRender(!render);
  };
  const handleCinemaRoom = (e) => {
    const value = e.target.value;
    setCinemaRoom(value);
    setDisableDateTime(false);
    setShowTimeItem({
      ...showTimeItem,
      maRap: e.target.value,
    });
  };
  const handleDataTime = (e) => {
    setShowTimeItem({
      ...showTimeItem,
      ngayChieuGioChieu: format(
        new Date(e.target.value),
        "dd/MM/yyyy hh:mm:ss"
      ),
    });
    setDisablePrice(false);
  };
  const handlePrice = (e) => {
    setShowTimeItem({
      ...showTimeItem,
      giaVe: e.target.value,
    });
    setDisableSubmit(false);
  };
  const handleAddShowTime = (e) => {
    e.preventDefault();
    dispatch(addShowTime(showTimeItem, filmId));
    handleAfterEvent();
    setRender(!render);
  };
  const handleLoading = () => {
    if (fetchFilmLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (fetchCinemaSystemLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (fetchCinemaListLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (fetchShowTimesFilmLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (addShowTimeLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
  };
  return (
    <div>
      {handleLoading()}
      <FormControl variant="outlined" style={{ width: 100 }}>
        <Select
          native
          className={classes.formControl}
          defaultValue="GP01"
          onChange={handleGroupFilm}
        >
          <option value={"GP01"}>GP01</option>
          <option value={"GP02"}>GP02</option>
          <option value={"GP03"}>GP03</option>
        </Select>
      </FormControl>
      <Grid container>
        <Grid item xs={12}>
          <FormControl
            variant="outlined"
            style={{ width: 500 }}
            className={classes.formControl}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Chọn Phim
            </InputLabel>
            <Select
              native
              value={filmId}
              onChange={handleFilmName}
              label="Chọn Phim"
            >
              <option aria-label="None" value="" />
              {filmList
                ? filmList?.map((item) => (
                    <option key={item.maPhim} value={`${item.maPhim}`}>
                      {" "}
                      {item.tenPhim}
                    </option>
                  ))
                : ""}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} className="mt-1">
          <FormControl
            variant="outlined"
            style={{ width: 200 }}
            className={classes.formControl}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Chọn Hệ Thống Rạp
            </InputLabel>
            <Select
              disabled={disableCinemaSystem}
              native
              value={cinemaSystemItem}
              onChange={handleCinemaSystem}
              label="Chọn Hệ Thống Rạp"
            >
              <option aria-label="None" value="" />
              {cinemaSystem
                ? cinemaSystem?.map((item) => (
                    <option
                      key={item.maHeThongRap}
                      value={`${item.maHeThongRap}`}
                    >
                      {" "}
                      {item.tenHeThongRap}
                    </option>
                  ))
                : ""}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} className="mt-1">
          <FormControl
            variant="outlined"
            style={{ width: 360 }}
            className={classes.formControl}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Chọn Cụm Rạp
            </InputLabel>
            <Select
              disabled={disableCinemaItem}
              native
              value={cinemaItem}
              onChange={handleCinema}
              label="Chọn Cụm Rạp"
            >
              <option aria-label="None" value="" />
              {cinemaList
                ? cinemaList?.map((item) => (
                    <option key={item.maCumRap} value={`${item.maCumRap}`}>
                      {" "}
                      {item.tenCumRap}
                    </option>
                  ))
                : ""}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Chọn Rạp
            </InputLabel>
            <Select
              disabled={disableCinemaRoom}
              native
              value={cinemaRoom}
              onChange={handleCinemaRoom}
              label="Chọn Rạp"
            >
              <option aria-label="None" value="" />
              {renderCinemaRoom()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} className="mt-1">
          <form className={classes.container} noValidate>
            <TextField
              variant="outlined"
              disabled={disableDateTime}
              id="datetime-local"
              label="Date-Time"
              type="datetime-local"
              onChange={handleDataTime}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            style={{ width: 180 }}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Giá Tiền
            </InputLabel>
            <Select
              native
              label="Giá Tiền"
              onChange={handlePrice}
              disabled={disablePrice}
            >
              <option aria-label="None" value="" />
              <option value={75000}>75,000 VND</option>
              <option value={105000}>105,000 VND</option>
              <option value={145000}>145,000 VND</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.formControl}
            onClick={handleAddShowTime}
            disabled={disableSubmit}
            variant="contained"
          >
            Tạo Lịch Chiếu
          </Button>
        </Grid>
        <Grid item xs={12} className="mt-2">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">Hệ Thống Rạp</StyledTableCell>
                  <StyledTableCell align="center">Cụm Rạp</StyledTableCell>
                  <StyledTableCell align="center">Tên Rạp</StyledTableCell>
                  <StyledTableCell align="center">Ngày Chiếu</StyledTableCell>
                  <StyledTableCell align="center">Giá Tiền</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderData()}</TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
