import React, { useEffect, useRef, useState } from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import BrokerItem from '@/components/investment/BrokerItem';
import { BrokerInterface } from '@/core/services/Investing';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';

interface BrokerListProps {
  title: string;
  brokers: BrokerInterface[];
}

const BrokerList = (props: BrokerListProps) => {
  const { title, brokers } = props;
  const sliderRef = useRef(null);
  const [slideItems, setSlideItems] = useState([]);

  useEffect(() => {
    const slides = brokers.slice(0, 15).map((el, index) => (
      <SwiperSlide key={index}>
        <BrokerItem item={el} key={nanoid()} />
      </SwiperSlide>
    ));
    setSlideItems(slides);
  }, []);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{title}</div>
      <div className={s.item_cont}>
        <Image alt={'стрелка влево'} className={s.arr} src={arr_l} onClick={() => handlePrev()} />

        <Swiper id='swiperBbrokers' ref={sliderRef} spaceBetween={10} slidesPerView={3} loop={true}>
          {slideItems}
        </Swiper>

        <Image src={arr_r} className={s.arr} alt={'стрелка вправо'} onClick={() => handleNext()} />

        {/* <div className={s.wrap}>
          {brokers.slice(0, 15).map((item) => (
            <BrokerItem item={item} key={nanoid()} />
          ))}
        </div>
        <Image alt={'arrow'} className={s.arr} src={arr_r} /> */}
      </div>
    </div>
  );
};

export default BrokerList;
