import React from 'react';
import styles from './Nav.module.scss'
import navigate from "@/core/data/navigate";
import Link from "next/link";

const Nav = ({path, setActive}: { path: string, setActive: React.SetStateAction<React.Dispatch<boolean>> }) => {

    const DepositMap = navigate.deposits.map(el => {
        return <div className={styles.column}>
            {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
        </div>
    });
    const CreditsMap = navigate.credits.map(el => {
        return <div className={styles.column}>
            {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
        </div>
    });
    const IpotekaMap = navigate.ipoteka.map(el => {
        return <div className={styles.column}>
            {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
        </div>
    });
    const CardsMap = navigate.cards.map(el => {
        return <div className={styles.column}>
            {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
        </div>
    });

    return (
        <div className={styles.main_container} onMouseEnter={(e) => e.stopPropagation()}
             onMouseLeave={() => setActive(false)}>
            {path === 'Вклады' && DepositMap}
            {path === 'Кредиты' && CreditsMap}
            {path === 'Ипотека' && IpotekaMap}
            {path === 'Карты' && CardsMap}
        </div>
    );
};

export default Nav;