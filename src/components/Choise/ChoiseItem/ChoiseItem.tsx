'use client'

import React from 'react';
import s from './ChoiseItem.module.scss';

type Props = {
    name: string
    active: boolean
    setActive?: React.Dispatch<React.SetStateAction<string>>
}


const ChoiseItem = ({name, active, setActive}: Props) => {

    const setCurrentActive = () => {
        setActive && setActive(name)
    }

    return (
        <div onClick={setCurrentActive} className={active ? s.item_active : s.item}>
            {name}
        </div>
    );
};

export default ChoiseItem;