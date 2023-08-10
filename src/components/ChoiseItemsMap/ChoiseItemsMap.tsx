import React from 'react';
import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";

const ChoiseItemsMap = ({choiseItems}) => {
    return (
        <>
            {choiseItems.map((el, index) => <ChoiseItem name={el.name} active={el.active} key={index}/>)}
        </>
    );
};

export default ChoiseItemsMap;