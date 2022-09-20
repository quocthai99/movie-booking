import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselHeader from "../components/CarouselHeader";


import classNames from "classnames/bind";
import styles from "./CarouselOnly.module.scss";

const cx = classNames.bind(styles);

const CarouselOnly = ({ children }) => {
  return (
    <div className={cx('wrapper')} >
      <Header />
      <CarouselHeader />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default CarouselOnly;
