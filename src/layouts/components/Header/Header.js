import React from "react";

import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Button from '../../../components/Button'

import images from "../../../assets/images";

const cx = classNames.bind(styles);

const navList = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "About",
    path: "/about",
  },
];

const Header = () => {
  console.log(images);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img className={cx('image-logo')} src={images.logo} alt="logo" />
        </div>
        <div className={cx("nav")}>
          {navList.map((navItem, index) => (
            <Link className={cx("nav-item")} key={index} to={navItem.path}>
              {navItem.display}
            </Link>
          ))}
        </div>
        <div className={cx("action")}>
          <Button primary>Login</Button>
          <Button outline>Registor</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
