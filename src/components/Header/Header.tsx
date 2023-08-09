import React from 'react';
import s from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import userImg from '@/assets/icons/User.svg'
import pointImg from '@/assets/icons/Map Point.svg'
import searchImg from '@/assets/icons/search.svg'

type navItemsT = {
    name: string,
    id: number,
    link: string
}

const Header = () => {

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

    return (
        <div className='container'>
            <header className={s.header}>
                <div className={s.logo}>Логотип</div>
                <nav className={s.nav}>
                    {navItems.map(el => <Link href={el.link} key={el.id} className={s.nav_item}>{el.name}</Link>)}
                </nav>
                <div className={s.icons}>
                    <Image priority src={userImg} width={24} height={24}/>
                    <Image priority src={pointImg} width={24} height={24}/>
                    <Image priority src={searchImg} width={24} height={24}/>
                </div>
            </header>
        </div>
    );
};

export default Header;