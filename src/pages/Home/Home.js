import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";

import { fetchFilms } from "./reducer/getFilmsAction";
import { fetchSystem } from "./reducer/getFilmsAction";

import Button from "../../components/Button";
import CinemaSystem from "./CinemaSystem/CinemaSystem";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "pink",
        margin: "-10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "pink",
        margin: "-10px",
      }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const { listFilms, listSystems } = useSelector(
    (state) => state.listFilmsReducer
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSystem());
  }, [dispatch]);

  const renderListFilms = () => {
    return listFilms.map((film, index) => {
      return (
        <div key={index} className={cx("card")}>
          <div className={cx("card-top")}>
            <img src={film.hinhAnh} alt="" />
            <h1>{film.tenPhim}</h1>
          </div>
          <div className={cx("card-bottom")}>
            <Button
              primary
              small
              className={cx("detail-pri")}
              to={`/detail/${film.maPhim}`}
            >
              Mua vé
            </Button>
            <Button
              outline
              small
              className={cx("detail-out")}
              to={`/detail/${film.maPhim}`}
            >
              Chi tiết
            </Button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("content-top")}>
          <div className={cx("head")}>
            <Button
              rounded
              outline
              onClick={() => {
                dispatch({
                  type: "NOW_SHOWING",
                });
              }}
            >
              Dang chieu
            </Button>
            <Button
              rounded
              outline
              onClick={() => {
                dispatch({
                  type: "COMMING_SOON",
                });
              }}
            >
              Sap chieu
            </Button>
          </div>
          <div className={cx("body")}>
            <Slider {...settings}>{renderListFilms()}</Slider>
          </div>
        </div>
        <div className={cx("content-bottom")}>
          <CinemaSystem listSystems={listSystems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
