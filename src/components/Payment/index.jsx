import React, { Fragment, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button, makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import SyncIcon from "@material-ui/icons/Sync";
import { Link } from "react-router-dom";
import "./style.css";
import { bookTicket } from "../../containers/HomeTemplate/BookingTicket/modules/action";
import { useDispatch } from "react-redux";
import ComboList from "../ComboList";

export default function Payment(props) {
  const dispatch = useDispatch();
  const { room, state, ticket, setState } = props;

  const convertMoney = (money) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
  };

  const [comboMoney, setComboMoney] = useState(0);

  state.bookSeats.sort(function (a, b) {
    return parseInt(a.stt) - parseInt(b.stt);
  });

  const bill =
    state.totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";

  // payment
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submit = state.bookSeats.length > 0 && value !== "" ? true : false;

  const renderBookSeats = () => {
    if (state.bookSeats.length === 0)
      return <p style={{ color: "#00d200" }}>-----</p>;
    else {
      return state.bookSeats.map((seat) => {
        return (
          <div key={seat.stt} className="d-inline-block">
            <Button
              variant="contained"
              disabled={seat.daDat}
              className="seat_choosing"
              style={{
                height: 30,
                minWidth: 30,
                margin: "2px 0 2px 5px",
                padding: 0,
                color: "#000000",
                fontWeight: 700,
              }}
            >
              {seat.numChair}
            </Button>
          </div>
        );
      });
    }
  };

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

  // modal notify
  const [openNotify, setOpenNotify] = React.useState(false);

  const handleOpenNotify = () => {
    setOpenNotify(true);
  };

  const handleCloseNotify = () => {
    setOpenNotify(false);
  };

  const renderModalNotify = () => {
    return (
      <Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openNotify}
          onClose={handleCloseNotify}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openNotify}>
            <div className={classes.paper}>
              <SyncIcon
                style={{
                  color: "rgb(0 112 227)",
                  fontSize: 90,
                  margin: "20px 0",
                  border: "5px solid rgb(190 223 255)",
                  borderRadius: "50%",
                }}
              />
              <h2
                style={{
                  fontWeight: 600,
                  marginBottom: 15,
                }}
              >
                Thông tin đặt vé sẽ được gửi qua email
              </h2>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                Hãy kiểm tra thông tin trước khi xác nhận
              </p>
              <Button
                className="notify mr-4"
                variant="contained"
                size="large"
                color="primary"
                onClick={handleOpenSuccess}
              >
                Đồng Ý
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handleCloseNotify}
              >
                Hủy
              </Button>
            </div>
          </Fade>
        </Modal>
      </Fragment>
    );
  };

  // modal success
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleOpenSuccess = () => {
    handleCloseNotify();
    dispatch(bookTicket(ticket));
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const renderModalSuccess = () => {
    return (
      <Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openSuccess}
          // onClose={handleCloseSuccess}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openSuccess}>
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
                  marginBottom: 20,
                }}
              >
                Đặt vé thành công
              </h2>

              <Link to="/">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{
                    padding: "10px 30px",
                  }}
                  onClick={handleCloseSuccess}
                >
                  OK
                </Button>
              </Link>
            </div>
          </Fade>
        </Modal>
      </Fragment>
    );
  };

  // modal combo
  const [openCombo, setOpenCombo] = React.useState(false);

  // quantity for each combo choosing
  const [quantities, setQuantities] = useState([]);

  return (
    <Fragment>
      <div className="box">
        <div className="item" style={{ textAlign: "center" }}>
          {bill}
        </div>

        <div className="item">
          <span>Phim:</span>
          <p>{room?.thongTinPhim.tenPhim}</p>
        </div>

        <div className="item">
          <span>Ngày giờ chiếu:</span>
          <p>
            {room?.thongTinPhim.ngayChieu} - {room?.thongTinPhim.gioChieu}
          </p>
        </div>

        <div className="item">
          <span>Cụm rạp:</span>
          <p>{room?.thongTinPhim.tenCumRap}</p>
        </div>

        <div className="item">
          <span>Rạp:</span>
          <p>{room?.thongTinPhim.tenRap}</p>
        </div>

        <div className="item">
          <span style={{ color: "red", fontWeight: 700 }}>Chọn ghế:</span>
          <div className="text-right">{renderBookSeats()}</div>
        </div>

        <Button className="item combo" onClick={() => setOpenCombo(true)}>
          <span style={{ color: "red", fontWeight: 700 }}>Chọn Combo:</span>
          <p style={{ color: "#00d200" }}>{convertMoney(comboMoney)}</p>
        </Button>

        <div className="item">
          <span>Ưu đãi:</span>
          <p>0%</p>
        </div>

        <div className="payment">
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              style={{ color: "red", fontWeight: 600 }}
            >
              Chọn hình thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-label="payment"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="ATM"
                control={<Radio color="primary" />}
                label={
                  <div className="pay_option">
                    <img src="/images/ATM.png" alt="ATM" />
                    <span>Thẻ ATM nội địa</span>
                  </div>
                }
              />
              <FormControlLabel
                value="Visa"
                control={<Radio color="primary" />}
                label={
                  <div className="pay_option">
                    <img src="/images/visa_mastercard.png" alt="Visa" />
                    <span>Visa, Master, JCB</span>
                  </div>
                }
              />
              <FormControlLabel
                value="Cash"
                control={<Radio color="primary" />}
                label={
                  <div className="pay_option">
                    <img src="/images/cash.png" alt="Cash" />
                    <span>Thanh toán tiền mặt</span>
                  </div>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div>
        <div className={submit ? "pay_submit" : "pay_submit no-drop"}>
          <Button
            disabled={!submit}
            variant="contained"
            className={submit ? "submit" : "disabled"}
            onClick={handleOpenNotify}
          >
            Thanh toán
          </Button>
        </div>
      </div>

      {/* Modal */}
      {renderModalNotify()}
      {renderModalSuccess()}
      <ComboList
        state={state}
        setState={setState}
        classes={classes}
        openCombo={openCombo}
        setOpenCombo={setOpenCombo}
        comboMoney={comboMoney}
        setComboMoney={setComboMoney}
        quantities={quantities}
        setQuantities={setQuantities}
      />
    </Fragment>
  );
}
