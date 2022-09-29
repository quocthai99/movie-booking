import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fetchDetailFilm } from './reducer/DetailActions';

import classNames from "classnames/bind";
import styles from "./Detail.module.scss";


const cx = classNames.bind(styles);

const Detail = () => {

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.detailReducer)
  const params = useParams()
  console.log(data);
  

  useEffect(() => {
    dispatch(fetchDetailFilm(params.id))
  }, [dispatch,params.id])

  return (
    <div className={cx('wrapper')} >
      <div className={cx('inner')} >
        <div className={cx('poster')}>
          <img src={data.hinhAnh} alt='' />
        </div>
        <div className={cx('info')}>
          <div className={cx('movie-title')}>
            {data.tenPhim}
          </div>
          <div className={cx('movie-detail')}>
            <div className={cx('set')}>
              <label>Release Date</label>
              <span>March 3, 2021</span>
            </div>
            <div className={cx('set')}>
              <label>Running Time</label>
              <span> 1 Hr 47 min </span>
            </div>
            <div className={cx('set')}>
              <label>Gener</label>
              <span>Fantasy / Adventure / Family</span>
            </div>
          </div>
          <div className={cx('movie-description')}>
            {data.moTa}
          </div>
          <div className={cx('movie-cast')}>
            <div className={cx('header')}>Voice Cast</div>
            <div className={cx('list')}>
              <div className={cx('cast')}>
                <img src='https://i.pinimg.com/originals/70/b0/13/70b01337bfe05ff4e98913c329fa14cc.jpg' alt='cast-1' />
                <label>{data.biDanh}</label>
              </div>
              <div className={cx('cast')}>
                <img src='https://i.pinimg.com/originals/70/b0/13/70b01337bfe05ff4e98913c329fa14cc.jpg' alt='cast-1' />
                <label>{data.biDanh}</label>
              </div>
              <div className={cx('cast')}>
                <img src='https://i.pinimg.com/originals/70/b0/13/70b01337bfe05ff4e98913c329fa14cc.jpg' alt='cast-1' />
                <label>{data.biDanh}</label>
              </div>
              <div className={cx('cast')}>
                <img src='https://i.pinimg.com/originals/70/b0/13/70b01337bfe05ff4e98913c329fa14cc.jpg' alt='cast-1' />
                <label>{data.biDanh}</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail