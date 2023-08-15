import React from 'react';
import styles from './Navigation.module.scss'
import Slider from '@mui/material/Slider';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

const Navigation = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.top_container}>
                <p className={styles.text}>Главная</p>
                <p>/</p>
                <p>Карты</p>
                <p>/</p>
                <p className={styles.grey_text}>Карты рассрочки</p>
            </div>
            <div className={styles.text_container}>
                <div className={styles.main_text_container}>
                    <p className={styles.main_text}>Кредитные карты с рассрочкой</p>
                    <p className={styles.blue_text}>в Москве</p>
                </div>
                <div className={styles.text_cont}>
                    <p className={styles.text}>Кредитные карты с рассрочкой позволяют оплачивать товары и услуги
                        частями, не откладывая
                        покупку.</p>
                    <p className={styles.text}>Если погасить задолженность по карте с рассрочкой в течение срока
                        действия льготного периода, проценты платить не придется. Кредитный лимит по таким картам
                        устанавливается индивидуально с учетом дохода заемщика и его кредитной истории.</p>
                    <p className={styles.text}>На (НАЗВАНИЕ СЕРВИСА) легко подобрать подходящий вариант из 22 кредитных
                        карт с рассрочкой по ставке от 10.9% на 01.08.2023. Вам понадобится паспорт и ИНН.</p>
                    <p className={styles.blue_text}>Заявку на получение кредитки можно подать онлайн.</p>
                </div>
            </div>
            <div className={styles.limit_container}>
                <div className={styles.left_container}>
                    <div className={styles.text_cont}>
                        <p className={styles.grey_text}>Кредитный лимит</p>
                        <p className={styles.text}>800 000</p>
                        <Slider size="small"
                                sx={{color: '#4DA7FF', width: '341px'}}
                                defaultValue={70}
                                aria-label="Small"
                        />
                    </div>
                    <div className={styles.period_cont}>
                        <div>
                            <p className={styles.period_text}>Льготный период</p>
                            <p className={styles.text}>Любой</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                 fill="none">
                                <path d="M13.6361 6L8.9694 10L7.80273 9M4.30273 6L5.85829 7.33333" stroke="#212121"
                                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.right_container}>
                    <button className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path
                                d="M10 14C11.6569 14 13 15.3431 13 17C13 18.6568 11.6569 20 10 20C8.34315 20 7 18.6568 7 17C7 15.3431 8.34315 14 10 14Z"
                                stroke="#121212" stroke-width="1.5"/>
                            <path
                                d="M15 3.99998C13.3431 3.99998 12 5.34312 12 6.99998C12 8.65683 13.3431 9.99998 15 9.99998C16.6569 9.99998 18 8.65683 18 6.99998C18 5.34312 16.6569 3.99998 15 3.99998Z"
                                stroke="#121212" stroke-width="1.5"/>
                            <path d="M11.5001 7.00001L6.5001 7M3.50002 7.00001L2.5 7.00001" stroke="#121212"
                                  stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M13.5 17L18.5 17M21.5001 17L22.5001 17" stroke="#121212" stroke-width="1.5"
                                  stroke-linecap="round"/>
                            <path d="M2.5 17L6.5 17" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M22.5 7L18.5 7" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Все параметры
                    </button>
                    <BlueBtn text={'Подобрано 22 карты'} width={241} height={60} fSize={20}/>
                </div>
            </div>
        </div>
    );
};

export default Navigation;