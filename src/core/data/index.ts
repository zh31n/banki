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
    }
}

export default data;