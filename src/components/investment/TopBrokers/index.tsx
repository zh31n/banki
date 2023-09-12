import React from 'react';
import s from './index.module.scss';
import TopBrokerItem from "@/components/investment/TopBrokerItem";
import {BrokerInterface} from "@/core/services/Investing";

interface TopBrokersProps {
    title?: string
    subtitle?: string
    brokers: BrokerInterface[];
}

const TopBrokers = (props: TopBrokersProps) => {
    const {
        title = 'ТОП 10',
        subtitle = 'брокеров в 2023 году',
        brokers,
    } = props;

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <mark>{title}</mark> {subtitle}
            </div>
            <div className={s.banks_items}>
                {brokers.map(item => <TopBrokerItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export default TopBrokers;