import React from "react";
import DetailScheduleFilm from "../DetailScheduleFilm";
import "./style.css";
export default function FilmInfoBottom(props) {
  const { film, showTimesFilm } = props;
  const date = new Date(film.ngayKhoiChieu);
  //console.log(showTimesFilm);
  return (
    <div className="detailFilmBottom">
      <section className="detailMain">
        <div className="container">
          <div className="tab-nav nav-news">
            <ul
              className="nav navCenter nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-lichChieu"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-thongTin"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Thông tin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-danhGia"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Đánh giá
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id={"pills-lichChieu"}
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <DetailScheduleFilm showTimesFilm={showTimesFilm} />
            </div>
            <div
              className="tab-pane fade"
              id={"pills-thongTin"}
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row isFlex detailMainStyle">
                <div className="col-sm-6 col-xs-12 film left">
                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Ngày công chiếu</p>
                    <p className="contentInfo ">
                      {date.getDate() +
                        "." +
                        date.getMonth() +
                        "." +
                        date.getFullYear()}
                    </p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Đạo diễn</p>
                    <p className="contentInfo "> Phan Gia Nhật Linh </p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Diễn viên</p>
                    <p className="contentInfo ">Phan Gia Nhật Linh</p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Thể Loại</p>
                    <p className="contentInfo ">Hài hước</p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Định dạng</p>
                    <p className="contentInfo ">2D/Digital</p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Quốc Gia SX</p>
                    <p className="contentInfo ">Việt Nam</p>
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12 film right">
                  <div className="row rowLeftInfo">
                    <p className="contentTitle">Nội dung</p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentInfoFull description">{film.moTa}</p>
                  </div>

                  <div className="row rowLeftInfo">
                    <p className="contentInfoFull"></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id={"pills-danhGia"} role="tabpanel">
              <div id="detailReviewer">
                <div className="row isFlex detailMainStyle">
                  <div className="col-sm-12 col-xs-12 dadInputReviewer newDesign">
                    <span className="imgReviewer">
                      <img src="/images/avatar.png" alt="avatar" />
                    </span>
                    <input
                      className="inputReviwer"
                      type="text"
                      placeholder="Bạn nghĩ gì về phim này?"
                      readOnly="readonly"
                    />
                    <span className="imgReviewerStar">
                      <img src="/images/listStar.png" alt="listStar" />
                    </span>
                  </div>
                </div>
                <div id="listComment">
                  <div
                    id="dataIndex0"
                    className="row isFlex detailMainStyle reviewerContain"
                  >
                    <div className="dadCommentReviewer">
                      <div className="dadMainInfo">
                        <div className="infoReviewer">
                          <div
                            className="infoReviewerIcon"
                            data-user_id={1541521}
                          >
                            <img
                              ng-src="https://s120-ava-talk.zadn.vn/f/f/8/0/10/120/cbfa378291ca490da19c01ca03294f29.jpg"
                              src="https://s120-ava-talk.zadn.vn/f/f/8/0/10/120/cbfa378291ca490da19c01ca03294f29.jpg"
                              alt="avatar-comment"
                            />
                          </div>
                          <div className="infoReviewerName">
                            <div>Trai Họ Vũ</div>
                            <p className="infoReviewerTime ">3 ngày trước</p>
                          </div>
                        </div>
                        <div className="infoStar">
                          <div className="core">
                            <p>10</p>
                          </div>
                          <div id={148039} className="star">
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dadMainComment">
                        <div className="more mainComment ">
                          Uk cũng thường thôi cơ mà chưa xem
                        </div>
                      </div>
                      <div>
                        <div className="col-sm-12 count">
                          <div
                            className="wrapIcon like wrapIconLike"
                            data-type={3}
                            data-id={148039}
                          >
                            <img
                              className="iconFacebook postLikeCmt"
                              src="/images/like.png"
                              alt="like"
                            />
                            <span className="amount like">
                              <strong>2</strong> Thích
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listReply"></div>
                  </div>

                  <div
                    id="dataIndex1"
                    className="row isFlex detailMainStyle reviewerContain"
                  >
                    <div className="dadCommentReviewer">
                      <div className="dadMainInfo">
                        <div className="infoReviewer">
                          <div
                            className="infoReviewerIcon"
                            data-user_id={1541521}
                          >
                            <img
                              src="https://s120-ava-talk.zadn.vn/e/1/1/f/5/120/560ec5a9a8c1a02d3b8c5c02c8cbbe8c.jpg"
                              alt="avatar-comment"
                            />
                          </div>
                          <div className="infoReviewerName">
                            <div>Liêu Văn Tuấn</div>
                            <p className="infoReviewerTime ">5 ngày trước</p>
                          </div>
                        </div>
                        <div className="infoStar">
                          <div className="core">
                            <p>10</p>
                          </div>
                          <div id={148039} className="star">
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dadMainComment">
                        <div className="more mainComment ">
                          Hay phim cảnh rõ that
                        </div>
                      </div>
                      <div>
                        <div className="col-sm-12 count">
                          <div
                            className="wrapIcon like wrapIconLike"
                            data-type={3}
                            data-id={148039}
                          >
                            <img
                              className="iconFacebook postLikeCmt"
                              src="/images/like.png"
                              alt="like"
                            />
                            <span className="amount like">
                              <strong>2</strong> Thích
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listReply"></div>
                  </div>

                  <div
                    id="dataIndex2"
                    className="row isFlex detailMainStyle reviewerContain"
                  >
                    <div className="dadCommentReviewer">
                      <div className="dadMainInfo">
                        <div className="infoReviewer">
                          <div
                            className="infoReviewerIcon"
                            data-user_id={1541521}
                          >
                            <img
                              src="https://s120-ava-talk.zadn.vn/1/1/2/d/1/120/3fc0b0209c293a67c31cadc092a0589e.jpg"
                              alt="avatar-comment"
                            />
                          </div>
                          <div className="infoReviewerName">
                            <div>Phát Lạc Lối</div>
                            <p className="infoReviewerTime ">5 ngày trước</p>
                          </div>
                        </div>
                        <div className="infoStar">
                          <div className="core">
                            <p>8</p>
                          </div>
                          <div id={148039} className="star">
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                            <img
                              className="smallStar"
                              src="/images/star1.png"
                              alt="1 star"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dadMainComment">
                        <div className="more mainComment ">
                          Mê chữ ê kéoooo dài. Quá hay luôn ạ
                        </div>
                      </div>
                      <div>
                        <div className="col-sm-12 count">
                          <div
                            className="wrapIcon like wrapIconLike"
                            data-type={3}
                            data-id={148039}
                          >
                            <img
                              className="iconFacebook postLikeCmt"
                              src="/images/like.png"
                              alt="icon fb"
                            />
                            <span className="amount like">
                              <strong>2</strong> Thích
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listReply"></div>
                  </div>
                </div>
              </div>

              {/* <div className="isFlex text-center ">
                <button className="btnViewMore">XEM THÊM</button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
