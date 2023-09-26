'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React, { useEffect } from 'react';
import OffersBanks from './components/OffersBanks/OffersBanks';
import { useDispatch } from 'react-redux';
import { cardsGetRequestedAction } from '@/core/store/cards/actions';
// import data from '@/core/data/index';
import { creditCardT } from '../CreditMapPage/CreditMapPage';
import { creditCards } from '@/core/data/cards/credit_cards';

type questItem = {
  title: string;
  text: string;
};

interface SpecialCardsOffersPageProps {
  staticData: {
    questData: questItem[];
  };
}

export default function SpecialCardsOffersPage(props: SpecialCardsOffersPageProps) {
  const { staticData } = props;
  // const cards: CardInterface[] = useSelector(CardsSelector);
  const dispatch = useDispatch();

  const staticCards: creditCardT[] = creditCards;

  useEffect(() => {
    dispatch(cardsGetRequestedAction());
  }, []);

  return (
    <Wrapper>
      <Navigation />
      <OffersBanks cards={staticCards} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
    </Wrapper>
  );
}
