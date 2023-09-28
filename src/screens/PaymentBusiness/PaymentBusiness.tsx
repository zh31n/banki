'use client';
import React, {useEffect} from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroPaymentBusiness from '@/screens/PaymentBusiness/components/IntroPaymentBusiness/IntroPaymentBusiness';
import data from '@/core/data/index';
import SlipsBanksSlider from '@/screens/SlipsBusinessPage/components/SlipsBanksSlider/SlipsBanksSlider';
import Bonus from '@/components/Bonus/Bonus';
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks';
import OffersInvest from '@/screens/InvestmentPage/components/OffersInvest/OffersInvest';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import TopBanks from '@/components/TopBanks/TopBanks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import HaveQues from '@/components/HaveQues/HaveQues';
import {useDispatch} from 'react-redux';
// import { BusinessCreditItemInterface } from '@/core/services/Business';
// import { BusinessCreditsSelector } from '@/core/store/business/selectors';
import {businessCreditsGetRequestedAction} from '@/core/store/business/actions';

const PaymentBusiness = () => {
    // const credits: BusinessCreditItemInterface[] = useSelector(BusinessCreditsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    return (
        <PageWrapper>
            <IntroPaymentBusiness items={data.BusinessServicePage.introChoose}/>
            <SlipsBanksSlider items={data.SlipsBanksPage.sliderItems}/>
            <Bonus
                title={'Откройте счет для бизнеса бесплатно'}
                text={'Полгода со скидкой 50% на пакет услуг “Самое важное” и “Все включено” для новых клиентов'}
                height={166}
            />
            <OffersBanks
                isSelect={false}
                options={['']}
                sub={''}
                title={''}
                deposits={data.PaymentBusinessPage.offersDeposits}
            />
            <OffersInvest items={data.PaymentBusinessPage.offersMoth}/>
            <Feedback title={'Отзывы'} sub={' о кредитах'}/>
            <TopBanks
                banks={data.PaymentBusinessPage.banks}
                title={'Потребительские кредиты в Бишкеке '}
                sub={'- ТОП 10 банков в 2023 году'}
                fz={36}
            />
            <FrequentQuestions title={'Частые вопросы'} items={data.PaymentBusinessPage.questData}/>
            <HaveQues/>
        </PageWrapper>
    );
};

export default PaymentBusiness;
