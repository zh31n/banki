'use client';

import React from 'react';
import Wrapper from '@/containers/Wrapper';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import LatestNews from '@/components/LatestNews/LatestNews';
import Navigation from '@/screens/BusinessPage/components/Navigation/Navigation';
import Kassa from '@/screens/BusinessPage/components/Kassa/Kassa';
import Ecvaring from '@/screens/BusinessPage/components/Ecvaring/Ecvaring';
import CreditForBank from '@/screens/BusinessPage/components/CreditForBank/CreditForBank';
import Text from '@/screens/BusinessPage/components/Text/Text';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { newsGetRequestedAction } from '@/core/store/news/actions';
import {
  businessCardsGetRequestedAction,
  businessCreditsGetRequestedAction,
} from '@/core/store/business/actions';

export default function BusinessPage() {
  // const credits: BusinessCreditItemInterface[] = useSelector(BusinessCreditsSelector);
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState<string>('все продукты');

  useEffect(() => {

  }, []);

  return (
    <Wrapper>
      <Navigation current={current} setActive={setCurrent} />
      <Kassa />
      <CreditForBank />
      <Ecvaring />
      <Text />
      <OffersMonth />
      <LatestNews />
    </Wrapper>
  );
}
