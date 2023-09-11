import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/InstallmentPage/components/Navigation/Navigation";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import React from "react";
import Offers from "@/screens/CreditMapPage/components/Offers/Offers";
import Mailing from "@/components/Mailing/Mailing";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import BanksWithButton from "@/components/BanksWithButton/BanksWithButton";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import Bonus from "@/components/Bonus/Bonus";
import InstallmentPageAdvantages from "@/screens/InstallmentPage/components/InstallmentPageAdvantages";
import {CardInterface} from "@/core/services/Cards";

interface InstallmentPageProps {
    cards: CardInterface[];
}

export default function InstallmentPage(props: InstallmentPageProps) {
    const {
        cards,
    } = props;
    const staticData = data.InstallmentPage;

    return (
        <Wrapper>
            <Navigation/>
            <InstallmentPageAdvantages advantages={staticData.advantages}/>
            <Bonus/>
            <Offers cards={cards}/>
            <OffersMonth/>
            <Mailing/>
            <Feedback title={'Отзывы '} sub={'о кредитных картах'}/>
            <BanksWithButton cards={cards} text={'Кредитные карты в Москве '} sub_value={'- ТОП 10 лучших в 2023 году'}/>
            <FrequentQuestions title={'Важная информация'} items={staticData.questData}/>
        </Wrapper>
    )
}