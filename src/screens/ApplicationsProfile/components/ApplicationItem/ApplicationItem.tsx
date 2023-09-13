import React from 'react';
import s from './ApplicationItem.module.scss';

type Props = {
    name: string
    sub: string
    status: number
}
const ApplicationItem = ({sub, status, name}: Props) => {
    return (
        <div className={s.item}>
            <div className={s.info}>
                <span>{name}</span>
                <span>{sub}</span>
            </div>
            {status === 0 && <button className={s.btn_zero}>Одобрено</button>}
            {status === 1 && <button className={s.btn_one}>В обработке</button>}
            {status === 2 && <button className={s.btn_two}>Отклонено</button>}
        </div>
    );
};

export default ApplicationItem;