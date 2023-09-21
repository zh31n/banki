import React from 'react';
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";


type ItemT = {
    name: string
    active: boolean
    setActive?: React.Dispatch<React.SetStateAction<string>>
}
type Props = {
    choiseItems?: ItemT[]
    setActive?: React.Dispatch<React.SetStateAction<string>>
    currentChoise?: string
}

const ChoiseItemsMap = ({choiseItems, currentChoise, setActive}: Props) => {
    return (
        <>
            {choiseItems?.map((el, index) => <ChoiseItem name={el.name}
                                                         active={currentChoise?.toLowerCase() === el.name.toLowerCase()}
                                                         key={index} setActive={setActive}/>)}
        </>
    );
};

export default ChoiseItemsMap;