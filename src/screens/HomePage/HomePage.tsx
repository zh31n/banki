'use client'

import React, {useState} from "react";
import Search from "@/UI/Search/Search";
import Calculate from "@/components/Calculate/Calculate";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import PageWrapper from "@/containers/PageWrapper";
import Stock from "@/screens/HomePage/components/Stock/Stock";
import Slide from "@/screens/HomePage/components/Slide/Slide";
import Banks from "@/screens/HomePage/components/Banks/Banks";
import {useTypedSelector} from "@/core/store";

type Props = {
    data: any;
}


const HomePage = ({data}: Props) => {

    // @ts-ignore
    const items = useTypedSelector(state => state.home.serviceItems)
    const [searchVal, setSearchVal] = useState<string>('')
    return (
        <PageWrapper>
            <Stock data={data.stock}/>
            <Slide data={data.iconsSlide}/>
            <Search setValue={setSearchVal} value={searchVal} itemsSearch={items} placeholder={"Найти необходимую услугу..."}/>
            <Banks data={data.banki}/>
            <Calculate/>
            <OfferMoth offers={data.offersMoth} choiceItems={data.choiseOffer}/>
            <LatestNews/>
            <Feedback chois={data.choiseFeedback}/>
        </PageWrapper>
    );
};


export default HomePage;
