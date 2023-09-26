'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/InstallmentPage/components/Navigation/Navigation';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import React, { useEffect } from 'react';
import Offers from '@/screens/CreditMapPage/components/Offers/Offers';
import Mailing from '@/components/Mailing/Mailing';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data';
import Bonus from '@/components/Bonus/Bonus';
import InstallmentPageAdvantages from '@/screens/InstallmentPage/components/InstallmentPageAdvantages';
import { CardInterface } from '@/core/services/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { CardsSelector } from '@/core/store/cards/selectors';
import { cardsGetRequestedAction } from '@/core/store/cards/actions';
import { creditCardT } from '../CreditMapPage/CreditMapPage';

interface InstallmentPageProps {}

export default function InstallmentPage(props: InstallmentPageProps) {
  const cards: CardInterface[] = useSelector(CardsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsGetRequestedAction());
  }, []);
  const staticData = data.InstallmentPage;
  const staticCards: creditCardT[] = data.CreditCardsPage.creditCards;

  return (
    <Wrapper>
      <Navigation />
      <InstallmentPageAdvantages advantages={staticData.advantages} />
      <Bonus />
      <Offers cards={staticCards} />
      <OffersMonth />
      <Mailing />
      <Feedback title={'Отзывы '} sub={'о кредитных картах'} />
      <BanksWithButton
        cards={staticCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.questData} />
    </Wrapper>
  );
}
