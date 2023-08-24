import React from 'react';
import s from './SoloInvest.module.scss';
import BondItem from "@/screens/InvestmentPage/components/BondItem/BondItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {StaticImageData} from "next/image";

type InvestT = {
    img: StaticImageData
    title: string
    sub: string
    rate: number
    money: number
}
type Props = {
    items: InvestT[]
}
const SoloInvest = ({items}: Props) => {
    return (
        <div className={s.wrap}>
            <div className={s.title}>Инвестируйте самостоятельно</div>
            <div className={s.sub}>
                Изучайте мир инвестиций, ищите интересные идеи и открывайте подходящий брокерский
                счет. Получайте<br/> удовольствие от создания собственного инвестиционного портфеля и зарабатывайте на
                нем.
            </div>
            <div className={s.cont}>
                <div className={s.stocks}>
                    <div className={s.title}>
                        <span>Акции</span>
                        <span>Как на этом заработать</span>
                    </div>
                    <div className={s.dohod}>Доходность в год</div>
                    <div className={s.items_cont}>
                        {items.map((el, index) => <BondItem img={el.img} title={el.title} sub={el.sub}
                                                            rate={el.rate}
                                                            money={el.money} key={index}/>)
                        }
                    </div>
                    <BlueBtn text={'Смотреть все'} width={409}/>
                </div>
                <div className={s.stocks}>
                    <div className={s.title}>
                        <span>Облигации</span>
                        <span>Как на этом заработать</span>
                    </div>
                    <div className={s.dohod}>Доходность в год</div>
                    <div className={s.items_cont}>
                        {items.map((el, index) => <BondItem img={el.img} title={el.title} sub={el.sub}
                                                            rate={el.rate}
                                                            money={el.money} key={index}/>)
                        }
                    </div>
                    <BlueBtn text={'Смотреть все'} width={409}/>
                </div>
            </div>
        </div>
    );
};

export default SoloInvest;