import React from 'react';
import s from './IntroSlipBusiness.module.scss';
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";

type ItemT = {
    name: string
    active: boolean
}
type Props = {
    items: ItemT[]
}

const IntroSlipBusiness = ({items}: Props) => {
    return (
        <div className={s.intro}>
            <div className={s.info_cont}>
                <div className={s.breadCrumbs}>
                    Главная / Бизнес / <mark>Дебетовые бизнес карты</mark>
                </div>
                <div className={s.title}>
                    <mark>Дебетовые бизнес карты</mark>
                </div>
                <div className={s.ch_cont}>
                    <ChoiseItemsMap choiseItems={items}/>
                </div>
            </div>
        </div>
    );
};

export default IntroSlipBusiness;