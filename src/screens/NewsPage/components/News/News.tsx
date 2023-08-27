import React from 'react';
import styles from './News.module.scss'
import new_1 from '@/assets/icons/new_1.png';
import new_2 from '@/assets/icons/new_2.png';
import img from "@/assets/icons/bank_icons/img.svg"
import NewsItem from "@/screens/NewsPage/components/News/NewsItem/NewsItem";

const News = () => {

    const news = [
        {
            title: 'Льготное обслуживание и кэшбэк',
            subtitle: 'на образование: как работает «Молодежная СберКарта» от Сбербанка',
            text: '«Молодежная СберКарта» от Сбербанка — это дебетовая карта, рассчитанная на подростков и студентов. Разобрали, как она работает и какие бонусы дает.',
            date: '30.06.2023',
            views: 124242,
            img: new_1,
            down_new: {
                date: '30.06.2023',
                views: '124242',
                title: 'Как получить до 7,5 тыс. рублей за три месяца:',
                text: 'шесть актуальных депозитов июля',
            }
        },
        {
            title: 'Экономические циклы:',
            subtitle: 'на каком этапе сейчас экономика и будет ли нефть по 300 долларов',
            text: 'Каждый цикл включает несколько фаз – период подъема и спада экономики. Циклы происходят в экономике как страны, так и мира.',
            date: '30.06.2023',
            views: 124242,
            img: new_2,
            down_new: {
                date: '30.06.2023',
                views: '124242',
                title: 'Как получить до 7,5 тыс. рублей за три месяца:',
                text: 'шесть актуальных депозитов июля',
            }
        },
        {
            title: 'Зачем вести личный бюджет',
            subtitle: 'и как планировать доходы и расходы',
            text: '',
            date: '30.06.2023',
            views: 124242,
            img: img,
            down_new: {
                date: '30.06.2023',
                views: '124242',
                title: 'Как получить до 7,5 тыс. рублей за три месяца:',
                text: 'шесть актуальных депозитов июля',
            }
        },
        {
            title: 'Зачем вести личный бюджет',
            subtitle: 'и как планировать доходы и расходы',
            text: '',
            date: '30.06.2023',
            views: 124242,
            img: img,
            down_new: {
                date: '30.06.2023',
                views: '124242',
                title: 'Как получить до 7,5 тыс. рублей за три месяца:',
                text: 'шесть актуальных депозитов июля',
            }
        },
    ]

    const newsItems = news.map((el, index) => <NewsItem img={el.img} key={index} title={el.title} subtitle={el.subtitle}
                                                        text={el.text}
                                                        date={el.date} views={el.views} date_t={el.down_new.date}
                                                        views_t={el.down_new.views} title_t={el.down_new.title}
                                                        text_t={el.down_new.text}/>)

    return (
        <div className={styles.main_contaienr}>
            <div className={styles.left_container}>
                <p>Зачем вести личный бюджет и как планировать доходы и расходы</p>
                <div className={styles.line} />
                <p>Банк БКС ввел новый вклад «Накопительный» в китайских юанях</p>
                <div className={styles.line} />
                <p>Альфа-Банк изменил условия по вкладам</p>
                <div className={styles.line} />
                <p>Сбер обещает массово запустить платежные стикеры в ближайшие дни</p>
                <div className={styles.line} />
                <p>Зачем вести личный бюджет и как планировать доходы и расходы</p>
                <div className={styles.line} />
                <p>Зачем вести личный бюджет и как планировать доходы и расходы</p>
                <button className={styles.button}>Смотреть все новости</button>
            </div>
            <div className={styles.right_container}>
                <div className={styles.news_container}>
                    {newsItems}
                </div>
            </div>
        </div>
    );
};

export default News;