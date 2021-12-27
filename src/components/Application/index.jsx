import React from "react";
import "./style.css";
import Slider from "react-slick";
import { Button } from "@material-ui/core";

export default function Application() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  const items = [
    "./images/slide1.jpg",
    "./images/slide2.jpg",
    "./images/slide3.jpg",
    "./images/slide4.jpg",
    "./images/slide5.jpg",
    "./images/slide6.jpg",
    "./images/slide7.jpg",
    "./images/slide8.jpg",
    "./images/slide9.jpg",
    "./images/slide10.jpg",
    "./images/slide11.jpg",
    "./images/slide12.jpg",
    "./images/slide13.jpg",
    "./images/slide14.jpg",
    "./images/slide15.jpg",
    "./images/slide16.jpg",
  ];

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className="item">
          <img src={item} alt="slide" />
        </div>
      );
    });
  };

  return (
    <section
      id="application"
      className="application"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/backapp.jpg"
        })`,
      }}
    >
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-6 left">
            <h1>
              Ứng dụng tiện lợi dành cho <br />
              người yêu điện ảnh
            </h1>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <Button className="d-block">App miễn phí - Tải về ngay</Button>
            <span className="d-block">
              TIX có hai phiên bản <a href="#slider">iOS</a> &amp;
              <a href="#slider">Android</a>
            </span>
          </div>
          <div className="col-lg-6 right p-0">
            <div className="phone w-50 mx-auto">
              <img
                className="d-block w-100"
                src="./images/mobile.png"
                alt="mobile"
              />
              <Slider {...settings} className="slick__slider">
                {renderItems()}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
