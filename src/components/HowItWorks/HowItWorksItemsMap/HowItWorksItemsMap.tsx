import React from 'react';
import HowItWorksItem from "@/components/HowItWorks/HowItWorksItem/HowItWorksItem";
import {StaticImageData} from "next/image";


type itemT = {
    title: string
    sub: string
    img: StaticImageData
    text: string
}
type Props = {
    items: itemT[]
}

const HowItWorksItemsMap = ({items}: Props) => {
    return (
        <>
            {items.map((el, index) => <HowItWorksItem key={index} img={el.img} title={el.title} sub={el.sub} text={el.text}/>)}
        </>
    );
};

export default HowItWorksItemsMap;