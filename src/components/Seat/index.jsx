import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "@material-ui/core";

export default function Seat(props) {
  const { seat, addToBookSeats, removeFromBookSeats } = props;
  const [booking, setBooking] = useState(false);

  const addSeat = () => {
    addToBookSeats(seat);
    setBooking(!booking);
  };

  const removeSeat = () => {
    removeFromBookSeats(seat);
    setBooking(!booking);
  };

  const seatClass = classNames({
    seat: true,
    seat_choosed: seat.daDat,
    seat_choosing: !seat.daDat && booking,
    seat_normal: !seat.daDat && !booking && seat.loaiGhe === "Thuong",
    seat_vip: !seat.daDat && !booking && seat.loaiGhe === "Vip",
  });

  return (
    <div
      className={
        seat.daDat ? "no-drop d-inline-block" : "pointer d-inline-block"
      }
    >
      <Button
        variant="contained"
        disabled={seat.daDat}
        className={seatClass}
        onClick={booking ? removeSeat : addSeat}
      >
        {booking ? seat.numChair : ""}
      </Button>
    </div>
  );
}
