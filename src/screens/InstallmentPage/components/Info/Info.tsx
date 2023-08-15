import React from 'react';
import styles from './Info.module.scss'
import data from "@/core/data";

const Info = () => {
    const mapData = data.InstallmentPage.info
    return (
        <div className={styles.container}>
            {mapData.map(el => <div>
                <p className={styles.bold_text}>{el.title}</p>
                <p className={styles.text}>{el.text}</p>
            </div>)}
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                <circle cx="21.5" cy="22" r="21.5" fill="#7BBEFF"/>
                <path
                    d="M8 20.5C7.44772 20.5 7 20.9477 7 21.5C7 22.0523 7.44772 22.5 8 22.5V20.5ZM32.7071 22.2071C33.0976 21.8166 33.0976 21.1834 32.7071 20.7929L26.3431 14.4289C25.9526 14.0384 25.3195 14.0384 24.9289 14.4289C24.5384 14.8195 24.5384 15.4526 24.9289 15.8431L30.5858 21.5L24.9289 27.1569C24.5384 27.5474 24.5384 28.1805 24.9289 28.5711C25.3195 28.9616 25.9526 28.9616 26.3431 28.5711L32.7071 22.2071ZM8 22.5H32V20.5H8V22.5Z"
                    fill="white"/>
            </svg>
        </div>
    );
};

export default Info;