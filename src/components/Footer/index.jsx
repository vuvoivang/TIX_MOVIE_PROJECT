import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row top">
          <div className="col__left col-md-4 col-sm-12">
            <p className="title hideOnMobile">TIX</p>
            <div className="row">
              <div className="col-lg-6 hideOnMobile">
                <span>FAQ</span>
                <span>Brand Guidelines</span>
              </div>
              <div className="col-lg-6 col-sm-12">
                <span>Thỏa thuận sử dụng</span>
                <span>Chính sách bảo mật</span>
              </div>
            </div>
          </div>
          <div className="col__center col-md-4 col-sm-12 hideOnMobile">
            <p className="title">ĐỐI TÁC</p>
            <div className="col-12">
              <a href="https://www.cgv.vn/" title="CGV">
                <img src="/images/cgv.png" alt="cgv" />
              </a>
              <a href="http://bhdstar.vn/" title="BHD">
                <img src="/images/bhd.png" alt="bhd" />
              </a>
              <a href="https://www.galaxycine.vn/" title="Galaxy">
                <img src="/images/galaxycine.png" alt="galaxycine" />
              </a>
              <a href="http://cinestar.com.vn/" title="Cinestar">
                <img src="/images/cinestar.png" alt="cinestar" />
              </a>
              <a
                href="http://lottecinemavn.com/LCHS/index.aspx"
                title="Lotte Cinema"
              >
                <img src="/images/lotte_cinema.png" alt="lotte_cinema" />
              </a>
            </div>
            <div className="col-12">
              <a href="https://www.megagscinemas.vn/" title="MegaGS">
                <img src="/images/megags.png" alt="megags" />
              </a>
              <a href="https://www.betacinemas.vn/home.htm" title="Beta">
                <img src="/images/bt.jpg" alt="bt" />
              </a>
              <a href="http://ddcinema.vn/" title="DDC">
                <img src="/images/dongdacinema.png" alt="dongdacinema" />
              </a>
              <a href="https://touchcinema.com/" title="Touch Cinema">
                <img src="/images/TOUCH.png" alt="TOUCH" />
              </a>
              <a href="https://cinemaxvn.com/" title="Cinemax">
                <img src="/images/cnx.jpg" alt="cnx" />
              </a>
            </div>
            <div className="col-12">
              <a href="http://starlight.vn/" title="Starlight">
                <img src="/images/STARLIGHT.png" alt="STARLIGHT" />
              </a>
              <a href="https://www.dcine.vn/" title="Dcine">
                <img src="/images/dcine.png" alt="dcine" />
              </a>
              <a href="https://zalopay.vn/" title="ZaloPay">
                <img src="/images/zalopay_icon.png" alt="zalopay_icon" />
              </a>
              <a href="https://www.payoo.vn/" title="Payoo">
                <img src="/images/payoo.jpg" alt="payoo" />
              </a>
              <a
                href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                title="Vietcombank"
              >
                <img src="/images/VCB.png" alt="VCB" />
              </a>
            </div>
            <div className="col-12">
              <a href="https://www.agribank.com.vn/" title="Agribank">
                <img src="/images/AGRIBANK.png" alt="AGRIBANK" />
              </a>
              <a href="https://www.vietinbank.vn/" title="Viettinbank">
                <img src="/images/VIETTINBANK.png" alt="VIETTINBANK" />
              </a>
              <a href="https://www.indovinabank.com.vn/" title="IVB">
                <img src="/images/IVB.png" alt="IVB" />
              </a>
              <a href="https://webv3.123go.vn/" title="123Go">
                <img src="/images/123go.png" alt="123go" />
              </a>
              <a href="https://laban.vn/" title="La Bàn">
                <img src="/images/laban.png" alt="laban" />
              </a>
            </div>
          </div>
          <div className="col__right col-md-4 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-12 hideOnMobile">
                <p className="title">MOBILE APP</p>
                <a
                  href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                  title="Apple App"
                >
                  <img
                    className="iconApp"
                    src="/images/apple-logo.png"
                    alt="app"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  title="Android App"
                >
                  <img
                    className="iconApp"
                    src="/images/android-logo.png"
                    alt="app"
                  />
                </a>
              </div>
              <div className="col-md-6 col-sm-12 textCenter">
                <p className="title hideOnMobile">SOCIAL</p>
                <a
                  href="https://www.facebook.com/tix.vn/"
                  title="Facebook social"
                >
                  <img
                    className="iconApp"
                    src="/images/facebook-logo.png"
                    alt="app"
                  />
                </a>
                <a href="https://zalo.me/tixdatve" title="Zalo social">
                  <img
                    className="iconApp"
                    src="/images/zalo-logo.png"
                    alt="app"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row bottom">
          <div className="col-12 col-md-1 imgFooter">
            <img className="zionIcon" src="/images/zion-logo.jpg" alt="zion" />
          </div>
          <div className="col-12 col-md-9 info">
            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <ul>
              <li>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </li>
              <li>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </li>
              <li>Số Điện Thoại (Hotline): 1900 545 436</li>
              <li>
                Email: <span>support@tix.vn</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 imgFooter d-flex justify-content-end">
            <a href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1">
              <img
                className="boCongThuongIcon"
                src="/images/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="boCongThuong"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
