import React from 'react';
import s from './MoneySelect.module.scss';

type Props = {
    width?: number
}

const MoneySelect = ({width}: Props) => {
    return (
        <div className={s.summa} style={{width: width ? `${width}px` : ''}}>
            <div className={s.sum_info}>
                <div>Cумма</div>
                <input type="number"/>
            </div>
            <div className={s.select}>
                <select>
                    <option value="">₽</option>
                </select>
            </div>
        </div>
    );
};

export default MoneySelect;