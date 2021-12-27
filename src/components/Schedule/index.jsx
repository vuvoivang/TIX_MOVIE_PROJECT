import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListMovieAgents from "../ListMovieAgents";
import { fetchSystemCinema, fetchSystemCinemaAgents } from "./modules/action";
import "./style.css";
export default function Schedule() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSystemCinema());
    dispatch(fetchSystemCinemaAgents());
    //eslint-disable-next-line
  }, []);
  const state = useSelector((rootState) => rootState.systemCinemaReducer);
  const renderLogos = () => {
    return state.system.data?.map((item, index) => (
      <li key={index} className="nav-item">
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          data-toggle="tab"
          href={`#${item.maHeThongRap}`}
          role="tab"
          aria-selected="true"
        >
          <img src={item.logo} alt="icon" />
        </a>
      </li>
    ));
  };

  const renderAgentsCinema = (cumRap) => {
    return cumRap.lstCumRap?.map((item, index) => {
      const subName = item.tenCumRap.split("-");
      return (
        <li key={index} className="nav-item">
          <a
            className={
              index === 0
                ? "nav-link agent-cinestar active"
                : "nav-link agent-cinestar"
            }
            href={`#${item.maCumRap}`}
            data-toggle="tab"
            // href="#" + {item.ma}
            role="tab"
            aria-selected="true"
          >
            <img src="images/bhd-star-bitexco-15379552241200.jpg" alt="" />
            <div className="content">
              <h1>
                <span className="name">{subName[0]}</span> - {subName[1]}{" "}
              </h1>
              <p>{item.diaChi}</p>
              <span className="detail">[chi tiết]</span>
            </div>
          </a>
        </li>
      );
    });
  };

  const renderAgents = () => {
    return state.agents.data?.map((item, index) => (
      // arr : 6 phan tu tuong ung 6 rap
      <div
        className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        id={item.maHeThongRap}
        key={index}
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <ul className="agents nav nav-tabs" id="myTab2" role="tablist">
          {renderAgentsCinema(item)}
        </ul>

        <div className="tab-content" id="myTabContent2">
          <ListMovieAgents cumRap={item} />
        </div>
      </div>
    ));
  };

  return (
    <section id="schedule" className="schedule">
      <div
        className="container div-background"
        style={{
          backgroundImage: "url(images/back-news.png)",
        }}
      />
      <div className="container container-flex">
        <ul className="nav nav-tabs" id="myTab1" role="tablist">
          {renderLogos()}
        </ul>
        <div className="tab-content" id="myTabContent1">
          {renderAgents()}
        </div>
      </div>
    </section>
  );
}
