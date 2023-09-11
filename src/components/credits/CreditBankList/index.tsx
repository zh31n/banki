import React from 'react';
import s from './index.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {CreditInterface} from "src/core/api/Credits";
import CreditBankItem from "@/components/credits/CreditBankItem";

interface CreditBankListProps {
    credits: CreditInterface[];
    title: string;
    sub: string;
    options: string[];
    isSelect: boolean;
}

const CreditBankList = (props: CreditBankListProps) => {
    const {
        credits,
        options,
        title,
        sub,
        isSelect,
    } = props;

    return (
        <div className={s.deposits}>
            <div className={s.title}>
                    <span>
                        <mark>{title}</mark>
                        {sub}
                    </span>
                {isSelect && <CustomSelect img={lines} options={options}/>}
            </div>
            <div className={s.deposit_offers}>
                {credits.map((item) => <CreditBankItem item={item} key={item.id} />)}
            </div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все'} width={235}/>
            </div>
        </div>
    );
};

export default CreditBankList;