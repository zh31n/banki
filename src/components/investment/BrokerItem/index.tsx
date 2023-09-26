import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import { BrokerInterface } from '@/core/services/Investing';
import mockBrokerImage from '@/assets/icons/banki_icon/ifk_solid.svg';

interface BrokerItemProps {
  item: BrokerInterface;
}

const BrokerItem = (props: BrokerItemProps) => {
  const {
    item: { name, description },
  } = props;

  return (
    <div className={s.loan_org}>
      <Image alt={'icon'} src={mockBrokerImage} />
      <div className={s.info}>
        <div>{name}</div>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default BrokerItem;
