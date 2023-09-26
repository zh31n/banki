import React from 'react';
import s from './IntroCredits.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import clock from '@/assets/icons/time.svg';

const IntroCredits = () => {
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Кредиты</mark>
        </div>
        <div className={s.title}>
          Найдем банк, где вам одобрят
          <br /> кредит по выгодной ставке
        </div>
        <div className={s.sub}>
          <Image src={clock} alt={''} />
          Получите онлайн-решение за 5 минут
        </div>
        <div className={s.calculate}>
          <MoneySelect width={385} />
          <CustomWhiteSelectTitle title={'Срок в годах'} options={['3']} width={385} />
          <CustomWhiteSelectTitle title={'Цель'} options={['Просто деньги']} width={385} />
          <BlueBtn text={'Продолжить'} width={385} height={60} />
        </div>
      </div>
    </div>
  );
};

export default IntroCredits;
