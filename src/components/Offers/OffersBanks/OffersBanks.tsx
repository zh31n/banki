import React from 'react';
import s from './OffersBanks.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import DepositOfferItem from "@/components/Deposit/DepositOfferItem/DepositOfferItem";
import {DepositCardInterface} from "@/core/api/Deposits";

interface OfferBanksProps {
    deposits: DepositCardInterface[]
    title: string
    sub: string
    options: string[]
}

const OffersBanks = (props: OfferBanksProps) => {
    const {
        deposits,
        options,
        title,
        sub,
    } = props;

    return (
        <div className={s.deposits}>
            <div className={s.title}>
                    <span>
                        <mark>{title}</mark>
                        {sub}
                    </span>
                <CustomSelect img={lines} options={options}/>
            </div>
            <div className={s.deposit_offers}>
                {deposits.map((item) => <DepositOfferItem item={item} key={item.id} />)}
            </div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все'} width={235}/>
            </div>
        </div>
    );
};

export default OffersBanks;