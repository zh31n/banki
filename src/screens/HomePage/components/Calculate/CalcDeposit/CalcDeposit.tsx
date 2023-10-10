'use client';

import React, { useEffect, useState } from 'react';
import s from './CalcDeposit.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';

type Props = {
  currency?:string;
  setCurrency?: React.Dispatch<string>;
}
const CalcDeposit = ({currency,setCurrency}:Props) => {
  const [money, setMoney] = useState<number>(200000);
  const [days, setDays] = useState<number>(365);
  const [pay, setPay] = useState<number>(0);
  const stavka = 22;
  useEffect(() => {
    const result = Math.round((money * stavka * days) / 365 / 100);
    setPay(result);
  }, [days, money, pay]);

  return (
    <div className={s.calc_i}>
      <div className={s.calc_inps}>
        <MoneySelect currency={currency} setCurrency={setCurrency} value={money} setValue={setMoney} />
        <div className={s.stavka}>
          <span>Ставка :</span>
          <span>От {stavka}%</span>
        </div>
        <CustomInputTitle value={days} setValue={setDays} title={'Срок в днях'} />
        <div className={s.stavka}>
          <span>Профит :</span>
          <span>{pay} {currency}</span>
        </div>
      </div>
      <BlueBtn text={'Подобрать вклад'} width={840} />
    </div>
  );
};

export default CalcDeposit;
