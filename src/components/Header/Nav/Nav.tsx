import React from 'react';
import styles from './Nav.module.scss'
import navigate from "@/core/data/navigate";
import Link from "next/link";

const Nav = ({path, setActive}: { path: string, setActive: React.SetStateAction<React.Dispatch<boolean>> }) => {
  return (
    <div className={styles.main_container} onMouseEnter={(e) => e.stopPropagation()}
         onMouseLeave={() => setActive(false)}>
      {path === 'Вклады' && navigate.deposits.map(el => {
        return <div className={styles.column}>
          {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
        </div>
      })}{path === 'Кредиты' && navigate.credits.map(el => {
      return <div className={styles.column}>
        {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
      </div>
    })}{path === 'Ипотека' && navigate.ipoteka.map(el => {
      return <div className={styles.column}>
        {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
      </div>
    })}{path === 'Карты' && navigate.cards.map(el => {
      return <div className={styles.column}>
        {el.map(el => <Link href={el.link} className={styles.link}>{el.text}</Link>)}
      </div>
    })}
    </div>
  );
};

export default Nav;