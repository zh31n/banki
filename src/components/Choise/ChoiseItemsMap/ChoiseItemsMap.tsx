import React from 'react';
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";


type ItemT = {
    name: string
    active: boolean
}
type Props = {
    choiseItems: ItemT[]
}

const ChoiseItemsMap = ({choiseItems}: Props) => {
    return (
        <>
            {choiseItems.map((el, index) => <ChoiseItem name={el.name} active={el.active} key={index}/>)}
        </>
    );
};

export default ChoiseItemsMap;