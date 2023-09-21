'use client'

import React, {useEffect, useState} from 'react';
import s from './Search.module.scss';
import Image from "next/image";
import lupa from '@/assets/icons/search.svg'
import Link from "next/link";

type SearchItem = {
    text: string
    link: string
}

type Props = {
    placeholder: string
    margin?: number
    lupaSee?: boolean
    height?: number
    btnHidden?: boolean
    itemsSearch?: SearchItem[]
    value?: string
    setValue?: React.Dispatch<string>
}

const Search = ({placeholder, margin, height, btnHidden, lupaSee, itemsSearch, setValue, value}: Props) => {
    const [searchVis, setSearchVis] = useState<boolean>(false);
    const [filteredArr, setFilteredArr] = useState<SearchItem[]>([]);
    // const onInpFocus = () => setSearchVis(true)
    const onChangeInp = e => setValue(e.target.value)
    useEffect(() => {
        if (value?.length === 0) {
            setSearchVis(false)
        } else {
            setSearchVis(true)
        }
        const result = itemsSearch?.filter(i => i.text.toLowerCase().includes(value.toLowerCase()))
        setFilteredArr(result);
    }, [value]);

    return (
        <div className={s.search} style={{margin: `${margin}px`, height: `${height}px`}}>
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