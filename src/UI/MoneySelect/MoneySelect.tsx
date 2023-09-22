'use client'
import React from 'react';
import s from './MoneySelect.module.scss';

type Props = {
    width?: number
    value?:number
    setValue?: React.Dispatch<number>
}

const MoneySelect = ({width,value,setValue}: Props) => {

    const handleChange = e => setValue(e.target.value);

    return (
        <div className={s.summa} style={{width:`${width}px`}}>
            <div className={s.sum_info}>
                <div>Cумма</div>
                <input type="number" value={value} onChange={handleChange}/>
            </div>
            <div className={s.select}>
                <select>
                    <option selected={true} value="₽">₽</option>
                </select>
            </div>
        </div>
    );
};

export default MoneySelect;