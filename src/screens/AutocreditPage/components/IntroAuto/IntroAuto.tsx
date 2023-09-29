import React from 'react';
import s from './IntroAuto.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroAuto = () => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Автокредиты</mark>
        </div>
        <div className={s.title}>Подобрать кредит на автомобиль</div>
        <p>Мастер персонального подбора кредитов на покупку автомобиля.</p>
        <div className={s.calc}>
          <MoneySelect width={385} />
          <CustomInputTitle title={'Ставка'} width={188} />
          <CustomInputTitle title={'Ежемесячный платеж'} width={188} />
          <CustomInputTitle title={'Срок в годах'} width={385} />
          <BlueBtn text={'Подобрать кредит'} width={385} />
        </div>
      </div>
    </div>
  );
};

export default IntroAuto;
