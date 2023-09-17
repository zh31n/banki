import React from 'react';
import s from './Search.module.scss';
import Image from "next/image";
import lupa from '@/assets/icons/search.svg'
import {margin} from "@mui/system";


type InpPropsT = {
    placeholder: string
    margin?: number
    lupaSee?:boolean
    height?:number
    btnHidden?:boolean
}

const Search = ({placeholder,margin,height,btnHidden,lupaSee}: InpPropsT) => {
    return (
        <div className={s.search} style={{margin: `${margin}px`,height:`${height}px`}}>
            <Image alt={'lupa'} src={lupa} height={40} width={40}/>
            <input type="text" placeholder={placeholder}/>
            { btnHidden ? '' : <button>Найти</button>}
        </div>
    );
};

export default Search;