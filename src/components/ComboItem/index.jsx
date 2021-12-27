import { Button } from "@material-ui/core";
import React from "react";
import "./style.css";

export default function ComboItem(props) {
  const {
    combo,
    comboMoney,
    setComboMoney,
    state,
    setState,
    quantities,
    setQuantities,
    index,
  } = props;

  const totalMoney = state.totalMoney;

  const convertMoney = (money) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
  };

  const quantity = quantities[index];

  const handleIncrease = () => {
    if (quantity < 10) {
      setComboMoney(comboMoney + combo.price);
      setState({ ...state, totalMoney: totalMoney + combo.price });
      let cloneQuantities = [...quantities];
      cloneQuantities[index] = quantity + 1;
      setQuantities(cloneQuantities);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setComboMoney(comboMoney - combo.price);
      setState({ ...state, totalMoney: totalMoney - combo.price });
      let cloneQuantities = [...quantities];
      cloneQuantities[index] = quantity - 1;
      setQuantities(cloneQuantities);
    }
  };

  return (
    <div className="row pb-4">
      <div className="col-8">
        <div className="info_combo">
          <img src="/images/popcorn.png" alt="popcorn" />
          <div className="data_combo">
            <h5>
              <span>i</span> {combo.name}
            </h5>
            <p>{convertMoney(combo.price)}</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="quantity">
          <div className={quantity === 0 ? "no-drop" : ""}>
            <Button onClick={handleDecrease} disabled={quantity === 0}>
              -
            </Button>
          </div>

          <span>{quantity}</span>
          <div className={quantity === 10 ? "no-drop" : ""}>
            <Button onClick={handleIncrease} disabled={quantity === 10}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
