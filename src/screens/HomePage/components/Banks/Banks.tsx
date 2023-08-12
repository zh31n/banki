import React from 'react';
import s from './Banks.module.scss';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import searchI from "@/assets/icons/search.svg";
import BankiItem from "@/components/Banki/BankiItem/BankiItem";
import Image from "next/image";

type bankiT = {
    img: string;
    name: string;
    rating: number;
};
type Props = {
    data: bankiT[]
}

const Banks = ({data}: Props) => {

    const bankiMap = data.map((el, index) => (
        <BankiItem key={index} img={el.img} name={el.name} rating={el.rating}/>
    ));

    return (
        <div className={s.banks}>
            <div className={s.title}>
                Все банки <span>в России</span>
            </div>
            <div className={s.bank_map_cont}>
                <div className={s.picture}/>
                <div className={s.bank_map}>
                    <div className={s.banK_mWrap}>{bankiMap}</div>
                    <div className={s.nav_search}>
                        <BlueBtn text={"Весь список банков"} width={273}/>
                        <div className={s.search}>
                            <Image height={32} width={32} src={searchI} alt={"icon"}/>
                            <input type="text" placeholder={"Введите название банка..."}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banks;