import React from 'react';
import s from './ChoiseItem.module.scss';

type Props = {
    name: string
    active: boolean
}


const ChoiseItem = ({name, active}: Props) => {
    return (
        <div className={active ? s.item_active : s.item}>
            {name}
        </div>
    );
};

export default ChoiseItem;