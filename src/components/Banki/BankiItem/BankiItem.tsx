import React from 'react';
import s from './BankiItem.module.scss';
import Image, { StaticImageData } from 'next/image';

type bankiPropsT = {
  img: StaticImageData;
  name: string;
  rating: number;
};

const BankiItem = ({ img, name, rating }: bankiPropsT) => {
  return (
    <div className={s.bank_item}>
      <Image src={img} alt={'sbi'} />
      <div className={s.info}>
        <div>{name}</div>
        <span>Рейтинг: {rating}</span>
      </div>
    </div>
  );
};

export default BankiItem;
