import {createSlice} from "@reduxjs/toolkit";

type serviceCompanysT = {
    text: string
    link: string
}

interface InitialStateI {
    serviceItems: serviceCompanysT[]
}

const initialState: InitialStateI = {
    serviceItems: [
        {text: 'Вклады', link: '/deposits'},
        {text: 'Микрозаймы', link: '/credits/microloans'},
        {text: 'Накопительные счета', link: '/deposits/saving-accounts'},
        {text: 'Потребительские кредиты', link: '/credits/consumer-credits'},
        {text: 'Кредитные карты', link: '/cards/credit-cards'},
        {text: 'Карты рассрочки', link: '/cards/installment'},
        {text: 'Дебетовые карты', link: '/cards/debit-cards'},
        {text: 'Ипотечное страхование', link: '/insurance'},
        {text: 'ОСАГО', link: '/insurance/osago'},
        {text: 'КАСКО', link: '/insurance/kasco'},
        {text: 'Путешествие', link: '/insurance/travel'},
        {text: 'Жизнь и здоровье', link: '/insurance/health'},
        {text: 'ДМС', link: '/insurance/dms'},
        {text: 'Акции', link: '/investment/stocks'},
        {text: 'Подбор брокера', link: '/investment/select-broker'},
        {text: 'Криптовалюта', link: '/investment/crypto'},
        {text: 'Фонды', link: '/investment/fonds'},
        {text: 'Облигации', link: '/investment/obligations'},
        {text: 'Аналитика', link: '/investment/analytics'},
        {text: 'Расчётно-кассовое обслуживание', link: '/business/service'},
        {text: 'Бизнес-карты', link: '/business/slips'},
        {text: 'Кредиты для ИП', link: '/business/payments'},
        {text: 'Страхование бизнеса', link: '/business/assurance'},
    ]
}

export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {}
})

export default HomeSlice.reducer;