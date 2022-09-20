import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from "antd";

import { fetchBanner } from "./reducer/bannerCarouselAction";

import classNames from 'classnames/bind'
import styles from './CarouselHeader.module.scss'

const cx = classNames.bind(styles)

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselHeader = () => {

  const dispatch = useDispatch()
  const { listBanner } = useSelector(state => state.listBannerReducer)

  useEffect(() => {

    dispatch(fetchBanner())

  }, [dispatch])

  const renderBanner = () => {
    return listBanner.map((banner, index) => {
      return (
        <div key={index}>
          <img className={cx('images-banner')} src={banner.hinhAnh} alt='' style={contentStyle} />
        </div>
      )
    })
  }

  return (
    <Carousel effect="fade">
      {renderBanner()}
    </Carousel>
  );
};

export default CarouselHeader;
