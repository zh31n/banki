import React from 'react';
import s from "./IntroSpecialOffer.module.scss";
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";


type choisesT = {
    name: string
    active: boolean
}
type Props = {
    choises: choisesT[],
    setActive?: React.Dispatch<string>
    current?: string
}

const IntroSpecialOffer = ({choises, current, setActive}: Props) => {


    return (
        <div className={s.page_info}>
            <div className={s.page_info_i}>
                <div className={s.pageName}>
                    Главная / Вклады / <mark>Специальные предложения</mark>
                </div>
                <div className={s.title}>
                    Специальные <mark>предложения</mark>
                </div>
                <div className={s.choiseItems}>
                    <ChoiseItemsMap currentChoise={current} setActive={setActive} choiseItems={choises}/>
                </div>
            </div>
        </div>
    );
};

export default IntroSpecialOffer;