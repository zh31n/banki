import React from 'react';
import s from './TopBankItem.module.scss';

type Props = {
    item:{
        title:string
        sub:string
        stavka:number
        time:number
        money:string
        osob:string
    }
}

const TopBankItem = ({item}:Props) => {
    return (
        <div className={s.item}>
            <div className={s.title}>
                <div>{item.title}</div>
                <span>{item.sub}</span>
            </div>
            <div className={s.info}>
                <div>Эффективная ставка</div>
                <span>до {item.stavka}%</span>
            </div>
            <div className={s.info}>
                <div>Срок</div>
                <span>{item.time} дн.</span>
            </div>
            <div className={s.info}>
                <div>Сумма</div>
                <span>{item.money} ₽</span>
            </div>
            <div className={s.info}>
                <div>Особенности</div>
                <span>{item.osob}</span>
            </div>
        </div>

    );
};

export default TopBankItem;