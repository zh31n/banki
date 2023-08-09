import React from 'react';
import s from './StockItem.module.scss';

type Props = {
    title:string
    sup:string
}

const StockItem = ({title,sup}:Props) => {
    return (
        <div className={s.stock_item}>
            <div className={s.title}>{title}</div>
            <div className={s.sup}>{sup}</div>
        </div>
    );
};

export default StockItem;