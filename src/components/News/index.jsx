import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabPaneContent from "../TabPaneContent";
import "./style.css";
export default function News() {
  const data = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  // console.log(data);
  const handleOnClick = (data, more = true) => {
    return () =>
      dispatch({
        type: "READ_MORE",
        payload: data,
        more,
      });
    // return () => {
    //   document.getElementById(
    //     `${data.id}-${data.listNews[data.countRow].id}`
    //   ).style.display = "flex";
    // };
  };
  const renderButtonMore = (item) => {
    if (item.countRow < 3) {
      return (
        <button onClick={handleOnClick(item)} className="btn more" id="more">
          XEM THÊM
        </button>
      );
    }
  };
  const renderButtonCollapse = (item) => {
    if (item.countRow > 1) {
      return (
        <button
          onClick={handleOnClick(item, false)}
          className="btn more"
          id="collapse"
        >
          THU GỌN
        </button>
      );
    }
  };
  const renderTabPaneNews = () => {
    return data.map((item, index) => {
      return (
        <div
          className={
            index === 0 ? "tab-pane fade show active" : "tab-pane fade"
          }
          id={"pills-" + item.id}
          key={index}
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <TabPaneContent data={item} />

          <div className="d-flex justify-content-center">
            {renderButtonMore(item)}
            {renderButtonCollapse(item)}
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <section className="news" id="news">
        <div className="container">
          <div
            className="tab-nav nav-news"
            style={{ backgroundImage: 'url("/images/back-news.png")' }}
          >
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-dienAnh"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Điện Ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-review"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-khuyenMai"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Khuyến Mãi
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="pills-tabContent">
            {renderTabPaneNews()}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
