'use client';

import React, { useEffect, useState } from 'react';
import s from './CalcCredits.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';


type Props = {
  currency?:string;
  setCurrency?: React.Dispatch<string>;
}

const CalcCredits = ({currency,setCurrency}:Props) => {



  const [money, setMoney] = useState<number>(12000);
  const [years, setYears] = useState<string>('1');
  const [pay, setPay] = useState<number>(7988);
  const stavka = 15;


  useEffect(() => {
    const procent = stavka / 100;
    const sun = procent + (procent / (1 + procent)) * (Number(years) * 12 - 1);
    const sum = money * sun;
    const result = Math.round(sum / (Number(years) * 12));
    setPay(result);
  }, [years, money, pay]);

  return (
    <div className={s.calc_i}>
      <div className={s.calc_inps}>
        <MoneySelect currency={currency} setCurrency={setCurrency} value={money} setValue={setMoney} />
        <div className={s.stavka}>
          <span>Ставка:</span>
          <span>От {stavka}%</span>
        </div>
        <CustomWhiteSelectTitle
          value={years}
          setValue={setYears}
          title={'Срок в годах'}
          options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']}
        />
        <div className={s.stavka}>
          <span>Платеж:</span>
          <span>{pay} {currency}</span>
        </div>
      </div>
      <BlueBtn text={'Подобрать кредит'} width={840} />
    </div>
  );
};

export default CalcCredits;
