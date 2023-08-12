import osago from "@/assets/icons/osago.svg";
import credit from "@/assets/icons/credit.svg";
import carta from "@/assets/icons/carta.svg";
import vklad from "@/assets/icons/vklad.svg";
import zaymi from "@/assets/icons/zaymi.svg";
import invest from "@/assets/icons/invest.svg";
import ipoteka from "@/assets/icons/ipoteka.svg";
import sbi from "@/assets/icons/banki_icon/sbi.svg";
import absolut from "@/assets/icons/banki_icon/absolut.svg";
import agrogress from "@/assets/icons/banki_icon/agrogress.svg";
import bars from "@/assets/icons/banki_icon/bars.svg";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";
import ruble from "@/assets/icons/banki_icon/Ruble.svg";
import linesI from "@/assets/icons/banki_icon/3-line.svg";
import img_1 from "@/assets/icons/offer_img1.png";
import dom from "@/assets/icons/banki_icon/dom.svg";
import img_2 from "@/assets/icons/offer_img2.png";
import img_3 from "@/assets/icons/offer_img3.png";
import europe from "@/assets/icons/banki_icon/europe.svg";
import img_4 from "@/assets/icons/offer_img4.png";
import norvik from "@/assets/icons/banki_icon/norvik.svg";
import loco from "@/assets/icons/banki_icon/loco.svg";
import sber from "@/assets/icons/banki_icon/sber.svg";
import ekspo from "@/assets/icons/banki_icon/ekspo.svg";
import spm from "@/assets/icons/banki_icon/spm.svg";
import psb from "@/assets/icons/banki_icon/psb.svg";
import tinkoff from "@/assets/icons/banki_icon/tinkoff_text.svg";
import tinkoff_i from "@/assets/icons/banki_icon/tinkoff.svg";
import alfa from "@/assets/icons/banki_icon/alfa.svg";
import otkr from "@/assets/icons/banki_icon/otkritie.svg";
import vtb from "@/assets/icons/banki_icon/vtb.svg";
import money_i from "@/assets/icons/Banknote_icon.svg";
import sprav from "@/assets/icons/Clipboard_Check_icon.svg";
import home_i from "@/assets/icons/home_icon.svg";
import swit from "@/assets/icons/Restart_icon.svg";
import smar from "@/assets/icons/Smartphone_Rotate_Angle.svg";
import flame from "@/assets/icons/Flame_icon.svg";
import wheel from "@/assets/icons/Wheel_Angle_icon.svg";
import prot from "@/assets/icons/Shield_protect.svg";
import w_1 from "@/assets/icons/w_1.svg";
import w_2 from "@/assets/icons/w_2.svg";
import w_3 from "@/assets/icons/w_3.svg";
import w_4 from "@/assets/icons/w_4.svg";


const data = {
    HomePage: {
        iconsSlide: [
            {name: "ОСАГО", img: osago, w: 0},
            {name: "Подбор кредита", img: credit, w: 64},
            {name: "Подбор карты", img: carta, w: 64},
            {name: "Вклады", img: vklad, w: 0},
            {name: "Займы", img: zaymi, w: 0},
            {name: "Инвестиции", img: invest, w: 0},
            {name: "Ипотека", img: ipoteka, w: 0},
        ],
        stock: [
            {
                title: "Заголовок для акции для клиентов",
                sup: "Подзаголовок для будущей акции",
            },
            {
                title: "Заголовок для акции для клиентов",
                sup: "Подзаголовок для будущей акции",
            },
            {
                title: "Заголовок для акции для клиентов",
                sup: "Подзаголовок для будущей акции",
            },
            {
                title: "Заголовок для акции для клиентов",
                sup: "Подзаголовок для будущей акции",
            },
        ],
        banki: [
            {img: sbi, name: "SBI Банк", rating: 4.2},
            {img: sbi, name: "SBI Банк", rating: 4.2},
            {img: sbi, name: "SBI Банк", rating: 4.2},
            {img: absolut, name: "Абсолют Банк", rating: 4.2},
            {img: absolut, name: "Абсолют Банк", rating: 4.2},
            {img: absolut, name: "Абсолют Банк", rating: 4.2},
            {img: agrogress, name: "Агророс Банк", rating: 4.2},
            {img: agrogress, name: "Агророс Банк", rating: 4.2},
            {img: agrogress, name: "Агророс Банк", rating: 4.2},
            {img: bars, name: "Ак Барс Банк", rating: 4.2},
            {img: bars, name: "Ак Барс Банк", rating: 4.2},
            {img: bars, name: "Ак Барс Банк", rating: 4.2},
            {img: bars, name: "Ак Барс Банк", rating: 4.2},
            {img: bars, name: "Ак Барс Банк", rating: 4.2},
            {img: bars, name: "Ак Барс Банк", rating: 4.2},
        ],
        choiseOffer: [
            {name: "Вклады", active: true},
            {name: "Накопительные счета", active: false},
            {name: "Кредиты", active: false},
            {name: "Дебетовые карты", active: false},
            {name: "Ипотека", active: false},
            {name: "Микрозаймы", active: false},
            {name: "РКО", active: false},
            {name: "Инвестиции", active: false},
            {name: "Ипотека от ПИК", active: false},
        ],
        offersMoth: [
            {
                name: "Локо-Банк",
                subtitle: "Добро Пожаловать. Локо",
                img: loc_bank,
                time: 370,
                year_money: 10.1,
            },
            {
                name: "Локо-Банк",
                subtitle: "Добро Пожаловать. Локо",
                img: loc_bank,
                time: 370,
                year_money: 10.1,
            },
            {
                name: "Локо-Банк",
                subtitle: "Добро Пожаловать. Локо",
                img: loc_bank,
                time: 370,
                year_money: 10.1,
            },
            {
                name: "Локо-Банк",
                subtitle: "Добро Пожаловать. Локо",
                img: loc_bank,
                time: 370,
                year_money: 10.1,
            },
        ],
        choiseFeedback: [
            {name: "Банки", active: true},
            {name: "МФО", active: false},
            {name: "Страховые компании", active: false},
            {name: "Инвестиции", active: false}
        ]
    },
    SpecialOffer: {
        questions: {
            title: 'Частые вопросы',
            items: [
                {title: 'Что такое специальные предложения?', text: ''},
                {title: 'Какие уникальные условия могут быть доступны по специальным предложениям?', text: ''},
                {title: 'Как получить промокод?', text: ''},
                {title: 'Как воспользоваться промокодом?', text: ''},
                {title: 'Какой срок действия промокода?', text: ''},
                {title: 'Как рассчитать доход по специальным  по вкладу?', text: ''},
                {title: 'Что такое «Акции банков»?', text: ''},
                {title: 'Как уточнить условия по специальным предложениям и акциям банков?', text: ''},
                {title: 'Вклады по специальным предложениям застрахованы?', text: ''},
            ]
        },
        choises: [
            {name: 'Все', active: true},
            {name: 'Вклады', active: false},
            {name: 'Потребительские кредиты', active: false},
            {name: 'Ипотека', active: false},
            {name: 'Кредитные карты', active: false},
            {name: 'Дебетовые карты', active: false},
            {name: 'Инвестиции', active: false},
            {name: 'Страхование', active: false},
        ],
        selectData: [
            {img: ruble, options: ['Любая валюта']},
            {img: linesI, options: ['По популярности']}
        ],
        offerData: [
            {
                name: 'Вклад Мой Дом',
                img: img_1,
                bankImg: dom,
                bonus: 'Бонус 500 ₽ за вклад',
                bet: 8.6,
                days: '550 дней'
            },
            {
                name: 'Вклад «Оптимальный»',
                img: img_2,
                bankImg: dom,
                bonus: 'Бонус 500 ₽ за вклад',
                bet: 8,
                days: '181 день'
            },
            {name: 'Срочный в дирхамах ОАЭ', img: img_3, bankImg: europe, bonus: '', bet: 3, days: '91 - 368 дней'},
            {name: 'Вклад «Оптимальный»', img: img_4, bankImg: norvik, bonus: '', bet: 9.6, days: 'до 18 месяцев'},
            {
                name: 'Вклад Мой Дом',
                img: img_1,
                bankImg: dom,
                bonus: 'Бонус 500 ₽ за вклад',
                bet: 8.6,
                days: '550 дней'
            },
            {
                name: 'Вклад «Оптимальный»',
                img: img_2,
                bankImg: dom,
                bonus: 'Бонус 500 ₽ за вклад',
                bet: 8,
                days: '181 день'
            },
            {name: 'Срочный в дирхамах ОАЭ', img: img_3, bankImg: europe, bonus: '', bet: 3, days: '91 - 368 дней'},
            {name: 'Вклад «Оптимальный»', img: img_4, bankImg: norvik, bonus: '', bet: 9.6, days: 'до 18 месяцев'},
            {
                name: 'Вклад Мой Дом',
                img: img_1,
                bankImg: dom,
                bonus: 'Бонус 500 ₽ за вклад',
                bet: 8.6,
                days: '550 дней'
            },
            {
                name: 'Вклад «Оптимальный»',
                img: img_2,
                bankImg: dom,
                bonus: 'Бонус 500 ₽ за вклад',
                bet: 8,
                days: '181 день'
            },
            {name: 'Срочный в дирхамах ОАЭ', img: img_3, bankImg: europe, bonus: '', bet: 3, days: '91 - 368 дней'},
            {name: 'Вклад «Оптимальный»', img: img_4, bankImg: norvik, bonus: '', bet: 9.6, days: 'до 18 месяцев'}
        ]
    },
    SavingAccounts: {
        deposits: [
            {
                name: 'Локо-Банк',
                sub: 'Добро Пожаловать. Локо',
                stavka: '10.10',
                time: '370 дн.',
                money: '5000 — 5 млн.',
                img: loco,
                charcs: ['Партнер раздела']
            },
            {
                name: 'Сбербанк',
                sub: 'Накопительный счет',
                stavka: '6.8',
                time: '30 — 1460 дн.',
                money: '3 000 — 1 млн',
                img: sber,
                charcs: ['']
            },
            {
                name: 'Сбербанк',
                sub: 'Накопительный счет',
                stavka: '6.8',
                time: '30 — 1460 дн.',
                money: '3 000 — 1 млн',
                img: sber,
                charcs: ['']
            },
            {
                name: 'Сбербанк',
                sub: 'Накопительный счет',
                stavka: '6.8',
                time: '30 — 1460 дн.',
                money: '3 000 — 1 млн',
                img: sber,
                charcs: ['']
            },
        ],
        questions: {
            title: 'Частые вопросы',
            items: [
                {title: 'Каталоги', text: ''},
                {title: 'Подробнее', text: ''},
                {title: 'Эксперты направления вклады и депозиты', text: ''},
                {title: 'Накопительные счета в городах', text: ''},
                {title: 'Предложения в банках', text: ''},
                {title: 'Задать вопрос о вкладах', text: ''},
            ]
        },
        offers: [
            {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
            {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
            {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
            {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10}
        ],
        banks: [
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
            {
                title: 'Локо-Банк',
                stavka: 10.1,
                sub: 'Добро Пожаловать. Локо',
                money: '5000 — 5 млн.',
                osob: 'онлайн',
                time: 370
            },
        ]
    },
    ConsumerCredits: {
        deposits: [
            {
                name: 'Локо-Банк',
                sub: 'Добро Пожаловать. Локо',
                stavka: '8,8 - 36',
                time: 'до 5 лет',
                money: 'до 5 млн.',
                img: loco,
                charcs: ['Партнер раздела', 'Без залога', 'На любые цели'],
                btn: 'Онлайн заявка'
            },
            {
                name: 'Сбербанк',
                sub: 'Накопительный счет',
                stavka: '7 - 31,6',
                time: 'до 25 лет',
                money: 'до 30 млн',
                img: sber,
                charcs: ['На любые цели'],
                btn: 'Онлайн заявка'
            },
            {
                name: 'Сбербанк',
                sub: 'Накопительный счет',
                stavka: '11,9 — 27,9',
                time: 'до 7 лет',
                money: 'до 20 млн',
                img: sber,
                charcs: ['Без залога', 'На любые цели'],
                btn: 'Онлайн заявка'
            },
            {
                name: 'Сбербанк',
                sub: 'Накопительный счет',
                stavka: '6.8',
                time: '30 — 1460',
                money: '3 000 — 1 млн',
                img: sber,
                charcs: [''],
                btn: 'Онлайн заявка'
            },
        ],
        sliderBanks: [ekspo, spm, psb, sber, tinkoff, norvik, norvik],
        offersMoth: [
            {img: tinkoff_i, subtitle: '-5% при оформлении на ...', name: 'Тинькофф Банк', time: 370, year_money: 3.7},
            {img: alfa, subtitle: 'Наличными', name: 'Альфа-банк', time: 370, year_money: 4},
            {img: otkr, subtitle: 'Наличными', name: 'Банк «Открытие» ', time: 370, year_money: 4},
            {img: vtb, subtitle: 'Наличными', name: 'ВТБ', time: 370, year_money: 4},
        ],
        catalogData: [
            {img: money_i, name: 'Наличными'},
            {img: sprav, name: 'Без справок'},
            {img: home_i, name: 'На любые цели'},
            {img: swit, name: 'Рефинансирование'},
            {img: smar, name: 'Онлайн-заявка на кредит'},
            {img: flame, name: 'Экспресс-кредиты'},
            {img: wheel, name: 'Кредит на автомобиль'},
            {img: prot, name: 'Кредит под залог'},
        ],
        banks: [
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            }, {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },
            {
                title: 'Локо-Банк',
                stavka: 0,
                sub: 'Добро Пожаловать. Локо',
                money: '300 000 — 1 300 000',
                time: '1 - 7'
            },

        ],
        questData: [
            {title: 'Что нужно знать перед тем, как взять потребительский кредит?', text: ''},
            {title: 'Эксперты направления Кредиты', text: ''},
            {title: 'Задать вопрос о кредитах', text: ''},
        ]
    },
    RefinancingCredits:{
        sliderItems:[ekspo, spm, psb, sber, tinkoff, norvik, norvik],
        ourData: [
            {img: w_1, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
            {img: w_2, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
            {img: w_3, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
            {img: w_4, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
        ],
        questData: [
            {title: 'Как я могу снизить плетеж с помощью рефинансирования?', text: ''},
            {title: 'Какие кредиты я могу рефинансировать?', text: ''},
            {title: 'Какие документы мне понадобятся?', text: ''},
        ]
    }
}

export default data;