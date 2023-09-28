'use client';
import React, {useEffect} from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroServiceBusiness from '@/screens/ServiceBusinessPage/components/IntroServiceBusiness/IntroServiceBusiness';
import data from '@/core/data/index';
import ChooseLegal from '@/components/ChooseLegal/ChooseLegal';
import Bonus from '@/components/Bonus/Bonus';
import s from './ServiceBusinessPage.module.scss';
import OffersInvest from '@/screens/InvestmentPage/components/OffersInvest/OffersInvest';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import LatestNews from '@/components/LatestNews/LatestNews';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem';

const ServiceBusinessPage = () => {

    useEffect(() => {

    }, []);

    return (
        <PageWrapper>
            <IntroServiceBusiness items={data.BusinessServicePage.introChoose}/>
            <ChooseLegal/>
            <Bonus
                title={'Откройте счет для бизнеса бесплатно'}
                height={166}
                text={'Полгода со скидкой 50% на пакет услуг “Самое важное” и “Все включено” для новых клиентов'}
            />
            <div className={s.offers_wrap}>
                {data.BusinessServicePage.offers.map((item, index) => (
                    <DepositOfferItem item={item} key={index}/>
                ))}
            </div>
            <OffersInvest items={data.BusinessServicePage.offersMoth}/>
            <Feedback title={'Отзывы '} sub={'об РКО '}/>
            <LatestNews/>
            <FrequentQuestions title={'Частые вопросы'} items={data.BusinessServicePage.questData}/>
        </PageWrapper>
    );
};

export default ServiceBusinessPage;
