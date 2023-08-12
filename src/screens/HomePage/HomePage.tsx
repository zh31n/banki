import React from "react";
import Search from "@/UI/Search/Search";
import Calculate from "@/components/Calculate/Calculate";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import PageWrapper from "@/containers/PageWrapper";
import Stock from "@/screens/HomePage/components/Stock/Stock";
import Slide from "@/screens/HomePage/components/Slide/Slide";
import Banks from "@/screens/HomePage/components/Banks/Banks";

type ItemsActionT = {
    title: string;
    sup: string;
};
type bankiT = {
    img: string;
    name: string;
    rating: number;
};
type choiseItemsT = {
    name: string;
    active: boolean;
};
type offersT = {
    name: string;
    subtitle: string;
    img: string;
    time: number;
    year_money: number;
};
type iconsSlideT = {
    img: string;
    name: string;
    w: number;
};
type Props = {
    iconsSlide: iconsSlideT[]
    stock: ItemsActionT[]
    banki: bankiT[]
    choiseOffer: choiseItemsT[]
    offersMoth: offersT[]
    choiseFeedback: choiseItemsT[]
}


const HomePage = ({data}: Props) => {
    return (
        <PageWrapper>
            <Stock data={data.stock}/>
            <Slide data={data.iconsSlide}/>
            <Search placeholder={"Найти необходимую услугу..."}/>
            <Banks data={data.banki}/>
            <Calculate/>
            <OfferMoth offers={data.offersMoth} choiseItems={data.choiseOffer}/>
            <LatestNews/>
            <Feedback chois={data.choiseFeedback}/>
        </PageWrapper>
    );
};

export default HomePage;
