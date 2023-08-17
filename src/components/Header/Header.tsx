'use client'

import React, {useState} from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import userImg from '@/assets/icons/User.svg'
import pointImg from '@/assets/icons/Map Point.svg'
import searchImg from '@/assets/icons/search.svg'
import Nav from "@/components/Header/Nav/Nav";
import Link from "next/link";

type navItemsT = {
    name: string,
    id: number,
    link: string
}

const Header = () => {
    const onMouseNav = (name:string) => {
        setCurrentLink(name)
        setVis(true)
    }
    const [currentLink, setCurrentLink] = useState<string>('')
    const [vis, setVis] = useState<boolean>(false)
    const navItems: navItemsT[] = [
        {name: 'Вклады', id: 1, link: '/contribution'},
        {name: 'Кредиты', id: 2, link: '/credits'},
        {name: 'Ипотека', id: 3, link: '/mortgage'},
        {name: 'Страхование', id: 4, link: '/insurance'},
        {name: 'Инвестиции', id: 5, link: '/investment'},
        {name: 'Карты', id: 6, link: '/cards'},
        {name: 'Бизнес', id: 7, link: '/business'},
        {name: 'Новости', id: 8, link: '/news'},
        {name: 'Ещё', id: 9, link: '/more'}
    ];
    const navMap = navItems.map(el => <p key={el.id} className={s.nav_item}
                                         onMouseEnter={() => onMouseNav(el.name)}>{el.name}</p>)

    return (
        <div className='container'>
            <header className={s.header}>
                <Link href={'/'}>
                    <div className={s.logo}>Логотип</div>
                </Link>
                <nav className={s.nav}>
                    {navMap}
                </nav>
                <div className={s.icons}>
                    <Image alt={'icon'} priority src={userImg} width={24} height={24}/>
                    <Image alt={'icon'} priority src={pointImg} width={24} height={24}/>
                    <Image alt={'icon'} priority src={searchImg} width={24} height={24}/>
                </div>
            </header>
            {vis && <Nav path={currentLink} setActive={setVis}/>}
        </div>
    );
};

export default Header;