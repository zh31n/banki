import React from 'react';
import s from './Bonus.module.scss';
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import Image from "next/image";

const Bonus = () => {
    return (
        <div className={s.bonus}>
            <div className={s.logo}>Логотип</div>
            <div className={s.info}>
                <div className={s.title}>Бонус до 2000 рублей за открытие вклада!</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <Image src={arr_r} alt={'иконка стрелки вправо'} />
        </div>
    );
};

export default Bonus;