import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroSelectBrokerInv from "@/screens/SelectBrokerInv/components/IntroSelectBrokerInv/IntroSelectBrokerInv";
import data from "@/core/data";
import CalculateBroker from "@/screens/SelectBrokerInv/components/CalculateBroker/CalculateBroker";
import Bonus from "@/components/Bonus/Bonus";
import OffersBroker from "@/components/Offers/OffersBroker/OffersBroker";
import MicroLoansOrgs from "@/screens/MicroLoans/components/MicroLoansOrgs/MicroLoansOrgs";
import HaveQues from "@/components/HaveQues/HaveQues";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import TopBrokers from "@/screens/SelectBrokerInv/components/TopBrokers/TopBrokers";

const SelectBrokerInv = () => {
    return (
        <PageWrapper>
            <IntroSelectBrokerInv items={data.BrokerInvPage.introChoose}/>
            <CalculateBroker items={data.BrokerInvPage.chooseCalc}/>
            <Bonus title={'ВТБ Мои Инвестиции'} height={166}
                   text={'Инвестиционная платформа №1. Большой выбор размещений, 10% годовых' +
                       ' в облигациях российских компаний, консультации профессиональных управляющих'}
            />
            <OffersBroker deposits={data.BrokerInvPage.brokerOffers} isSelect={true} options={['Обслуживание в мес.']}
                          title={'34'}
            />
            <MicroLoansOrgs title={'Все брокеры'} items={data.BrokerInvPage.brokerCompany}/>
            <HaveQues/>
            <FrequentQuestions title={'Частые вопросы'} items={data.BrokerInvPage.questions}/>
            <TopBrokers banks={data.BrokerInvPage.TopBrokers}/>
            <FrequentQuestions title={''} items={data.BrokerInvPage.questionsD}/>

        </PageWrapper>
    );
};

export default SelectBrokerInv;