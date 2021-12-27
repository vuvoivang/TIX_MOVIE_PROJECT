import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  fade,
  makeStyles,
  useTheme,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import {
  Button,
  FormControl,
  Grid,
  LinearProgress,
  Select,
  TableHead,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  addFilm,
  fetchFilmList,
  deleteFilm,
  updateFilm,
  setFilmReset,
} from "./modules/action";
import { Alert } from "@material-ui/lab";
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    top: 0,
    right: 0,
  },
  searchBox: {
    width: "100%",
  },
  addBtn: {
    color: "#4BB543",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  input: {
    display: "none",
  },
  loadingRoot: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function FilmManagement() {
  const classes = useStyles2();
  const dispatch = useDispatch();
  const filmList = useSelector((state) => state.fetchFilmListReducer.data);
  const addFilmErr = useSelector((state) => state.addFilmReducer.err);
  const deleteFilmErr = useSelector((state) => state.deleteFilmReducer.err);
  const updateFilmErr = useSelector((state) => state.updateFilmReducer.err);
  const addImageErr = useSelector((state) => state.addImageReducer.err);
  const fetchFilmLoading = useSelector(
    (state) => state.fetchFilmListReducer.loading
  );
  const addFilmLoading = useSelector((state) => state.addFilmReducer.loading);
  const deleteFilmLoading = useSelector(
    (state) => state.deleteFilmReducer.loading
  );
  const updateFilmLoading = useSelector(
    (state) => state.updateFilmReducer.loading
  );
  const [page, setPage] = useState(0);
  const [handleAddFilm, setHandleAddFilm] = useState(false);
  const [isEditFilm, setIsEditFilm] = useState(false);
  const [editFilmItem, setEditFilmItem] = useState({});
  const [render, setRender] = useState(false);
  const [searchFilmName, setSearchFilmName] = useState("");
  const [filmGroup, setFilmGroup] = useState("GP01");
  const [isDisableAddFilm, setIsDisableAddFilm] = useState(true);
  const [filmItem, setFilmItem] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "test.png",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: 0,
  });
  const [fileImage, setFileImage] = useState({});
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  useEffect(() => {
    dispatch(fetchFilmList(filmGroup));
    // eslint-disable-next-line
  }, [render]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleEmptyRow = () => {
    if (filmList) {
      const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, filmList.length - page * rowsPerPage);
      return (
        emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )
      );
    }
  };
  const resetErrNotice = () => {
    dispatch(setFilmReset());
  };

  const renderErrNotice = () => {
    if (addFilmErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{addFilmErr?.response?.data}</Alert>;
    }
    if (deleteFilmErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{deleteFilmErr?.response?.data}</Alert>;
    }
    if (updateFilmErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{updateFilmErr?.response?.data}</Alert>;
    }
    if (addImageErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{addImageErr?.response?.data}</Alert>;
    }
  };
  const handleFile = (e) => {
    const name = e.target.name;
    const value = e.target.files[0].name;
    const object = e.target.files[0];
    setFilmItem({
      ...filmItem,
      [name]: value,
    });
    setFileImage({
      ...fileImage,
      [name]: object,
    });
    setIsDisableAddFilm(false);
  };
  const handleUpdateFile = (e) => {
    const name = e.target.name;
    const value = e.target.files[0].name;
    const object = e.target.files[0];
    setEditFilmItem({
      ...editFilmItem,
      [name]: value,
    });
    setFileImage({
      ...fileImage,
      [name]: object,
    });
  };
  const handleOnChangeUpdateFilm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "ngayKhoiChieu") {
      setEditFilmItem({
        ...editFilmItem,
        [name]: format(new Date(value), "dd/MM/yyyy"),
      });
    } else {
      setEditFilmItem({
        ...editFilmItem,
        [name]: value,
      });
    }
  };
  const handleOnChangeAddFilm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "ngayKhoiChieu") {
      setFilmItem({
        ...filmItem,
        [name]: format(new Date(value), "dd/MM/yyyy"),
      });
    } else {
      setFilmItem({
        ...filmItem,
        [name]: value,
      });
    }
  };
  const handlePopupAddFilm = () => {
    setHandleAddFilm(false);
    setFilmItem({});
  };
  const handlePopupEditFilm = () => {
    setIsEditFilm(false);
    setEditFilmItem({});
  };
  const handleOnChangeSearch = (e) => {
    const value = e.target.value;
    setSearchFilmName(value);
  };
  const handleSubmitAddFilm = (e) => {
    e.preventDefault();
    dispatch(addFilm(filmItem, fileImage, filmGroup));
    handlePopupAddFilm();
  };
  const handleDeleteFilm = (id) => {
    dispatch(deleteFilm(id, filmGroup));
  };
  const renderAddFilm = () => {
    if (handleAddFilm) {
      return (
        <TableRow>
          <TableCell>
            <Grid container justify="space-between">
              <Grid item>
                <IconButton
                  disabled={isDisableAddFilm}
                  color="primary"
                  onClick={handleSubmitAddFilm}
                >
                  <CheckIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" onClick={handlePopupAddFilm}>
                  <CloseIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              onChange={handleOnChangeAddFilm}
              multiline
              variant="outlined"
              label="Tên"
              name="tenPhim"
              type="name"
            />
            <TextField
              className="mt-1"
              onChange={handleOnChangeAddFilm}
              fullWidth
              multiline
              variant="outlined"
              label="Bí Danh"
              name="biDanh"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              onChange={handleOnChangeAddFilm}
              variant="outlined"
              label="Nhóm"
              name="maNhom"
              type="name"
            />
            <TextField
              className="mt-1"
              onChange={handleOnChangeAddFilm}
              fullWidth
              multiline
              variant="outlined"
              label="Trailer"
              name="trailer"
              type="name"
            />
          </TableCell>
          <TableCell>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              name="hinhAnh"
              onChange={handleFile}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Mô tả"
              variant="outlined"
              name="moTa"
              onChange={handleOnChangeAddFilm}
            />
          </TableCell>
          <TableCell>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Ngày Khởi Chiếu"
                type="date"
                name="ngayKhoiChieu"
                onChange={handleOnChangeAddFilm}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              label="Đánh giá"
              name="danhGia"
              onChange={handleOnChangeAddFilm}
              variant="outlined"
            />
          </TableCell>
        </TableRow>
      );
    }
  };
  const handleSubmitEditFilm = (e) => {
    e.preventDefault();
    dispatch(updateFilm(editFilmItem, fileImage, filmGroup));
    handlePopupEditFilm();
  };
  const renderEditFilm = () => {
    if (isEditFilm) {
      return (
        <TableRow>
          <TableCell>
            <Grid container justify="space-between">
              <Grid item>
                <IconButton color="primary" onClick={handleSubmitEditFilm}>
                  <CheckIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" onClick={handlePopupEditFilm}>
                  <CloseIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              defaultValue={editFilmItem.tenPhim}
              onChange={handleOnChangeUpdateFilm}
              multiline
              variant="outlined"
              label="Tên"
              name="tenPhim"
              type="name"
            />
            <TextField
              className="mt-1"
              defaultValue={editFilmItem.biDanh}
              onChange={handleOnChangeUpdateFilm}
              fullWidth
              multiline
              variant="outlined"
              label="Bí Danh"
              name="biDanh"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              defaultValue={editFilmItem.maNhom}
              onChange={handleOnChangeUpdateFilm}
              variant="outlined"
              label="Nhóm"
              name="maNhom"
              type="name"
            />
            <TextField
              className="mt-1"
              defaultValue={editFilmItem.trailer}
              onChange={handleOnChangeUpdateFilm}
              fullWidth
              multiline
              variant="outlined"
              label="Trailer"
              name="trailer"
              type="name"
            />
          </TableCell>
          <TableCell>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              name="hinhAnh"
              onChange={handleUpdateFile}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Mô tả"
              variant="outlined"
              defaultValue={editFilmItem.moTa}
              name="moTa"
              onChange={handleOnChangeUpdateFilm}
            />
          </TableCell>
          <TableCell>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Ngày Khởi Chiếu"
                type="date"
                name="ngayKhoiChieu"
                onChange={handleOnChangeUpdateFilm}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              label="Đánh giá"
              name="danhGia"
              defaultValue={editFilmItem.danhGia}
              onChange={handleOnChangeUpdateFilm}
              variant="outlined"
            />
          </TableCell>
        </TableRow>
      );
    }
  };
  const renderTableRow = () => {
    if (filmList && searchFilmName !== "") {
      // eslint-disable-next-line
      return filmList.map((item) => {
        let res = item.tenPhim
          .toLowerCase()
          .match(searchFilmName.toLowerCase());
        if (res !== null && searchFilmName !== "") {
          return (
            <TableRow key={item.maPhim}>
              <TableCell style={{ width: 170 }} align="center">
                <Grid container justify="space-between">
                  <Grid item>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        setEditFilmItem({
                          ...item,
                          ngayKhoiChieu: format(
                            new Date(item.ngayKhoiChieu),
                            "dd/MM/yyyy"
                          ),
                        });
                        setIsEditFilm(true);
                      }}
                    >
                      <EditIcon variant="contained" color="primary" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="inherit"
                      onClick={() => handleDeleteFilm(item.maPhim)}
                    >
                      <DeleteForeverIcon color="secondary" />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {item.tenPhim}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <a href={item.trailer}>Trailer</a>
              </TableCell>
              <TableCell style={{ width: 210 }} align="center">
                <img
                  src={item.hinhAnh}
                  style={{ width: "auto", height: 50 }}
                  alt="anhPhim"
                />
              </TableCell>
              <TableCell style={{ width: 400 }} align="center">
                {item.moTa}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {item.ngayKhoiChieu}
              </TableCell>
              <TableCell style={{ width: 180 }} align="center">
                {item.danhGia}
              </TableCell>
            </TableRow>
          );
        }
      });
    } else if (filmList) {
      return (
        rowsPerPage > 0
          ? filmList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : filmList
      ).map((row) => (
        <TableRow key={row.maPhim}>
          <TableCell style={{ width: 170 }} align="center">
            <Grid container justify="space-between">
              <Grid item>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    setEditFilmItem({
                      ...row,
                      ngayKhoiChieu: format(
                        new Date(row.ngayKhoiChieu),
                        "dd/MM/yyyy"
                      ),
                    });
                    setIsEditFilm(true);
                  }}
                >
                  <EditIcon variant="contained" color="primary" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  color="inherit"
                  onClick={() => handleDeleteFilm(row.maPhim)}
                >
                  <DeleteForeverIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell style={{ width: 160 }} align="center">
            {row.tenPhim}
          </TableCell>
          <TableCell style={{ width: 160 }} align="center">
            <a href={row.trailer}>Trailer</a>
          </TableCell>
          <TableCell style={{ width: 210 }} align="center">
            <img
              src={row.hinhAnh}
              style={{ width: "auto", height: 50 }}
              alt="anhPhim"
            />
          </TableCell>
          <TableCell style={{ width: 400 }} align="center">
            {row.moTa}
          </TableCell>
          <TableCell style={{ width: 160 }} align="center">
            {row.ngayKhoiChieu}
          </TableCell>
          <TableCell style={{ width: 200 }} align="center">
            {row.danhGia}
          </TableCell>
        </TableRow>
      ));
    }
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleGroupFilm = (e) => {
    const value = e.target.value;
    setFilmGroup(value);
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
    if (deleteFilmLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (addFilmLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (updateFilmLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
  };

  return (
    <div>
      <Grid container directions="row" alignItems="center" className="mb-3">
        <Grid item md={4} xs={12}>
          <h4>Manage Film</h4>
        </Grid>
        <Grid item md={4} xs={12}>
          <FormControl variant="outlined">
            <Select
              native
              defaultValue="GP01"
              onChange={handleGroupFilm}
              name="maNhom"
            >
              <option value={"GP01"}>GP01</option>
              <option value={"GP02"}>GP02</option>
              <option value={"GP03"}>GP03</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} xs={8}>
          <div className={classes.search}>
            <TextField
              id="outlined-search"
              onChange={handleOnChangeSearch}
              variant="filled"
              className={classes.searchBox}
              label="Search"
              type="search"
            />
          </div>
        </Grid>
        <Grid item md={1} xs={4} className="p-2">
          <IconButton
            color="inherit"
            onClick={() => {
              setHandleAddFilm(true);
            }}
          >
            <PlaylistAddIcon className={classes.addBtn} />
          </IconButton>
        </Grid>
        <Grid item>{renderErrNotice()}</Grid>
      </Grid>
      {handleLoading()}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Actions</StyledTableCell>
              <StyledTableCell align="center">Tên Phim</StyledTableCell>
              <StyledTableCell align="center">Trailer</StyledTableCell>
              <StyledTableCell align="center">Hình Ảnh</StyledTableCell>
              <StyledTableCell align="center">Mô Tả</StyledTableCell>
              <StyledTableCell align="center">Ngày Khởi Chiếu</StyledTableCell>
              <StyledTableCell align="center">Đánh Giá</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderAddFilm()}
            {renderEditFilm()}
            {renderTableRow()}
            {handleEmptyRow()}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={7}
                count={filmList ? filmList.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
