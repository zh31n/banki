'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import Intro from '@/screens/SavingAccountsPage/components/Intro/Intro';
import Bonus from '@/components/Bonus/Bonus';
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks';
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import TopBanks from '@/components/TopBanks/TopBanks';
import { DepositCardInterface } from '@/core/services/Deposits';
import { useDispatch, useSelector } from 'react-redux';
import { DepositsSelector } from '@/core/store/deposits/selectors';
import { depositsGetRequestedAction } from '@/core/store/deposits/actions';

interface SavingAccountsPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  staticData: any;
}

const SavingAccountsPage = ({ staticData }: SavingAccountsPageProps) => {
  const deposits: DepositCardInterface[] = useSelector(DepositsSelector);
  const dispatch = useDispatch();
  const bonus = deposits[0];

  useEffect(() => {
    dispatch(depositsGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <Intro />
      {bonus && (
        <Bonus title={`Бонус до ${bonus.min_amount} рублей за открытие вклада!`} text={bonus.description} />
      )}
      <OffersBanks
        isSelect={true}
        deposits={staticData.offersBanks}
        title={`${staticData.offersBanks.length} вклада`}
        sub={' подобрано'}
        options={['По процентной ставке', 'По рейтингу банка', 'По максимальному взносу']}
      />
      <OfferMoth offers={deposits} />
      <Feedback title={'Отзывы'} sub={' о вкладах'} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
      <TopBanks banks={deposits} />
    </PageWrapper>
  );
};

export default SavingAccountsPage;
