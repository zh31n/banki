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
import Info from "@/screens/InstallmentPage/components/Info/Info";

export default function InstallmentPage() {
    const dataMap = data.InstallmentPage.questData
    return <Wrapper>
        <Navigation/>
        <Info/>
        <Bonus/>
        <Offers/>
        <OffersMonth/>
        <Mailing/>
        <Feedback title={'Отзывы '} sub={'о кредитных картах'}/>
        <BanksWithButton text={'Кредитные карты в Москве '} sub_value={'- ТОП 10 лучших в 2023 году'}/>
        <FrequentQuestions title={'Важная информация'} items={dataMap}/>
    </Wrapper>
}