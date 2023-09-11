import React from 'react';
import s from './TopBrokerItem.module.scss';

type Props = {
    item: {
        title: string
        sub: string
        comm: string
        serv: string
    }
}

const TopBrokerItem = ({item}: Props) => {
    return (
        <div className={s.item}>
            <div className={s.title} style={{width: '370px', marginRight: '4rem'}}>
                <div>{item.title}</div>
                <span>{item.sub}</span>
            </div>
            <div className={s.info}>
                <div>Комиссия</div>
                <span>{item.comm} %</span>
            </div>

            <div className={s.info}>
                <div>Обслуживание</div>
                <span>{item.serv} ₽</span>
            </div>
        </div>

    );
};

export default TopBrokerItem;