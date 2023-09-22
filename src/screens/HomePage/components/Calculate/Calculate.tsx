'use client'


import React, {useState} from 'react';
import s from './Calculate.module.scss'
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import MoneySelect from "@/UI/MoneySelect/MoneySelect";
import CustomWhiteSelectTitle from "@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle";
import CalcCredits from "@/screens/HomePage/components/Calculate/CalcCredits/CalcCredits";

type choiseItemsT = {
    name: string
    active: boolean
}
const choises: choiseItemsT[] = [
    {name: 'Кредиты', active: true},
    {name: 'Вклады', active: false},
    {name: 'Рефинансирование', active: false},
    {name: 'ОСАГО', active: false},
    {name: 'РКО', active: false},
    {name: 'Ипотека', active: false},
    {name: 'Страхование ипотеки', active: false},
    {name: 'Сбережения', active: false},
    {name: 'Каско', active: false},
]


const Calculate = () => {

    const [currentChoose, setCurrentChoose] = useState<string>('Кредиты');
    const choiseItems = choises.map((el, index) => <ChoiseItem key={index}
                                                               name={el.name} setActive={setCurrentChoose}
                                                               active={currentChoose === el.name}/>)
    return (
        <div className={s.calc}>
            <div className={s.choises_items}>{choiseItems}</div>
            <CalcCredits/>
        </div>
    );
};

export default Calculate;