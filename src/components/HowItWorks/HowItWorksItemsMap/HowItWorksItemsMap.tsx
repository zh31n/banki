import React from 'react';
import HowItWorksItem from "@/components/HowItWorks/HowItWorksItem/HowItWorksItem";


type itemT = {
    title: string
    sub: string
    img: string
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