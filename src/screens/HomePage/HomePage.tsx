'use client'

import React, {useState} from "react";
import Search from "@/UI/Search/Search";
import Calculate from "@/screens/HomePage/components/Calculate/Calculate";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import PageWrapper from "@/containers/PageWrapper";
import Stock from "@/screens/HomePage/components/Stock/Stock";
import Slide from "@/screens/HomePage/components/Slide/Slide";
import Banks from "@/screens/HomePage/components/Banks/Banks";
import {useTypedSelector} from "@/core/store";

type SearchItem = {
    text: string
    link: string
}
type Props = {
    data: any;
}


const HomePage = ({data}: Props) => {

    const {serviceItems} = useTypedSelector(state => state.home)
    const [searchVal, setSearchVal] = useState<string>('')
    const filterArr = (items: SearchItem[]) => items.filter(i => i.text.toLowerCase().includes(searchVal.toLowerCase()))
    return (
        <PageWrapper>
            <Stock data={data.stock}/>
            <Slide data={data.iconsSlide}/>
            <Search setValue={setSearchVal} value={searchVal} filterArr={filterArr} itemsSearch={serviceItems}
                    placeholder={"Найти необходимую услугу..."}
            />
            <Banks data={data.banki}/>
            <Calculate/>
            <OfferMoth offers={data.offersMoth} choiceItems={data.choiseOffer}/>
            <LatestNews/>
            <Feedback chois={data.choiseFeedback}/>
        </PageWrapper>
    );
};


export default HomePage;
