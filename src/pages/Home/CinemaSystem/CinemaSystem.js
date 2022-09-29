import { Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import classNames from "classnames/bind";
import styles from "./CinemaSystem.module.scss";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

const CinemaSystem = ({ listSystems }) => {
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        <Radio.Group
          value={tabPosition}
          onChange={changeTabPosition}
        ></Radio.Group>
      </Space>
      <Tabs
        className={cx("content-tabs")}
        tabPosition={tabPosition}
        items={listSystems.map((system, index) => {
          return {
            label: (
              <div>
                <img className={cx("logo-system")} src={system.logo} alt="" />
              </div>
            ),
            key: index,
            // child system
            children: (
              <Tabs
                tabPosition={tabPosition}
                items={system.lstCumRap.map((systemAddress, index) => {
                  return {
                    label: (
                      <div className={cx("system-address")}>
                        <img src={systemAddress.hinhAnh} alt="" />
                        <div className={cx("address")}>
                          <h4>{systemAddress.diaChi}</h4>
                          <p>{systemAddress.tenCumRap}</p>
                        </div>
                      </div>
                    ),
                    key: index,
                    // calendar
                    children: systemAddress.danhSachPhim.map((film, index) => {
                      return (
                        <div key={index} className={cx("calendarFilm")}>
                          <div className={cx("calendar-top")}>
                            <img src={film.hinhAnh} alt="" />
                            <h4>{film.tenPhim}</h4>
                          </div>
                          <div className={cx("calendar-bottom")}>
                            {film.lstLichChieuTheoPhim
                              .slice(0, 5)
                              .map((calendarFilm, index) => {
                                return (
                                  <Link key={index} to="/about">
                                    <Button outline small>
                                      {moment(
                                        calendarFilm.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </Button>
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                      );
                    }),
                  };
                })}
              />
            ),
          };
        })}
      />
    </>
  );
};

export default CinemaSystem;
