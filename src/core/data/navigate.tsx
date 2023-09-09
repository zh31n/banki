const navigation = {
    deposits: [
        [
            {text: 'Вклады', link: '/deposits'},
            {text: 'Специальные предложения', link: '/deposits/special-offers'},
        ],
        [
            {text: 'Накопительные счета', link: '/deposits/saving-accounts'},
        ]
    ],
    credits: [
        [
            {text: 'Мастер подбора кредитов', link: '/credits/autocredit'},
            {text: 'Потребительские кредиты', link: '/credits/consumer-credits'},
            {text: 'Рефинансирование', link: '/credits/refinancing-credits'},
            {text: 'Кредитный рейтинг', link: '/credits/rating'},
        ],
        [
            {text: 'Микрозаймы', link: '/credits/microloans'},
            {text: 'Автокредиты', link: '/credits/autocredit'},
            {text: 'Кредитный калькулятор', link: '/credits/calculator'},
            {text: 'Мастер выдачи займов', link: '/credits/get-loan'},
        ]
    ],
    cards: [
        [
            {text: 'Кредитные карты', link: '/cards/credit-cards'},
            {text: 'Карты рассрочки', link: '/cards/installment'},
            {text: 'Дебетовые карты', link: '/cards/debit-cards'},
        ],
        [
            {text: 'Мастер подбора карт', link: '/cards/select-cards'},
            {text: 'Специальные предложения', link: '/cards/special-offers'},
        ]
    ],
    ipoteka: [
        [
            {text: 'Мастер подбора кредитов', link: '/ipoteka'},
            {text: 'Ипотечные кредиты', link: '/ipoteka/credits'},
            {text: 'Ипотечное страхование', link: '/insurance'},
            {text: 'Спецпредложения', link: '/ipoteka/special-offers'},
        ],
        [
            {text: 'Рефинансирование', link: '/ipoteka/refinance'},
            {text: 'Вторичное жильё', link: '/ipoteka/secondary'},
            {text: 'Новостройки', link: '/ipoteka/new-building'},
            {text: 'Выбрать недвижимость', link: '/ipoteka/discount'},
        ]
    ],
    insurance: [
        [
            {text: 'ОСАГО', link: '/insurance/osago'},
            {text: 'КАСКО', link: '/insurance/kasco'},
            {text: 'Путешествие', link: '/insurance/travel'},
            {text: 'Жизнь и здоровье', link: '/insurance/health'},
        ],
        [
            {text: 'Ипотечное страхование', link: '/insurance/ipot-ins'},
            {text: 'ДМС', link: '/insurance/dms'},
            {text: 'Все предложения', link: '/insurance'}
        ]
    ],
    investment: [
        [
            {text: 'Все продукты', link: '/investment'},
            {text: 'Расчётно-кассовое обслуживание', link: '/investment'},
            {text: 'Бизнес-карты', link: '/investment'},
        ],
        [
            {text: 'Кредиты для ИП', link: '/investment'},
            {text: 'Страхование бизнеса', link: '/investment'},
        ]
    ],
    business: [
        [
            {text: 'Все продукты', link: '/business'},
            {text: 'Расчётно-кассовое обслуживание', link: '/business/service'},
            {text: 'Бизнес-карты', link: '/business/slips'},
        ],
        [
            {text: 'Кредиты для ИП', link: '/business/payments'},
            {text: 'Страхование бизнеса', link: '/business/assurance'},
        ],
    ],
    news: [
        [
            {text: 'Все события дня', link: '/news'},
            {text: 'Лента новостей', link: '/news'},
            {text: 'Тема дня', link: '/news'},
            {text: 'Мнение', link: '/news'},
        ],
        [
            {text: 'Аналитические исследования', link: '/news'},
            {text: 'Банковский словарь', link: '/news'},
        ],
    ],
}


export default navigation;