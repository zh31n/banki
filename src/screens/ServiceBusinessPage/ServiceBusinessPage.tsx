import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroServiceBusiness from "@/screens/ServiceBusinessPage/components/IntroServiceBusiness/IntroServiceBusiness";
import data from "@/core/data";
import ChooseLegal from "@/components/ChooseLegal/ChooseLegal";
import Bonus from "@/components/Bonus/Bonus";
import DepositItemsMap from "@/components/Deposit/DepositItemsMap/DepositItemsMap";
import s from './ServiceBusinessPage.module.scss';
import OffersInvest from "@/screens/InvestmentPage/components/OffersInvest/OffersInvest";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import LatestNews from "@/components/LatestNews/LatestNews";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

const ServiceBusinessPage = () => {
    return (
        <PageWrapper>
            <IntroServiceBusiness items={data.BusinessServicePage.introChoose}/>
            <ChooseLegal/>
            <Bonus title={'Откройте счет для бизнеса бесплатно'} height={166}
                   text={'Полгода со скидкой 50% на пакет услуг “Самое важное” и “Все включено” для новых клиентов'}
            />
            <div className={s.offers_wrap}>
                <DepositItemsMap deposits={data.BusinessServicePage.offers}/>
            </div>
            <OffersInvest items={data.BusinessServicePage.offersMoth}/>
            <Feedback title={'Отзывы '} sub={'об РКО '}/>
            <LatestNews/>
            <FrequentQuestions title={'Частые вопросы'} items={data.BusinessServicePage.questData}/>
        </PageWrapper>
    );
};

export default ServiceBusinessPage;