import React from 'react';
import s from './Calculate.module.scss'
import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";
import BlueBtn from "@/components/BlueBtn/BlueBtn";

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
const choiseItems = choises.map((el, index) => <ChoiseItem key={index} name={el.name} active={el.active}/>)

const Calculate = () => {
    return (
        <div className={s.calc}>
            <div className={s.choises_items}>{choiseItems}</div>
            <div className={s.calc_i}>
                <div className={s.calc_inps}>
                    <div className={s.summa}>
                        <div className={s.sum_info}>
                            <div>Cумма</div>
                            <input type="text"/>
                        </div>
                        <div className={s.select}>
                            <select>
                                <option value="">₽</option>
                            </select>
                        </div>
                    </div>
                    <div className={s.stavka}>
                        <span>Ставка:</span>
                        <span>От 10%</span>
                    </div>
                    <div className={s.years}>
                        <div>Срок в годах</div>
                        <select>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                    <div className={s.stavka}>
                        <span>Платеж:</span>
                        <span>7 998 ₽</span>
                    </div>
                </div>
                <BlueBtn text={'Подобрать кредит'} width={840}/>
            </div>
        </div>
    );
};

export default Calculate;