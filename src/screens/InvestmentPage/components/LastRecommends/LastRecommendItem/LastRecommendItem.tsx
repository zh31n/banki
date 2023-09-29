import React from 'react';
import s from './LastRecommendItem.module.scss';
import Image from 'next/image';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';
import { InvestingMarketInterface } from '@/core/services/Investing';
import mockMarketLogo from '@/assets/icons/banki_icon/loco.svg';

interface LastRecommendItemProps {
  item: InvestingMarketInterface;
}
const LastRecommendItem = (props: LastRecommendItemProps) => {
  const {
    item: { name, description },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.info}>
        <Image src={mockMarketLogo} alt={'bank icon'} />
        <div>
          <span>{name}</span>
          <span>{description}</span>
        </div>
      </div>
      <div className={s.line} />
      <WhiteBorderBlueBtn text={'Купить акции'} />
    </div>
  );
};

export default LastRecommendItem;
