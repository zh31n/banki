import Wrapper from "@/containers/Wrapper";
import Navigation from "./components/Navigation/Navigation";
import Bonus from "../../components/Bonus/Bonus";
import Offers from "./components/Offers/Offers";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import Mailing from "@/components/Mailing/Mailing";
import Сompilations from "@/screens/CreditMapPage/components/Сompilations/Сompilations";
import LatestNews from "@/components/LatestNews/LatestNews";
import Communicate from "@/components/Communicate/Communicate";
import React from "react";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import BanksWithButton from "@/components/BanksWithButton/BanksWithButton";

export default function CreditMapPage() {
    const dataMap = data.CreditCardsPage.info
    return (
        <Wrapper>
            <Navigation/>
            <Bonus/>
            <Offers/>
            <OffersMonth/>
            <Mailing/>
            <Сompilations/>
            <LatestNews/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о кредитных картах'}/>
            <BanksWithButton text={'Кредитные карты в Москве '} sub_value={'- ТОП 10 лучших в 2023 году'}/>
            <FrequentQuestions title={'Важная информация'} items={dataMap}/>
        </Wrapper>
    );
}
