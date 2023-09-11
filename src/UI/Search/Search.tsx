import React from 'react';
import s from './Search.module.scss';
import Image from "next/image";
import lupa from '@/assets/icons/search.svg'
import {margin} from "@mui/system";


type InpPropsT = {
    placeholder: string
    margin?: number
    lupa?:boolean
}

const Search = ({placeholder,margin}: InpPropsT) => {
    return (
        <div className={s.search} style={{margin: `${margin}px`}}>
            <Image alt={'lupa'} src={lupa} height={40} width={40}/>
            <input type="text" placeholder={placeholder}/>
            <button>Найти</button>
        </div>
    );
};

export default Search;