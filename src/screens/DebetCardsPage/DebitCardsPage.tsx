'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/DebetCardsPage/components/Navigation/Navigation';
import Bonus from '@/components/Bonus/Bonus';
import Offers from '@/screens/CreditMapPage/components/Offers/Offers';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Mailing from '@/components/Mailing/Mailing';
import React, { useEffect, useState } from 'react';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import Communicate from '@/components/Communicate/Communicate';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Compilations from '@/screens/DebetCardsPage/components/Сompilations/Сompilations';
import { useDispatch } from 'react-redux';
import { cardsGetRequestedAction } from '@/core/store/cards/actions';
import { newsGetRequestedAction } from '@/core/store/news/actions';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import { debitCards } from '@/core/data/cards/debit_cards';

export type debitCardT = {
  bank_name: string;
  name: string;
  type: string;
  currency: string;
  interest_on_balance: number;
  cash_back: number;
  service_1_year: number;
  follow_up_service: number;
};

export default function DebitCardsPage() {
  // const cards: CardInterface[] = useSelector(CardsSelector);
  // const news: NewsInterface[] = useSelector(NewsListSelector);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState<string>('все');
  useEffect(() => {
    dispatch(cardsGetRequestedAction());
    dispatch(newsGetRequestedAction());
  }, []);

  const staticCards: debitCardT[] = debitCards;

  const dataMap = data.DebitCardsPage.questData;
  return (
    <Wrapper>
      <Navigation setActive={setCurrent} current={current} />
      <Bonus />
      <Offers cards={staticCards} />
      <OffersMonth />
      <Mailing />
      <Compilations />
      <LatestNews />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о дебетовых картах'} />
      <BanksWithButton
        cards={staticCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />

      <FrequentQuestions title={'Важная информация'} items={dataMap} />
    </Wrapper>
  );
}
