import React from "react";

import Seat from "../Seat";

export default function SeatList(props) {
  const { seats, addToBookSeats, removeFromBookSeats } = props;

  const renderSeatRow = (seats) => {
    if (seats && seats?.length > 0) {
      return seats.map((seat) => {
        return (
          <Seat
            addToBookSeats={addToBookSeats}
            removeFromBookSeats={removeFromBookSeats}
            seat={seat}
            key={seat.stt}
          />
        );
      });
    }
  };

  const renderSeats = () => {
    if (seats && seats?.length > 0) {
      return seats.map((rowChair, index) => {
        return (
          <div className="row" key={index}>
            <span
              className="col-sm-1 res-none"
              style={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {rowChair.row}
            </span>
            <div className="col-sm-11 col-12">
              {renderSeatRow(rowChair.seatsRow)}
            </div>
          </div>
        );
      });
    }
  };

  return <div className="seat_list">{renderSeats()}</div>;
}
