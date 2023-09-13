import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroCryptoInv from "@/screens/CryptoInv/components/IntroCryptoInv/IntroCryptoInv";
import data from "@/core/data";
import StockInvCalculate from "@/screens/StocksInvestPage/components/StockInvCalculate/StockInvCalculate";
import OffersCrypto from "@/screens/CryptoInv/components/OffersCrypto/OffersCrypto";
import s from './CryptoInv.module.scss';
import SoloInvest from "@/screens/InvestmentPage/components/SoloInvest/SoloInvest";
import Mailing from "@/components/Mailing/Mailing";
import LatestNews from "@/components/LatestNews/LatestNews";

const CryptoInv = () => {

    const changeTime = {
        date: '23.08.2023',
        time: '09:48'
    }

    return (
        <PageWrapper>
            <IntroCryptoInv items={data.CryptoPage.introChoose}/>
            <StockInvCalculate chooseD={data.CryptoPage.calc_choose_d}/>
            <OffersCrypto offers={data.CryptoPage.CryptoOffers} count={'331 валюта'}
                          options={['Изменение цены за 1 день']} changeTime={changeTime}
            />
            <div className={s.text}>
                <p>
                    Не является офертой. Данные предоставлены currency.com в информационных целях и не являются
                    индивидуальной инвестиционной рекомендацией. Администрация сайта Banki.ru и currency.com не несут
                    никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе этих
                    данных. Читать все
                </p>
            </div>
            <SoloInvest items={data.CryptoPage.Bonds} isSub={false} title={'Другие инвестиционные продукты'}/>
            <Mailing/>
            <LatestNews/>
        </PageWrapper>
    );
};

export default CryptoInv;