import { Button, makeStyles } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../../../components/Payment";
import SeatList from "../../../components/SeatList";
import { fetchRoomList } from "./modules/action";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./style.css";
import Loading from "../../../components/Loading";

export default function BookingTicket(props) {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  // console.log(props.match.params);
  // const location = useLocation();
  // const { idSchedule } = location.state;

  // console.log("idSchedule", idSchedule);
  const bookSeatLoading = useSelector(
    (state) => state.bookTicketReducer.loading
  );
  const handleRender = () => {
    window.location.reload();
  };
  useEffect(() => {
    dispatch(fetchRoomList(id));
    //eslint-disable-next-line
  }, []);

  const roomListReducer = useSelector((state) => state.fetchRoomListReducer);

  const room = roomListReducer?.data;
  // console.log("room", room);

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const seats = [];

  if (room?.danhSachGhe && room.danhSachGhe?.length > 0) {
    for (let i = 0; i < 10; i++) {
      let seatGroup = [];
      for (let j = 0; j < 16; j++) {
        seatGroup.push(room.danhSachGhe[i * 16 + j]);
        if (j < 9)
          seatGroup[j] = {
            ...seatGroup[j],
            numChair: `${rows[i]}0${j + 1}`,
          };
        else
          seatGroup[j] = {
            ...seatGroup[j],
            numChair: `${rows[i]}${j + 1}`,
          };
      }
      seats.push({
        row: rows[i],
        seatsRow: seatGroup,
      });
    }
  }
  // console.log("seats", seats);

  const [state, setState] = useState({
    bookSeats: [],
    totalMoney: 0,
  });

  const addToBookSeats = (seat) => {
    let cloneBookSeats = [...state.bookSeats];

    let index = cloneBookSeats.findIndex(
      (item) => seat.numChair === item.numChair
    );
    if (index !== -1) return;

    cloneBookSeats.push(seat);
    let total = state.totalMoney + Math.floor(seat.giaVe);

    setState({
      bookSeats: cloneBookSeats,
      totalMoney: total,
    });
  };

  const removeFromBookSeats = (seat) => {
    let cloneBookSeats = [...state.bookSeats];

    let index = cloneBookSeats.findIndex(
      (item) => seat.numChair === item.numChair
    );
    if (index === -1) return;

    cloneBookSeats.splice(index, 1);
    let total = state.totalMoney - Math.floor(seat.giaVe);

    setState({
      bookSeats: cloneBookSeats,
      totalMoney: total,
    });
  };

  // book ticket confirm
  const ticket = {
    maLichChieu: id,
    danhSachVe: [],
    taiKhoanNguoiDung: "",
  };

  if (localStorage.getItem("User")) {
    ticket.taiKhoanNguoiDung = JSON.parse(
      localStorage.getItem("User")
    ).taiKhoan;
  }

  state.bookSeats.forEach((seat) => {
    ticket.danhSachVe.push({
      maGhe: seat.maGhe,
      giaVe: seat.giaVe,
    });
  });
  // console.log("ticket", ticket);

  // Countdown
  const [countdown] = useState(Date.now() + 300000);

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <span>00:00</span>;
    } else {
      // Render a countdown
      return (
        <span>
          0{minutes}:{seconds}
        </span>
      );
    }
  };

  // render warning countdown
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

  const [openWarning, setOpenWarning] = React.useState(false);

  const handleOpenWarning = () => {
    setOpenWarning(true);
  };

  const handleCloseWarning = () => {
    setOpenWarning(false);
    handleRender();
  };

  const renderModalWarning = () => {
    return (
      <Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openWarning}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openWarning}>
            <div className={classes.paper}>
              <InfoOutlinedIcon
                style={{
                  color: "#fd9411",
                  fontSize: 90,
                  margin: "20px 0",
                }}
              />
              <h2
                style={{
                  fontWeight: 600,
                  marginBottom: 15,
                }}
              >
                Hết giờ!
              </h2>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                Bạn có muốn đặt vé lại
              </p>
              <Button
                className="notify mr-4"
                variant="contained"
                size="large"
                color="primary"
                onClick={handleCloseWarning}
              >
                Đồng Ý
              </Button>

              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large">
                  Hủy
                </Button>
              </Link>
            </div>
          </Fade>
        </Modal>
      </Fragment>
    );
  };
  if (roomListReducer?.loading ?? bookSeatLoading) {
    return (
      <div className={classes.root}>
        <Loading />
      </div>
    );
  }
  return (
    <section className="container-fluid" id="book_ticket">
      <div className="row">
        <div className="col-md-9 col-sm-12 left">
          <div className="info mb-2">
            <div className="cinema">
              <div className="py-2 pr-2">
                <img src={room?.thongTinPhim.hinhAnh} alt="" />
              </div>
              <div className="res-none">
                <p style={{ marginBottom: 5, color: "#000000" }}>
                  {room?.thongTinPhim.tenCumRap} - {room?.thongTinPhim.tenRap}
                </p>
                <span>{room?.thongTinPhim.diaChi}</span>
              </div>
            </div>

            <div className="time">
              <span>thời gian giữ ghế</span>
              <div>
                <Countdown
                  className="countdown"
                  date={countdown}
                  renderer={renderer}
                  onComplete={handleOpenWarning}
                />
              </div>
            </div>
          </div>

          <div className="screen text-center">
            <img src="/images/screen.png" alt="" />
          </div>

          <SeatList
            addToBookSeats={addToBookSeats}
            removeFromBookSeats={removeFromBookSeats}
            seats={seats}
          />

          <div className="seat_case">
            <div className="px-3">
              <Button
                className="seat_type seat_normal"
                variant="contained"
              ></Button>
              <span>Ghế thường</span>
            </div>

            <div className="px-3">
              <Button
                className="seat_type seat_vip"
                variant="contained"
              ></Button>
              <span>Ghế VIP</span>
            </div>

            <div className="px-3">
              <Button
                className="seat_type seat_choosing"
                variant="contained"
              ></Button>
              <span>Ghế đang chọn</span>
            </div>

            <div className="px-3">
              <Button
                className="seat_type seat_choosed"
                variant="contained"
                disabled
              ></Button>
              <span>Ghế đã có người chọn</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 right">
          <Payment
            ticket={ticket}
            state={state}
            setState={setState}
            room={room}
            handleRender={handleRender}
          />
        </div>
      </div>
      {renderModalWarning()}
    </section>
  );
}
