'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Bonus from '../../components/Bonus/Bonus';
import Offers from './components/Offers/Offers';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Mailing from '@/components/Mailing/Mailing';
import Compilations from '@/screens/CreditMapPage/components/Сompilations/Сompilations';
import LatestNews from '@/components/LatestNews/LatestNews';
import Communicate from '@/components/Communicate/Communicate';
import React, { useEffect } from 'react';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import { useDispatch } from 'react-redux';
import { cardsGetRequestedAction } from '@/core/store/cards/actions';
import { newsGetRequestedAction } from '@/core/store/news/actions';
import { creditCards } from '@/core/data/cards/credit_cards';

export type creditCardT = {
  bank_name: string;
  name: string;
  type: string;
  currency: string;
  limit: number;
  grace_period: number;
  rate: number;
  service_1_year: number;
  follow_up_service: number;
};

export default function CreditMapPage() {
  // const cards: CardInterface[] = useSelector(CardsSelector);
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsGetRequestedAction());
    dispatch(newsGetRequestedAction());
  }, []);
  const staticData = data.CreditCardsPage;
  const staticCards: creditCardT[] = creditCards;

  return (
    <Wrapper>
      <Navigation />
      <Bonus />
      <Offers cards={staticCards} />
      <OffersMonth />
      <Mailing />
      <Compilations />
      <LatestNews />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о кредитных картах'} />
      <BanksWithButton
        cards={staticCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.info} />
    </Wrapper>
  );
}
