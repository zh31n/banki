import React from 'react';
import s from './Deposits.module.scss';
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import DepositItemsMap from "@/components/DepositItemsMap/DepositItemsMap";
import loco from "@/assets/icons/banki_icon/loco.svg";
import sber from "@/assets/icons/banki_icon/sber.svg";
import BlueBtn from "@/components/BlueBtn/BlueBtn";

type depositsT = {
    name: string
    sub: string
    stavka: number
    time: string
    money: string
    img: string
    charcs: string[]
}

const deposits: depositsT[] = [
    {
        name: 'Локо-Банк',
        sub: 'Добро Пожаловать. Локо',
        stavka: 10.10,
        time: '370',
        money: '5000 — 5 млн.',
        img: loco,
        charcs: ['Партнер раздела']
    },
    {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: 6.8,
        time: '30 — 1460',
        money: '3 000 — 1 млн',
        img: sber,
        charcs: ['']
    },
    {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: 6.8,
        time: '30 — 1460',
        money: '3 000 — 1 млн',
        img: sber,
        charcs: ['']
    },
    {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: 6.8,
        time: '30 — 1460',
        money: '3 000 — 1 млн',
        img: sber,
        charcs: ['']
    },
]

const Deposits = () => {
    return (
        <div className={s.deposits}>
            <div className={s.title}>
                    <span>
                        <mark>943 вклада</mark> подобрано
                    </span>
                <CustomSelect img={lines} options={['По популярности']}/>
            </div>
            <div className={s.deposit_offers}>
                <DepositItemsMap deposits={deposits} />
            </div>
            <BlueBtn text={'Смотреть все'} width={235}/>
        </div>
    );
};

export default Deposits;