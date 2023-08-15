import React from 'react';
import styles from './LastBuy.module.scss'
import Item from "@/screens/InsuranceIpotekaPage/components/LastBuy/Item/Item";

const LastBuy = () => {
  return (
    <div className={styles.main_container}>
      <p>Последние купленные полисы</p>
      <div className={styles.items_container}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="21.707" cy="22.2559" r="21.5" fill="#7BBEFF"/>
          <path
            d="M8.20703 20.7559C7.65475 20.7559 7.20703 21.2036 7.20703 21.7559C7.20703 22.3081 7.65475 22.7559 8.20703 22.7559V20.7559ZM32.9141 22.463C33.3047 22.0724 33.3047 21.4393 32.9141 21.0488L26.5502 14.6848C26.1597 14.2943 25.5265 14.2943 25.136 14.6848C24.7454 15.0753 24.7454 15.7085 25.136 16.099L30.7928 21.7559L25.136 27.4127C24.7454 27.8032 24.7454 28.4364 25.136 28.8269C25.5265 29.2175 26.1597 29.2175 26.5502 28.8269L32.9141 22.463ZM8.20703 22.7559H32.207V20.7559H8.20703V22.7559Z"
            fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default LastBuy;