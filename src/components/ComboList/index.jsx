import React from "react";
import { Fragment } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import ComboItem from "../ComboItem";
import "./style.css";

export default function ComboList(props) {
  const {
    classes,
    openCombo,
    setOpenCombo,
    comboMoney,
    setComboMoney,
    state,
    setState,
    quantities,
    setQuantities,
  } = props;
  // data combo
  const combos = [
    {
      idGroup: "001",
      category: "NƯỚC LON/CHAI",
      items: [
        { idCombo: "001", name: "Nước Suối Dasani 500ml", price: 13000 },
        { idCombo: "002", name: "Nước Trái Cây Nutriboost", price: 20000 },
        { idCombo: "003", name: "Nước Cam Teppy", price: 26000 },
      ],
    },
    {
      idGroup: "002",
      category: "SNACK - KẸO",
      items: [
        { idCombo: "001", name: "Trái Cây Sấy 20gr", price: 15000 },
        { idCombo: "002", name: "Kẹo MnM", price: 25000 },
        { idCombo: "003", name: "Kẹo Snickers", price: 25000 },
        { idCombo: "004", name: "Đậu phộng OiShi 100gr", price: 39000 },
        { idCombo: "005", name: "Khoai Tây Lay's Stax", price: 50000 },
      ],
    },
    {
      idGroup: "003",
      category: "POCA",
      items: [
        { idCombo: "001", name: "Poca Partyz", price: 18000 },
        { idCombo: "002", name: "Poca Khoai Tây 54gr", price: 20000 },
      ],
    },
    {
      idGroup: "004",
      category: "MÓN MỚI",
      items: [
        { idCombo: "001", name: "Trà Chanh Nestea (500ml)", price: 210000 },
        { idCombo: "002", name: "Milo Tươi (500ml)", price: 28000 },
        { idCombo: "003", name: "Combo Nestea", price: 60000 },
      ],
    },
    {
      idGroup: "005",
      category: "COMBO MỚI",
      items: [
        { idCombo: "001", name: "Hotdog", price: 25000 },
        { idCombo: "002", name: "Combo Hotdog (Mới)", price: 40000 },
      ],
    },
    {
      idGroup: "006",
      category: "NƯỚC NGỌT LY",
      items: [
        { idCombo: "001", name: "Coke 22oz", price: 25000 },
        { idCombo: "002", name: "Fanta 22oz", price: 25000 },
        { idCombo: "003", name: "Sprite 22oz", price: 25000 },
        { idCombo: "004", name: "Coke Zero 22oz", price: 25000 },
        { idCombo: "005", name: "Coke 32oz", price: 28000 },
        { idCombo: "006", name: "Fanta 32oz", price: 28000 },
        { idCombo: "007", name: "Sprite 32oz", price: 28000 },
        { idCombo: "008", name: "Coke Zero 32oz", price: 28000 },
      ],
    },
    {
      idGroup: "007",
      category: "BẮP RANG",
      items: [
        { idCombo: "001", name: "Bắp Rang 60oz", price: 40000 },
        { idCombo: "002", name: "Bắp Nấm 60oz - Caramel", price: 45000 },
        { idCombo: "003", name: "Bắp Nấm 60oz - Phô Mai", price: 45000 },
      ],
    },
    {
      idGroup: "008",
      category: "BEAR",
      items: [
        { idCombo: "001", name: "Bia Heineken", price: 40000 },
        { idCombo: "002", name: "Bia Strongbow 330ml", price: 40000 },
      ],
    },
    {
      idGroup: "009",
      category: "COMBO BEER",
      items: [
        { idCombo: "001", name: "Combo Beer 1", price: 60000 },
        { idCombo: "002", name: "Combo Beer 2", price: 60000 },
      ],
    },
    {
      idGroup: "010",
      category: "COMBO BẮP",
      items: [
        { idCombo: "001", name: "Combo Bắp 1", price: 65000 },
        { idCombo: "002", name: "Combo Bắp 2", price: 85000 },
        { idCombo: "003", name: "Combo Bắp 3", price: 170000 },
      ],
    },
  ];

  let countIdx = 0;

  let cloneQuantities = [];

  for (let group of combos) {
    for (let i = 0; i < group.items.length; i++) {
      cloneQuantities.push(0);
    }
  }

  if (quantities.length === 0) setQuantities(cloneQuantities);

  const renderComboGroup = (group) => {
    return group.items.map((combo) => {
      let index = countIdx++;

      return (
        <Fragment key={combo.idCombo}>
          <ComboItem
            combo={combo}
            comboMoney={comboMoney}
            setComboMoney={setComboMoney}
            state={state}
            setState={setState}
            quantities={quantities}
            setQuantities={setQuantities}
            index={index}
          />
        </Fragment>
      );
    });
  };

  const renderComboList = () => {
    return combos.map((group) => {
      return (
        <div key={group.idGroup}>
          <h1>{group.category}</h1>
          {renderComboGroup(group)}
        </div>
      );
    });
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openCombo}
        onClose={() => setOpenCombo(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade
          in={openCombo}
          style={{
            height: "calc(100vh - 50px)",
            position: "relative",
            padding: "0",
          }}
        >
          <div className={classes.paper}>
            <button
              type="button"
              className="close"
              onClick={() => setOpenCombo(false)}
            >
              <HighlightOffOutlinedIcon
                style={{
                  color: "red",
                  fontSize: 50,
                }}
              />
            </button>
            <div className="combo_container">{renderComboList()}</div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}
