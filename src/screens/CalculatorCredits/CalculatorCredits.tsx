'use client';
import React, { useEffect } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroCalculate from '@/screens/CalculatorCredits/components/IntroCalculate/IntroCalculate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { useDispatch } from 'react-redux';
import { creditsGetRequestedAction } from '@/core/store/credits/actions';
import CreditBankList from '@/components/credits/CreditBankList';

type ItemT = {
  title: string;
  text: string;
};
interface CalculatorCreditsProps {
  staticData: {
    questData: ItemT[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allOffers?: any;
}

const CalculatorCredits = (props: CalculatorCreditsProps) => {
  const { staticData, allOffers } = props;
  // const credits: CreditInterface[] = useSelector(CreditsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(creditsGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <IntroCalculate />
      <CreditBankList
        credits={allOffers}
        isSelect={true}
        sub={' предложений'}
        title={allOffers.length}
        options={['По процентной ставке', 'По максимальной сумме', 'По максимальному сроку']}
      />
      <Feedback title={'Отзывы'} sub={' о кредитах'} />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default CalculatorCredits;
