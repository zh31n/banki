'use client'

import React, {useEffect, useState} from 'react';
import s from './Search.module.scss';
import Image from "next/image";
import lupa from '@/assets/icons/search.svg'
import Link from "next/link";


type Props = {
    placeholder: string
    margin?: number
    lupaSee?: boolean
    height?: number
    btnHidden?: boolean
    itemsSearch?: any[]
    value?: string
    setValue?: React.Dispatch<string>
    filterArr?: any
    width?: number
}

const Search = (props: Props) => {
    const {
        placeholder,
        margin,
        height,
        btnHidden,
        lupaSee,
        itemsSearch,
        setValue,
        value,
        filterArr,
        width
    } = props;
    const [searchVis, setSearchVis] = useState<boolean>(false);
    const [filteredArr, setFilteredArr] = useState<any[]>([]);

    const onChangeInp = e => setValue && setValue(e.target.value)

    {
        itemsSearch && useEffect(() => {
            if (value?.length === 0) {
                setSearchVis(false)
            } else {
                setSearchVis(true)
            }
            const result = filterArr(itemsSearch)
            setFilteredArr(result);
        }, [value]);
    }

    return (
        <div className={s.search} style={{margin: `${margin}px`, height: `${height}px`, width: `${width}px`}}>
            <Image alt={'lupa'} src={lupa} height={40} width={40}/>
            <input type="text" value={value} onChange={onChangeInp}
                   placeholder={placeholder}
            />
            {btnHidden ? '' : <button>Найти</button>}
            {(searchVis && itemsSearch) && <div className={s.drop_down}>
                {filteredArr.map((el, index) =>
                    <Link href={el.link} key={index}>
                        {el.text}
                    </Link>
                )}
            </div>}
        </div>
    );
};

export default Search;