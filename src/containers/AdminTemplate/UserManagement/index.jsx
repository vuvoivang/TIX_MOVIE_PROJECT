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
  fetchUserList,
  addUser,
  deleteUser,
  updateUser,
  setUserReset,
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
}));

export default function UserManagement() {
  const classes = useStyles2();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.fetchUserListReducer.data);
  const addUserErr = useSelector((state) => state.addUserReducer.err);
  const deleteUserErr = useSelector((state) => state.deleteUserReducer.err);
  const updateUserErr = useSelector((state) => state.updateUserReducer.err);
  const fetchUserLoading = useSelector(
    (state) => state.fetchUserListReducer.loading
  );
  const addUserLoading = useSelector((state) => state.addUserReducer.loading);
  const deleteUserLoading = useSelector(
    (state) => state.deleteUserReducer.loading
  );
  const updateUserLoading = useSelector(
    (state) => state.updateUserReducer.loading
  );
  const [page, setPage] = useState(0);
  const [handleAddUser, setHandleAddUser] = useState(false);
  const [userItem, setUserItem] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);
  const [editUserItem, setEditUserItem] = useState({});
  const [render, setRender] = useState(false);
  const [searchUserName, setSearchUserName] = useState("");
  const [userGroup, setUserGroup] = useState("GP01");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  useEffect(() => {
    dispatch(fetchUserList(userGroup));
    // eslint-disable-next-line
  }, [render]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const resetErrNotice = () => {
    dispatch(setUserReset());
  };
  const renderErrNotice = () => {
    if (addUserErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{addUserErr?.response?.data}</Alert>;
    }
    if (deleteUserErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{deleteUserErr?.response?.data}</Alert>;
    }
    if (updateUserErr) {
      setTimeout(resetErrNotice, 2000);
      return <Alert severity="error">{updateUserErr?.response?.data}</Alert>;
    }
  };
  const handleEmptyRow = () => {
    if (userList) {
      const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, userList.length - page * rowsPerPage);
      return (
        emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )
      );
    }
  };
  const handlePopupAddUser = () => {
    setHandleAddUser(false);
    setUserItem({});
  };
  const handlePopupEditUser = () => {
    setIsEditUser(false);
    setEditUserItem({});
  };
  const handleOnChangeAddUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserItem({
      ...userItem,
      maNhom: userGroup,
      [name]: value,
    });
  };
  const handleOnChangeEditUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditUserItem({
      ...editUserItem,
      maNhom: userGroup,
      [name]: value,
    });
  };
  const handleSubmitAddUser = (e) => {
    e.preventDefault();
    dispatch(addUser(userItem, userGroup));
    handlePopupAddUser();
  };
  const handleSubmitEditUser = (e) => {
    e.preventDefault();
    dispatch(updateUser(editUserItem, userGroup));
    handlePopupEditUser();
  };
  const renderAddUser = () => {
    if (handleAddUser) {
      return (
        <TableRow>
          <TableCell>
            <Grid container justify="space-between">
              <Grid item>
                <IconButton color="primary" onClick={handleSubmitAddUser}>
                  <CheckIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" onClick={handlePopupAddUser}>
                  <CloseIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              onChange={handleOnChangeAddUser}
              multiline
              variant="outlined"
              name="taiKhoan"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              onChange={handleOnChangeAddUser}
              variant="outlined"
              name="matKhau"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              onChange={handleOnChangeAddUser}
              variant="outlined"
              name="hoTen"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              onChange={handleOnChangeAddUser}
              variant="outlined"
              name="soDt"
              type="name"
            />
          </TableCell>
          <TableCell>
            <FormControl variant="outlined">
              <Select
                native
                onChange={handleOnChangeAddUser}
                name="maLoaiNguoiDung"
              >
                <option aria-label="None" value="" />
                <option value={"KhachHang"}>Khách Hàng</option>
                <option value={"QuanTri"}>Quản Trị</option>
              </Select>
            </FormControl>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              onChange={handleOnChangeAddUser}
              variant="outlined"
              name="email"
              type="name"
            />
          </TableCell>
        </TableRow>
      );
    }
  };
  const renderEditUser = () => {
    if (isEditUser) {
      return (
        <TableRow>
          <TableCell>
            <Grid container justify="space-between">
              <Grid item>
                <IconButton color="primary" onClick={handleSubmitEditUser}>
                  <CheckIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" onClick={handlePopupEditUser}>
                  <CloseIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              defaultValue={editUserItem.taiKhoan}
              onChange={handleOnChangeEditUser}
              multiline
              InputProps={{
                readOnly: true,
              }}
              disabled
              variant="outlined"
              name="taiKhoan"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              defaultValue={editUserItem.matKhau}
              multiline
              onChange={handleOnChangeEditUser}
              variant="outlined"
              name="matKhau"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              defaultValue={editUserItem.hoTen}
              multiline
              onChange={handleOnChangeEditUser}
              variant="outlined"
              name="hoTen"
              type="name"
            />
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              defaultValue={editUserItem.soDt}
              multiline
              onChange={handleOnChangeEditUser}
              variant="outlined"
              name="soDt"
              type="name"
            />
          </TableCell>
          <TableCell>
            <FormControl variant="outlined">
              <Select
                native
                defaultValue={editUserItem.maLoaiNguoiDung}
                onChange={handleOnChangeEditUser}
                name="maLoaiNguoiDung"
              >
                <option aria-label="None" value="" />
                <option value={"KhachHang"}>Khách Hàng</option>
                <option value={"QuanTri"}>Quản Trị</option>
              </Select>
            </FormControl>
          </TableCell>
          <TableCell>
            <TextField
              fullWidth
              multiline
              defaultValue={editUserItem.email}
              onChange={handleOnChangeEditUser}
              variant="outlined"
              name="email"
              type="name"
            />
          </TableCell>
        </TableRow>
      );
    }
  };
  const renderTableRow = () => {
    if (userList && searchUserName !== "") {
      // eslint-disable-next-line
      return userList.map((row, index) => {
        let res = row.taiKhoan
          .toLowerCase()
          .match(searchUserName.toLowerCase());
        if (res !== null && searchUserName !== "") {
          return (
            <TableRow key={index}>
              <TableCell style={{ width: 200 }} align="center">
                <Grid container justify="space-between">
                  <Grid item>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        setEditUserItem({
                          ...row,
                        });
                        setIsEditUser(true);
                      }}
                    >
                      <EditIcon variant="contained" color="primary" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        dispatch(deleteUser(row));
                        setRender(!render);
                      }}
                    >
                      <DeleteForeverIcon color="secondary" />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell style={{ width: 120 }} align="center">
                {row.taiKhoan}
              </TableCell>
              <TableCell style={{ width: 140 }} align="center">
                {row.matKhau}
              </TableCell>
              <TableCell style={{ width: 210 }} align="center">
                {row.hoTen}
              </TableCell>
              <TableCell style={{ width: 200 }} align="center">
                {row.soDt}
              </TableCell>
              <TableCell style={{ width: 300 }} align="center">
                {row.maLoaiNguoiDung}
              </TableCell>
              <TableCell style={{ width: 180 }} align="center">
                {row.email}
              </TableCell>
            </TableRow>
          );
        }
      });
    } else if (userList) {
      return (
        rowsPerPage > 0
          ? userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : userList
      ).map((row, index) => (
        <TableRow key={index}>
          <TableCell style={{ width: 200 }} align="center">
            <Grid container justify="space-between">
              <Grid item>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    setEditUserItem({
                      ...row,
                    });
                    setIsEditUser(true);
                  }}
                >
                  <EditIcon variant="contained" color="primary" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    dispatch(deleteUser(row, userGroup));
                    setRender(!render);
                  }}
                >
                  <DeleteForeverIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell style={{ width: 120 }} align="center">
            {row.taiKhoan}
          </TableCell>
          <TableCell style={{ width: 140 }} align="center">
            {row.matKhau}
          </TableCell>
          <TableCell style={{ width: 210 }} align="center">
            {row.hoTen}
          </TableCell>
          <TableCell style={{ width: 200 }} align="center">
            {row.soDt}
          </TableCell>
          <TableCell style={{ width: 300 }} align="center">
            {row.maLoaiNguoiDung}
          </TableCell>
          <TableCell style={{ width: 180 }} align="center">
            {row.email}
          </TableCell>
        </TableRow>
      ));
    }
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleGroupUser = (e) => {
    const value = e.target.value;
    setUserGroup(value);
    setRender(!render);
  };
  const handleSearchUser = (e) => {
    const value = e.target.value;
    setSearchUserName(value);
  };
  const handleLoading = () => {
    if (fetchUserLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (deleteUserLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (addUserLoading) {
      return (
        <div className={classes.loadingRoot}>
          <LinearProgress color="secondary" />
        </div>
      );
    }
    if (updateUserLoading) {
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
          <h4>Manage User</h4>
        </Grid>
        <Grid item md={4} xs={12}>
          <FormControl variant="outlined">
            <Select native defaultValue="GP01" onChange={handleGroupUser}>
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
              variant="filled"
              onChange={handleSearchUser}
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
              setHandleAddUser(true);
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
              <StyledTableCell align="center">Tài Khoản</StyledTableCell>
              <StyledTableCell align="center">Mật Khẩu</StyledTableCell>
              <StyledTableCell align="center">Họ Tên</StyledTableCell>
              <StyledTableCell align="center">Số Điện Thoại</StyledTableCell>
              <StyledTableCell align="center">
                Mã Loại Người Dùng
              </StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderAddUser()}
            {renderEditUser()}
            {renderTableRow()}
            {handleEmptyRow()}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={7}
                count={userList ? userList.length : 0}
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
