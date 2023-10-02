exports.id = 3042;
exports.ids = [3042];
exports.modules = {

/***/ 33891:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 31037:
/***/ (() => {



/***/ }),

/***/ 26224:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 981));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54199));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2820))

/***/ }),

/***/ 54199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(4874);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/icons/Map Point.svg
/* harmony default export */ const Map_Point = ({"src":"/_next/static/media/Map Point.e80df231.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/assets/icons/search.svg
var search = __webpack_require__(30114);
// EXTERNAL MODULE: ./src/components/Header/Nav/Nav.module.scss
var Nav_module = __webpack_require__(66282);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
// EXTERNAL MODULE: ./src/core/data/navigate.ts
var data_navigate = __webpack_require__(43726);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/Nav/Nav.tsx





const Nav = ({ path, setActive })=>{
    const DepositMap = data_navigate/* default */.Z.deposits.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const CreditsMap = data_navigate/* default */.Z.credits.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const IpotekaMap = data_navigate/* default */.Z.ipoteka.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const CardsMap = data_navigate/* default */.Z.cards.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const InsuranceMap = data_navigate/* default */.Z.insurance.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const InvestmentMap = data_navigate/* default */.Z.investment.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const BusunesMap = data_navigate/* default */.Z.business.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    const NewsMap = data_navigate/* default */.Z.news.map((el, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Nav_module_default()).column,
            onClick: ()=>setActive(false),
            children: el.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: el.link,
                    className: (Nav_module_default()).link,
                    children: el.text
                }, index))
        }, index);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Nav_module_default()).main_container,
        onMouseEnter: (e)=>e.stopPropagation(),
        onMouseLeave: ()=>setActive(false),
        children: [
            path === "Вклады" && DepositMap,
            path === "Кредиты" && CreditsMap,
            path === "Ипотека" && IpotekaMap,
            path === "Карты" && CardsMap,
            path === "Страхование" && InsuranceMap,
            path === "Инвестиции" && InvestmentMap,
            path === "Бизнес" && BusunesMap,
            path === "Новости" && NewsMap
        ]
    });
};
/* harmony default export */ const Nav_Nav = (Nav);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Header = ()=>{
    const pathName = (0,navigation.usePathname)();
    const [currentPage, setCurrentPage] = (0,react_.useState)("");
    const [currentLink, setCurrentLink] = (0,react_.useState)("");
    const [vis, setVis] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const pa = pathName.split("/");
        setCurrentPage(pa[1]);
    }, [
        pathName
    ]);
    const onMouseNav = (name)=>{
        setCurrentLink(name);
        name === "Ещё" ? setVis(false) : setVis(true);
    };
    const navItems = [
        {
            name: "Вклады",
            id: 1,
            link: "deposits"
        },
        {
            name: "Кредиты",
            id: 2,
            link: "credits"
        },
        {
            name: "Ипотека",
            id: 3,
            link: "ipoteka"
        },
        {
            name: "Страхование",
            id: 4,
            link: "insurance"
        },
        {
            name: "Инвестиции",
            id: 5,
            link: "investment"
        },
        {
            name: "Карты",
            id: 6,
            link: "cards"
        },
        {
            name: "Бизнес",
            id: 7,
            link: "business"
        },
        {
            name: "Новости",
            id: 8,
            link: "news"
        },
        {
            name: "Ещё",
            id: 9,
            link: "more"
        }
    ];
    const navMap = navItems.map((el)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: currentPage.includes(el.link) ? (Header_module_default()).nav_item_active : (Header_module_default()).nav_item,
            onMouseEnter: ()=>onMouseNav(el.name),
            children: el.name
        }, el.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: (Header_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        onClick: ()=>setVis(false),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Header_module_default()).logo,
                            children: "Логотип"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: (Header_module_default()).nav,
                        children: navMap
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: (Header_module_default()).icons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/profile/applications",
                                className: currentPage.includes("profile") ? (Header_module_default()).active_link : "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            className: "",
                                            cx: "12",
                                            cy: "6",
                                            r: "4",
                                            stroke: "#121212",
                                            strokeWidth: "1.5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147   16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398   21.8433 17 21.5634",
                                            stroke: "#121212",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "icon",
                                priority: true,
                                src: Map_Point,
                                width: 24,
                                height: 24
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "icon",
                                priority: true,
                                src: search/* default */.Z,
                                width: 24,
                                height: 24
                            })
                        ]
                    })
                ]
            }),
            vis && /*#__PURE__*/ jsx_runtime_.jsx(Nav_Nav, {
                path: currentLink,
                setActive: setVis
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 2820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MobileHeader_MobileHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/MobileHeader/MobileHeader.module.scss
var MobileHeader_module = __webpack_require__(53952);
var MobileHeader_module_default = /*#__PURE__*/__webpack_require__.n(MobileHeader_module);
;// CONCATENATED MODULE: ./src/assets/icons/User.svg
/* harmony default export */ const User = ({"src":"/_next/static/media/User.bdfe887d.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/MobileHeader/MobileNav/MobileNav.module.scss
var MobileNav_module = __webpack_require__(8315);
var MobileNav_module_default = /*#__PURE__*/__webpack_require__.n(MobileNav_module);
// EXTERNAL MODULE: ./src/components/MobileHeader/MobileNavItem/MobileNavItem.module.scss
var MobileNavItem_module = __webpack_require__(47067);
var MobileNavItem_module_default = /*#__PURE__*/__webpack_require__.n(MobileNavItem_module);
// EXTERNAL MODULE: ./src/assets/icons/arr_d_spec.svg
var arr_d_spec = __webpack_require__(93636);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/MobileHeader/MobileNavItem/MobileNavItem.tsx






const MobileNavItem = ({ setCurrent, current, name, navs, setVisible })=>{
    const setVis = ()=>setCurrent(name);
    const onLink = ()=>setVisible(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: current === name ? (MobileNavItem_module_default()).item_a : (MobileNavItem_module_default()).item,
        onClick: setVis,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MobileNavItem_module_default()).info,
                children: [
                    name,
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: current === name ? (MobileNavItem_module_default()).img_a : "",
                        src: arr_d_spec/* default */.Z,
                        alt: "arrow down"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MobileNavItem_module_default()).items,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: navs && navs[0].map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                onClick: onLink,
                                href: el.link,
                                children: el.text
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: navs && navs[1].map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                onClick: onLink,
                                href: el.link,
                                children: el.text
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const MobileNavItem_MobileNavItem = (MobileNavItem);

// EXTERNAL MODULE: ./src/core/data/navigate.ts
var data_navigate = __webpack_require__(43726);
;// CONCATENATED MODULE: ./src/core/data/mobileNav.ts

const MobileNav = [
    {
        name: "Вклады",
        navs: data_navigate/* default */.Z.deposits
    },
    {
        name: "Кредиты",
        navs: data_navigate/* default */.Z.credits
    },
    {
        name: "Ипотека",
        navs: data_navigate/* default */.Z.ipoteka
    },
    {
        name: "Страхование",
        navs: data_navigate/* default */.Z.insurance
    },
    {
        name: "Инвестиции",
        navs: data_navigate/* default */.Z.investment
    },
    {
        name: "Карты",
        navs: data_navigate/* default */.Z.cards
    },
    {
        name: "Бизнес",
        navs: data_navigate/* default */.Z.business
    },
    {
        name: "Новости",
        navs: data_navigate/* default */.Z.news
    },
    {
        name: "Ещё",
        navs: data_navigate/* default */.Z.news
    }
];
/* harmony default export */ const mobileNav = (MobileNav);

;// CONCATENATED MODULE: ./src/components/MobileHeader/MobileNav/MobileNav.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const MobileNav_MobileNav = ({ visible, setVisible })=>{
    const [current, setCurrent] = (0,react_.useState)("");
    const navMap = mobileNav.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem_MobileNavItem, {
            setVisible: setVisible,
            setCurrent: setCurrent,
            current: current,
            name: el.name,
            navs: el.navs
        }, index));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: visible ? (MobileNav_module_default()).nav_a : (MobileNav_module_default()).nav,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MobileNav_module_default()).line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MobileNav_module_default()).search,
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "Поиск по сайту"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MobileNav_module_default()).line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MobileNav_module_default()).nav_items,
                children: navMap
            })
        ]
    });
};
/* harmony default export */ const MobileHeader_MobileNav_MobileNav = (MobileNav_MobileNav);

;// CONCATENATED MODULE: ./src/components/MobileHeader/MobileHeader.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const MobileHeader = ()=>{
    const [visible, setVisible] = (0,react_.useState)(false);
    const setVisNav = ()=>setVisible(!visible);
    // useEffect(() => {
    //     visible && setTimeout(setVisNav, 5000)
    // }, [visible])
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileHeader_MobileNav_MobileNav, {
                visible: visible,
                setVisible: setVisible
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: (MobileHeader_module_default()).header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MobileHeader_module_default()).btn,
                        onClick: setVisNav,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (MobileHeader_module_default()).logo,
                        children: "Логотип"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "icon",
                        priority: true,
                        src: User,
                        width: 20,
                        height: 20
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const MobileHeader_MobileHeader = (MobileHeader);


/***/ }),

/***/ 43726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navigation = {
    deposits: [
        [
            {
                text: "Вклады",
                link: "/deposits"
            },
            {
                text: "Специальные предложения",
                link: "/deposits/special-offers"
            }
        ],
        [
            {
                text: "Накопительные счета",
                link: "/deposits/saving-accounts"
            }
        ]
    ],
    credits: [
        [
            {
                text: "Мастер подбора кредитов",
                link: "/credits"
            },
            {
                text: "Потребительские кредиты",
                link: "/credits/consumer-credits"
            },
            {
                text: "Рефинансирование",
                link: "/credits/refinancing-credits"
            },
            {
                text: "Кредитный рейтинг",
                link: "/credits/rating"
            }
        ],
        [
            {
                text: "Микрозаймы",
                link: "/credits/microloans"
            },
            {
                text: "Автокредиты",
                link: "/credits/autocredit"
            },
            {
                text: "Кредитный калькулятор",
                link: "/credits/calculator"
            },
            {
                text: "Мастер выдачи займов",
                link: "/credits/get-loan"
            }
        ]
    ],
    cards: [
        [
            {
                text: "Кредитные карты",
                link: "/cards/credit-cards"
            },
            {
                text: "Карты рассрочки",
                link: "/cards/installment"
            },
            {
                text: "Дебетовые карты",
                link: "/cards/debit-cards"
            }
        ],
        [
            {
                text: "Мастер подбора карт",
                link: "/cards/select-cards"
            },
            {
                text: "Специальные предложения",
                link: "/cards/special-offers"
            }
        ]
    ],
    ipoteka: [
        [
            {
                text: "Мастер подбора кредитов",
                link: "/ipoteka/offers"
            },
            {
                text: "Ипотечные кредиты",
                link: "/ipoteka/credits"
            },
            {
                text: "Ипотечное страхование",
                link: "/insurance"
            },
            {
                text: "Спецпредложения",
                link: "/ipoteka/special-offers"
            }
        ],
        [
            {
                text: "Рефинансирование",
                link: "/ipoteka/refinance"
            },
            {
                text: "Вторичное жильё",
                link: "/ipoteka/secondary"
            },
            {
                text: "Новостройки",
                link: "/ipoteka/new-building"
            },
            {
                text: "Выбрать недвижимость",
                link: "/ipoteka/discount"
            }
        ]
    ],
    insurance: [
        [
            {
                text: "ОСАГО",
                link: "/insurance/osago"
            },
            {
                text: "КАСКО",
                link: "/insurance/kasco"
            },
            {
                text: "Путешествие",
                link: "/insurance/travel"
            },
            {
                text: "Жизнь и здоровье",
                link: "/insurance/health"
            }
        ],
        [
            {
                text: "Ипотечное страхование",
                link: "/insurance/ipot-ins"
            },
            {
                text: "ДМС",
                link: "/insurance/dms"
            },
            {
                text: "Все предложения",
                link: "/insurance"
            }
        ]
    ],
    investment: [
        [
            {
                text: "С чего начать",
                link: "/investment"
            },
            {
                text: "Акции",
                link: "/investment/stocks"
            },
            {
                text: "Подбор брокера",
                link: "/investment/select-broker"
            },
            {
                text: "Специальные предложения",
                link: "/investment/special-offers"
            },
            {
                text: "Криптовалюта",
                link: "/investment/crypto"
            }
        ],
        [
            {
                text: "Обучение",
                link: "/investment"
            },
            {
                text: "Фонды",
                link: "/investment/fonds"
            },
            {
                text: "Облигации",
                link: "/investment/obligations"
            },
            {
                text: "Аналитика",
                link: "/investment/analytics"
            },
            {
                text: "Избранное",
                link: "/investment"
            }
        ]
    ],
    business: [
        [
            {
                text: "Все продукты",
                link: "/business"
            },
            {
                text: "Расчётно-кассовое обслуживание",
                link: "/business/service"
            },
            {
                text: "Бизнес-карты",
                link: "/business/slips"
            }
        ],
        [
            {
                text: "Кредиты для ИП",
                link: "/business/payments"
            },
            {
                text: "Страхование бизнеса",
                link: "/business/assurance"
            }
        ]
    ],
    news: [
        [
            {
                text: "Все события дня",
                link: "/news"
            },
            {
                text: "Лента новостей",
                link: "/news"
            },
            {
                text: "Тема дня",
                link: "/news"
            },
            {
                text: "Мнение",
                link: "/news"
            }
        ],
        [
            {
                text: "Аналитические исследования",
                link: "/news"
            },
            {
                text: "Банковский словарь",
                link: "/news"
            }
        ]
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);


/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  StoreProvider: () => (/* binding */ StoreProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
;// CONCATENATED MODULE: ./src/core/store/business/business-slice.ts

const initialState = {
    slideItems: []
};
const businessSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "business",
    initialState,
    reducers: {}
});
/* harmony default export */ const business_slice = (businessSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/cards/cards-slice.ts

const cards_slice_initialState = {
    creditCards: [
        {
            bank_name: "Кыргызкоммерцбанк",
            name: "KKB",
            type: "VISA",
            currency: "KGS",
            limit: 250000,
            grace_period: 60,
            rate: 26,
            service_1_year: 0,
            follow_up_service: 0
        },
        {
            bank_name: "РСК",
            name: "Visa Infinite",
            type: "VISA",
            currency: "KGS",
            limit: 500000,
            grace_period: 45,
            rate: 26,
            service_1_year: 15000,
            follow_up_service: 10000
        },
        {
            bank_name: "Demir Bank",
            name: "Visa Classic",
            type: "VISA",
            currency: "KGS",
            limit: 500000,
            grace_period: 35,
            rate: 32.28,
            service_1_year: 800,
            follow_up_service: 800
        },
        {
            bank_name: "Demir Bank",
            name: "Visa Gold",
            type: "VISA",
            currency: "KGS",
            limit: 500000,
            grace_period: 35,
            rate: 32.28,
            service_1_year: 1500,
            follow_up_service: 1500
        },
        {
            bank_name: "Demir Bank",
            name: "Visa Platinum",
            type: "VISA",
            currency: "KGS",
            limit: 500000,
            grace_period: 35,
            rate: 32.28,
            service_1_year: 6000,
            follow_up_service: 6000
        },
        {
            bank_name: "Demir Bank",
            name: "MasterCard Standart",
            type: "MasterCard",
            currency: "KGS",
            limit: 500000,
            grace_period: 35,
            rate: 32.28,
            service_1_year: 800,
            follow_up_service: 800
        },
        {
            bank_name: "Demir Bank",
            name: "MasterCard Gold",
            type: "MasterCard",
            currency: "KGS",
            limit: 500000,
            grace_period: 35,
            rate: 32.28,
            service_1_year: 1500,
            follow_up_service: 1500
        },
        {
            bank_name: "Demir Bank",
            name: "MasterCard Platinum",
            type: "MasterCard",
            currency: "KGS",
            limit: 500000,
            grace_period: 35,
            rate: 32.28,
            service_1_year: 6000,
            follow_up_service: 6000
        },
        {
            bank_name: "ОАО \xabБАКАЙ БАНК\xbb",
            name: "Кредитные карты VISA",
            type: "VISA",
            currency: "KGS",
            limit: 500000,
            grace_period: 45,
            rate: 26,
            service_1_year: 300,
            follow_up_service: 300
        },
        {
            bank_name: "ОАО \xabКеремет Банк\xbb",
            name: "VISA Credit Classic",
            type: "VISA",
            currency: "KGS",
            limit: 200000,
            grace_period: 45,
            rate: 28,
            service_1_year: 200,
            follow_up_service: 200
        },
        {
            bank_name: "ОАО \xabКеремет Банк\xbb",
            name: "VISA Credit Classic",
            type: "VISA",
            currency: "USD",
            limit: 3000,
            grace_period: 45,
            rate: 20,
            service_1_year: 3,
            follow_up_service: 3
        },
        {
            bank_name: "ОАО \xabКеремет Банк\xbb",
            name: "VISA Credit Gold",
            type: "VISA",
            currency: "KGS",
            limit: 1000000,
            grace_period: 45,
            rate: 28,
            service_1_year: 1000,
            follow_up_service: 1000
        },
        {
            bank_name: "ОАО \xabКеремет Банк\xbb",
            name: "VISA Credit Gold",
            type: "VISA",
            currency: "USD",
            limit: 15000,
            grace_period: 45,
            rate: 20,
            service_1_year: 20,
            follow_up_service: 20
        },
        {
            bank_name: "РСК",
            name: "Mastercard",
            type: "MasterCard",
            currency: "KGS",
            limit: 100000,
            grace_period: 45,
            rate: 28,
            service_1_year: 0,
            follow_up_service: 0
        },
        {
            bank_name: "РСК",
            name: "Visa",
            type: "VISA",
            currency: "KGS",
            limit: 100000,
            grace_period: 45,
            rate: 28,
            service_1_year: 0,
            follow_up_service: 0
        }
    ]
};
const cardsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "cards",
    initialState: cards_slice_initialState,
    reducers: {}
});
/* harmony default export */ const cards_slice = (cardsSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/credits/credits-slice.ts

const credits_slice_initialState = {};
const creditsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "credits",
    initialState: credits_slice_initialState,
    reducers: {}
});
/* harmony default export */ const credits_slice = (creditsSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/deposits/deposits-slice.ts

const deposits_slice_initialState = {};
const depositsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "deposits",
    initialState: deposits_slice_initialState,
    reducers: {}
});
/* harmony default export */ const deposits_slice = (depositsSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/investing/investing-slice.ts

const investing_slice_initialState = {};
const investingSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "investment",
    initialState: investing_slice_initialState,
    reducers: {}
});
/* harmony default export */ const investing_slice = (investingSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/main/main-slice.ts

const main_slice_initialState = {
    serviceItems: [
        {
            text: "Вклады",
            link: "/deposits"
        },
        {
            text: "Микрозаймы",
            link: "/credits/microloans"
        },
        {
            text: "Накопительные счета",
            link: "/deposits/saving-accounts"
        },
        {
            text: "Потребительские кредиты",
            link: "/credits/consumer-credits"
        },
        {
            text: "Кредитные карты",
            link: "/cards/credit-cards"
        },
        {
            text: "Карты рассрочки",
            link: "/cards/installment"
        },
        {
            text: "Дебетовые карты",
            link: "/cards/debit-cards"
        },
        {
            text: "Ипотечное страхование",
            link: "/insurance"
        },
        {
            text: "ОСАГО",
            link: "/insurance/osago"
        },
        {
            text: "КАСКО",
            link: "/insurance/kasco"
        },
        {
            text: "Путешествие",
            link: "/insurance/travel"
        },
        {
            text: "Жизнь и здоровье",
            link: "/insurance/health"
        },
        {
            text: "ДМС",
            link: "/insurance/dms"
        },
        {
            text: "Акции",
            link: "/investment/stocks"
        },
        {
            text: "Подбор брокера",
            link: "/investment/select-broker"
        },
        {
            text: "Криптовалюта",
            link: "/investment/crypto"
        },
        {
            text: "Фонды",
            link: "/investment/fonds"
        },
        {
            text: "Облигации",
            link: "/investment/obligations"
        },
        {
            text: "Аналитика",
            link: "/investment/analytics"
        },
        {
            text: "Расчётно-кассовое обслуживание",
            link: "/business/service"
        },
        {
            text: "Бизнес-карты",
            link: "/business/slips"
        },
        {
            text: "Кредиты для ИП",
            link: "/business/payments"
        },
        {
            text: "Страхование бизнеса",
            link: "/business/assurance"
        }
    ]
};
const HomeSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "home",
    initialState: main_slice_initialState,
    reducers: {}
});
/* harmony default export */ const main_slice = (HomeSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/mortgages/mortgage-slice.ts

const mortgage_slice_initialState = {};
const mortgageSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "mortgage",
    initialState: mortgage_slice_initialState,
    reducers: {}
});
/* harmony default export */ const mortgage_slice = (mortgageSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/news/news-slice.ts

const news_slice_initialState = {
    list: [
        {
            title: "Приходите в СперБанк",
            text: "У нас работает Жорж Милославский, он знает свое дело",
            id: 1,
            image: null,
            subtitle: "Э, слышь приходи"
        },
        {
            title: "Приходите в СперБанк",
            text: "У нас работает Жорж Милославский, он знает свое дело",
            id: 2,
            image: null,
            subtitle: "Э, слышь приходи"
        },
        {
            title: "Приходите в СперБанк",
            text: "У нас работает Жорж Милославский, он знает свое дело",
            id: 3,
            image: null,
            subtitle: "Э, слышь приходи"
        }
    ],
    investingList: [],
    saveList: [
        {
            title: "Как получить ставку по вкладу выше ключевой",
            text: "Вместе с ключевой ставкой растут и ставки по" + " депозитам. Некоторые банки уже предлагают ставки до 14% годовых, но есть условия." + " Где и как получить самое выгодное предложение — подробнее в материале \xabРБК Инвестиций\xbb",
            id: 1,
            image: null,
            subtitle: "Топ-5 вкладов"
        },
        {
            title: "Как получить ставку по вкладу выше ключевой",
            text: "Вместе с ключевой ставкой растут и ставки по" + " депозитам. Некоторые банки уже предлагают ставки до 14% годовых, но есть условия." + " Где и как получить самое выгодное предложение — подробнее в материале \xabРБК Инвестиций\xbb",
            id: 2,
            image: null,
            subtitle: "Топ-5 вкладов"
        },
        {
            title: "Как получить ставку по вкладу выше ключевой",
            text: "Вместе с ключевой ставкой растут и ставки по" + " депозитам. Некоторые банки уже предлагают ставки до 14% годовых, но есть условия." + " Где и как получить самое выгодное предложение — подробнее в материале \xabРБК Инвестиций\xbb",
            id: 3,
            image: null,
            subtitle: "Топ-5 вкладов"
        }
    ],
    loansList: [
        {
            title: "Доля просроченных россиянами микрозаймов в начале лета резко выросла",
            text: "В мае—июне в Кыргызстане резко увеличилась доля микрозаймов, выплаты по которым просрочены." + " Она достигла 46%, показали данные \xabСкоринг Бюро\xbb. Но МФО и эксперты пока не считают ситуацию" + " критическойПодробнее на РБК",
            id: 1,
            image: null,
            subtitle: "Несет ли это риски для рынка"
        },
        {
            title: "Доля просроченных россиянами микрозаймов в начале лета резко выросла",
            text: "В мае—июне в Кыргызстане резко увеличилась доля микрозаймов, выплаты по которым просрочены." + " Она достигла 46%, показали данные \xabСкоринг Бюро\xbb. Но МФО и эксперты пока не считают ситуацию" + " критическойПодробнее на РБК",
            id: 2,
            image: null,
            subtitle: "Несет ли это риски для рынка"
        },
        {
            title: "Доля просроченных россиянами микрозаймов в начале лета резко выросла",
            text: "В мае—июне в Кыргызстане резко увеличилась доля микрозаймов, выплаты по которым просрочены." + " Она достигла 46%, показали данные \xabСкоринг Бюро\xbb. Но МФО и эксперты пока не считают ситуацию" + " критическойПодробнее на РБК",
            id: 3,
            image: null,
            subtitle: "Несет ли это риски для рынка"
        }
    ],
    insuranceList: [
        {
            title: "Райффайзенбанк продаст дочернюю страховую компанию",
            text: "Райффайзенбанк решил выйти из \xabРайффайзен Лайф\xbb, продав 25% группе \xabРенессанс Страхование\xbb. Сделка еще должна быть одобрена российскими регуляторами",
            id: 1,
            image: null,
            subtitle: ""
        },
        {
            title: "Райффайзенбанк продаст дочернюю страховую компанию",
            text: "Райффайзенбанк решил выйти из \xabРайффайзен Лайф\xbb, продав 25% группе \xabРенессанс Страхование\xbb. Сделка еще должна быть одобрена российскими регуляторами",
            id: 2,
            image: null,
            subtitle: ""
        },
        {
            title: "Райффайзенбанк продаст дочернюю страховую компанию",
            text: "Райффайзенбанк решил выйти из \xabРайффайзен Лайф\xbb, продав 25% группе \xabРенессанс Страхование\xbb. Сделка еще должна быть одобрена российскими регуляторами",
            id: 3,
            image: null,
            subtitle: ""
        }
    ],
    safeList: [
        {
            title: "Пашинян назвал ошибкой зависимость от Кыргызстане в сфере безопасности",
            text: "Ереван почти на 100% полагался на Москву, но сегодня \xabсама Россия" + " нуждается в оружии, вооружении, понятно, что при желании она не сможет обеспечить" + " потребности Армении\xbb, сказал Пашинян. Путин признавал нехватку современного оружия",
            id: 1,
            image: null,
            subtitle: ""
        },
        {
            title: "Пашинян назвал ошибкой зависимость от Кыргызстане в сфере безопасности",
            text: "Ереван почти на 100% полагался на Москву, но сегодня \xabсама Россия" + " нуждается в оружии, вооружении, понятно, что при желании она не сможет обеспечить" + " потребности Армении\xbb, сказал Пашинян. Путин признавал нехватку современного оружия",
            id: 2,
            image: null,
            subtitle: ""
        },
        {
            title: "Пашинян назвал ошибкой зависимость от Кыргызстане в сфере безопасности",
            text: "Ереван почти на 100% полагался на Москву, но сегодня \xabсама Россия" + " нуждается в оружии, вооружении, понятно, что при желании она не сможет обеспечить" + " потребности Армении\xbb, сказал Пашинян. Путин признавал нехватку современного оружия",
            id: 3,
            image: null,
            subtitle: ""
        }
    ]
};
const newsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "news",
    initialState: news_slice_initialState,
    reducers: {}
});
/* harmony default export */ const news_slice = (newsSlice.reducer);

;// CONCATENATED MODULE: ./src/core/store/store.ts









const rootReducer = (0,redux_toolkit_cjs_production_min.combineReducers)({
    business: business_slice,
    cards: cards_slice,
    credits: credits_slice,
    deposits: deposits_slice,
    investment: investing_slice,
    home: main_slice,
    mortgage: mortgage_slice,
    news: news_slice
});
const setupStore = ()=>{
    return (0,redux_toolkit_cjs_production_min.configureStore)({
        reducer: rootReducer
    });
};

;// CONCATENATED MODULE: ./src/core/store/provider.tsx
/* __next_internal_client_entry_do_not_use__ StoreProvider auto */ 



const store = setupStore();
function StoreProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}


/***/ }),

/***/ 26058:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "loading_loader__fqFOj",
	"mulShdSpin": "loading_mulShdSpin__LCs6F"
};


/***/ }),

/***/ 4874:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__MwWvM",
	"logo": "Header_logo__V9h3K",
	"nav": "Header_nav____I21",
	"nav_item": "Header_nav_item__brnZL",
	"nav_item_active": "Header_nav_item_active__9nJXJ",
	"icons": "Header_icons__Wi_R7",
	"active_link": "Header_active_link__Sl8AK"
};


/***/ }),

/***/ 66282:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "Nav_main_container__yFns9",
	"column": "Nav_column__RWAY0",
	"link": "Nav_link__iXb5L"
};


/***/ }),

/***/ 53952:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "MobileHeader_header__7cD2B",
	"btn": "MobileHeader_btn__U9Ilg",
	"logo": "MobileHeader_logo__V4vba"
};


/***/ }),

/***/ 47067:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MobileNavItem_item__Bq_qM",
	"info": "MobileNavItem_info__RMDUg",
	"img_a": "MobileNavItem_img_a__Sj2TK",
	"item_a": "MobileNavItem_item_a__QKFt6",
	"items": "MobileNavItem_items__tB3fA"
};


/***/ }),

/***/ 8315:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "MobileNav_nav__PZEKI",
	"nav_a": "MobileNav_nav_a__15A4V",
	"line": "MobileNav_line__JkvE_",
	"search": "MobileNav_search__OX1s4",
	"nav_items": "MobileNav_nav_items__A201V"
};


/***/ }),

/***/ 52555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(30924);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\project-gitHub\banki_ru\banki\src\components\Header\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
;// CONCATENATED MODULE: ./src/components/MobileHeader/MobileHeader.tsx

const MobileHeader_proxy = (0,module_proxy.createProxy)(String.raw`D:\project-gitHub\banki_ru\banki\src\components\MobileHeader\MobileHeader.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MobileHeader_esModule, $$typeof: MobileHeader_$$typeof } = MobileHeader_proxy;
const MobileHeader_default_ = MobileHeader_proxy.default;


/* harmony default export */ const MobileHeader = (MobileHeader_default_);
;// CONCATENATED MODULE: ./src/core/store/provider.tsx

const provider_proxy = (0,module_proxy.createProxy)(String.raw`D:\project-gitHub\banki_ru\banki\src\core\store\provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: provider_esModule, $$typeof: provider_$$typeof } = provider_proxy;
const provider_default_ = provider_proxy.default;

const e0 = provider_proxy["StoreProvider"];

;// CONCATENATED MODULE: ./src/app/layout.tsx






// export const metadata: Metadata = {
//     title: "Главная",
//     description: "Главная страница банков",
// };
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileHeader, {}),
                    children
                ]
            })
        })
    });
}
/* harmony default export */ const layout = (RootLayout);


/***/ }),

/***/ 88924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26058);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_2__);



// import classNames from 'classnames';
function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loader)
    });
}


/***/ }),

/***/ 93636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arr_d_spec.4684d381.svg","height":12,"width":21,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 30114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/search.bea25486.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 30924:
/***/ (() => {



/***/ })

};
;