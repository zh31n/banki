'use client';

import React, { useEffect, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroMortgage from '@/screens/MortgagePage/components/IntroMortgage/IntroMortgage';
import Bonus from '@/components/Bonus/Bonus';
import Mailing from '@/components/Mailing/Mailing';
import Compilations from '@/screens/CreditsIpotekaPage/components/Сompilations/Compilations';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { MortgageInterface } from '@/core/services/Mortgages';
import { MortgagesListSelector } from '@/core/store/mortgages/selectors';
import { mortgagesGetRequestedAction } from '@/core/store/mortgages/actions';
import MortgageOfferList from '@/components/mortgages/MortgageOfferList';

type ChoiseT = {
  active: boolean;
  name: string;
};
type questT = {
  title: string;
  text: string;
};

interface MortgagePageProps {
  staticData: {
    choices: ChoiseT[];
    questData: questT[];
  };
}

const MortgagePage = (props: MortgagePageProps) => {
  const { staticData } = props;
  const [current, setCurrent] = useState<string>('Ипотека');
  const mortgages: MortgageInterface[] = useSelector(MortgagesListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mortgagesGetRequestedAction());
  }, []);

  return (
    <PageWrapper>
      <IntroMortgage setActive={setCurrent} current={current} items={staticData.choices} />
      <Bonus title={'Мастер подбора ипотеки'} />
      <MortgageOfferList mortgages={mortgages} title={`${mortgages.length} кредитов `} />
      <Mailing />
      <Compilations />
      <OffersMonth />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'об ипотеке'} />
      <FrequentQuestions title={''} items={staticData.questData} />
    </PageWrapper>
  );
};

export default MortgagePage;
