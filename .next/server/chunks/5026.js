exports.id = 5026;
exports.ids = [5026];
exports.modules = {

/***/ 33967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BanksWithButton_BanksWithButton)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/BanksWithButton/BanksWithButton.module.scss
var BanksWithButton_module = __webpack_require__(28176);
var BanksWithButton_module_default = /*#__PURE__*/__webpack_require__.n(BanksWithButton_module);
// EXTERNAL MODULE: ./src/components/BanksWithButton/BankCardItem/BankCardItem.module.scss
var BankCardItem_module = __webpack_require__(36386);
var BankCardItem_module_default = /*#__PURE__*/__webpack_require__.n(BankCardItem_module);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
;// CONCATENATED MODULE: ./src/components/BanksWithButton/BankCardItem/BankCardItem.tsx




const BankCardItem = (props)=>{
    const { item: { bank_name, name } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BankCardItem_module_default()).main_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BankCardItem_module_default()).text_container,
                children: [
                    bank_name,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BankCardItem_module_default()).period_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankCardItem_module_default()).blue_text,
                        children: "Льготный период"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankCardItem_module_default()).text,
                        children: "до 1095 дней"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BankCardItem_module_default()).time_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankCardItem_module_default()).blue_text,
                        children: "Обслуживание"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankCardItem_module_default()).text,
                        children: "Бесплатно"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BankCardItem_module_default()).bonus_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankCardItem_module_default()).blue_text,
                        children: "Бонусная программа"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankCardItem_module_default()).text,
                        children: "до 5 000 баллов/мес"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                text: "Оформить",
                width: 180,
                height: 60,
                fSize: 20
            })
        ]
    });
};
/* harmony default export */ const BankCardItem_BankCardItem = (BankCardItem);

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
;// CONCATENATED MODULE: ./src/components/BanksWithButton/BanksWithButton.tsx





const BanksWithButton = (props)=>{
    const { text, sub_value, cards } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BanksWithButton_module_default()).main_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BanksWithButton_module_default()).text_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                        children: text
                    }),
                    " ",
                    sub_value
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (BanksWithButton_module_default()).items_container,
                children: cards.slice(0, 10).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BankCardItem_BankCardItem, {
                            item: item
                        })
                    }, (0,nanoid/* nanoid */.x0)()))
            })
        ]
    });
};
/* harmony default export */ const BanksWithButton_BanksWithButton = (BanksWithButton);


/***/ }),

/***/ 84124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97274);
/* harmony import */ var _FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_QuestionItem_QuestionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89677);




const FrequentQuestions = ({ title, items })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().quests),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().questItems),
                children: items.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QuestionItem_QuestionItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        item: el
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrequentQuestions);


/***/ }),

/***/ 55307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Offers_Offers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/screens/CreditMapPage/components/Offers/Offers.module.scss
var Offers_module = __webpack_require__(87839);
var Offers_module_default = /*#__PURE__*/__webpack_require__.n(Offers_module);
;// CONCATENATED MODULE: ./src/screens/CreditMapPage/components/Offers/Image.tsx


const Image = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 11L3 11",
                stroke: "#121212",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 16H3",
                stroke: "#121212",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14 13.5L16.1 16L20 11",
                stroke: "#121212",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 6L13.5 6M20 6L17.75 6",
                stroke: "#121212",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            })
        ]
    });
};
/* harmony default export */ const Offers_Image = (Image);

// EXTERNAL MODULE: ./src/screens/CreditMapPage/components/OffersItem/OffersItem.module.scss
var OffersItem_module = __webpack_require__(13548);
var OffersItem_module_default = /*#__PURE__*/__webpack_require__.n(OffersItem_module);
// EXTERNAL MODULE: ./src/assets/icons/card.png
var card = __webpack_require__(86630);
;// CONCATENATED MODULE: ./src/screens/CreditMapPage/components/OffersItem/Image.tsx


const Image_Image = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M19 9L12 15L10.25 13.5M5 9L7.33333 11",
            stroke: "#4DA7FF",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
};
/* harmony default export */ const OffersItem_Image = (Image_Image);

;// CONCATENATED MODULE: ./src/screens/CreditMapPage/components/OffersItem/CheckImage.tsx


const CheckImage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 11.2324L3 11.2324",
                stroke: "#4DA7FF",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 16.2324H3",
                stroke: "#4DA7FF",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14 13.7324L16.1 16.2324L20 11.2324",
                stroke: "#4DA7FF",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 6.23242L13.5 6.23242M20 6.23242L17.75 6.23242",
                stroke: "#4DA7FF",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            })
        ]
    });
};
/* harmony default export */ const OffersItem_CheckImage = (CheckImage);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
;// CONCATENATED MODULE: ./src/assets/icons/warning_icon.png
/* harmony default export */ const warning_icon = ({"src":"/_next/static/media/warning_icon.649be30c.png","height":19,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApElEQVR42k2OPQoCMRBGY24gCjaKlWgtwgoroigWu1k0iKV6AlvtFO9hnXjKwTdLhB145Mu8/Iwpo7QMVQbJ4a64IDvTLP8Ri5giRtB3UW5VlHMt2YyRJ8008yrIIvUfMDEqYWMobnsO+ZSX9I8a9oRtujUjZ5qZbUU+6LNdxKv+4ittRCcN/Syi9EzarOENc8gc0vHCX1pdOT0gX+BaBBmmOewPSDZm2G8qmq4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/screens/CreditMapPage/components/OffersItem/OffersItem.tsx









const OffersItem = (props)=>{
    const { item, arrChildren, openChildren, child } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OffersItem_module_default()).main_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: card/* default */.Z,
                        alt: "Карта"
                    }),
                    !child && arrChildren.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OffersItem_module_default()).count_cart,
                        onClick: (e)=>openChildren(e),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Еще ",
                                    arrChildren ? arrChildren.length : 0,
                                    " карты"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(OffersItem_Image, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersItem_module_default()).bank_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (OffersItem_module_default()).bold_text,
                        children: item.bank_name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (OffersItem_module_default()).grey_text,
                        children: item.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersItem_module_default()).types_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OffersItem_module_default()).top_container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (OffersItem_module_default()).blue_text,
                                        children: "Льготный период"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (OffersItem_module_default()).text,
                                        children: "до 55 дней"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (OffersItem_module_default()).blue_text,
                                        children: "Баллы"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (OffersItem_module_default()).text,
                                        children: "до 6000/мес."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (OffersItem_module_default()).blue_text,
                                        children: "Обслуживание"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (OffersItem_module_default()).text,
                                        children: "590 ₽ в год "
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OffersItem_module_default()).bottom_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OffersItem_module_default()).bottom_container_active_container,
                                children: "Партнер раздела"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OffersItem_module_default()).bottom_container_container,
                                children: "Партнер раздела"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OffersItem_module_default()).bottom_container_container,
                                children: "На любые цели"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersItem_module_default()).get_cart_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OffersItem_module_default()).top_container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (OffersItem_module_default()).check_container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(OffersItem_CheckImage, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Сравнить"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OffersItem_module_default()).warning_container,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: warning_icon,
                                    alt: "warning",
                                    className: (OffersItem_module_default()).image
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                        text: "Оформить карту",
                        width: 222,
                        height: 60,
                        fSize: 20
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OffersItem_OffersItem = (OffersItem);

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
;// CONCATENATED MODULE: ./src/screens/CreditMapPage/components/Offers/Offers.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Offers = ({ cards })=>{
    const [cardsLength, setCardsLenth] = (0,react_.useState)([]);
    const titleScroll = (0,react_.useRef)(null);
    const [isOpen, setIsOpen] = (0,react_.useState)([]);
    const [higthItems, setHigthItems] = (0,react_.useState)(0);
    const cardsAreRolledIntoBanks = (0,react_.useMemo)(()=>{
        const _cardsAreRolledIntoBanks = cards.reduce((arr, el)=>{
            const avilable = arr.find((bank)=>bank[0].bank_name === el.bank_name);
            if (avilable) {
                avilable.push(el);
            } else {
                const nevArr = [
                    el
                ];
                arr.push(nevArr);
            }
            return arr;
        }, []);
        _cardsAreRolledIntoBanks.map((el)=>{
            return el.map((elem)=>{
                return {
                    ...elem,
                    length: el.length
                };
            });
        });
        return _cardsAreRolledIntoBanks;
    }, [
        cards
    ]);
    const leaderBanks = (0,react_.useMemo)(()=>{
        const _leaderBanks = cardsAreRolledIntoBanks.reduce((arr, el)=>{
            arr.push(el[0]);
            return arr;
        }, []);
        return _leaderBanks;
    }, [
        cardsAreRolledIntoBanks
    ]);
    (0,react_.useEffect)(()=>{
        if (!leaderBanks) return;
        setCardsLenth(leaderBanks.slice(0, 4));
    }, []);
    const handleClick = ()=>{
        titleScroll.current.scrollIntoView({
            behavior: "smooth"
        });
        setCardsLenth((prevState)=>prevState.length === 4 ? leaderBanks : leaderBanks.slice(0, 4));
    };
    const handleOpenChildren = (0,react_.useCallback)((e, item)=>{
        setHigthItems(e.currentTarget.parentElement.parentElement.getBoundingClientRect().height);
        const presence = isOpen.find((el)=>el === item.bank_name);
        if (!presence) {
            setIsOpen((currentVal)=>[
                    ...currentVal,
                    item.bank_name
                ]);
        } else {
            setIsOpen((currentVal)=>currentVal.filter((el)=>el !== item.bank_name));
        }
    }, [
        isOpen
    ]);
    const presenceClassName = (item)=>{
        const presence = isOpen.find((el)=>el === item.bank_name);
        return presence ? true : false;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Offers_module_default()).main_container,
        ref: titleScroll,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Offers_module_default()).count_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Offers_module_default()).right_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Offers_module_default()).blue,
                                children: cards.length
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "предложения"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Offers_module_default()).left_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Offers_Image, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Сравнение"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (Offers_module_default()).deposit_offers,
                children: cardsLength.map((item)=>{
                    const arrChildren = cardsAreRolledIntoBanks.find((el)=>el[0].bank_name === item.bank_name);
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(OffersItem_OffersItem, {
                                item: item,
                                arrChildren: arrChildren ? arrChildren.slice(1) : [],
                                openChildren: (e)=>handleOpenChildren(e, item)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Offers_module_default()).deposit_offers_children,
                                style: {
                                    height: presenceClassName(item) ? `${(arrChildren.length - 1) * higthItems + (arrChildren.length - 1) * 15}px` : "0"
                                },
                                children: arrChildren.slice(1).map((child)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        style: {
                                            marginTop: "2.5px",
                                            marginBottom: "2.5px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(OffersItem_OffersItem, {
                                            child: true,
                                            item: child
                                        })
                                    }, (0,nanoid/* nanoid */.x0)()))
                            })
                        ]
                    }, (0,nanoid/* nanoid */.x0)());
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Offers_module_default()).btn_cont,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                    text: "Смотреть все",
                    width: 235,
                    onClick: ()=>handleClick()
                })
            })
        ]
    });
};
/* harmony default export */ const Offers_Offers = (Offers);


/***/ }),

/***/ 36386:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "BankCardItem_main_container__w28V6",
	"text_container": "BankCardItem_text_container__2HY8e",
	"period_container": "BankCardItem_period_container__6ota4",
	"blue_text": "BankCardItem_blue_text__Tkhwo",
	"text": "BankCardItem_text__m2jn4",
	"time_container": "BankCardItem_time_container__xO57T",
	"bonus_container": "BankCardItem_bonus_container__Pjp4k"
};


/***/ }),

/***/ 28176:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "BanksWithButton_main_container__Ernod",
	"text_container": "BanksWithButton_text_container__aXrAZ",
	"items_container": "BanksWithButton_items_container__kYrgC"
};


/***/ }),

/***/ 97274:
/***/ ((module) => {

// Exports
module.exports = {
	"quests": "FrequentQuestions_quests__8wqkJ",
	"title": "FrequentQuestions_title__fhklN",
	"questItems": "FrequentQuestions_questItems__pZca2"
};


/***/ }),

/***/ 13548:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "OffersItem_main_container__AarU7",
	"count_cart": "OffersItem_count_cart__4fRn3",
	"bank_container": "OffersItem_bank_container__RzF1X",
	"bold_text": "OffersItem_bold_text___C4mU",
	"grey_text": "OffersItem_grey_text__PYS5q",
	"types_container": "OffersItem_types_container__wfIWW",
	"bottom_container": "OffersItem_bottom_container__0uFbj",
	"bottom_container_active_container": "OffersItem_bottom_container_active_container___8FJD",
	"bottom_container_container": "OffersItem_bottom_container_container__KD5TX",
	"top_container": "OffersItem_top_container__PWN_i",
	"blue_text": "OffersItem_blue_text__exl8u",
	"text": "OffersItem_text__UYCkZ",
	"get_cart_container": "OffersItem_get_cart_container__kKybF",
	"check_container": "OffersItem_check_container__Xchce",
	"warning_container": "OffersItem_warning_container__EygPk",
	"image": "OffersItem_image___noAo"
};


/***/ }),

/***/ 87839:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "Offers_main_container__ssNND",
	"count_container": "Offers_count_container__ehsbL",
	"left_container": "Offers_left_container__mPsAn",
	"right_container": "Offers_right_container__JeD2Y",
	"blue": "Offers_blue__uCXBx",
	"deposit_offers": "Offers_deposit_offers___dnUg",
	"deposit_offers_children": "Offers_deposit_offers_children__ZgHEn",
	"btn_cont": "Offers_btn_cont__IsUfA"
};


/***/ }),

/***/ 86630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/card.98d8f42c.png","height":77,"width":122,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAqElEQVR4nA3MsQ7BQACA4f+c3JVokGLpaBGDwSiRmGxGb2AQXsSTmBGDUewWu0jEIkVCXfQ0aXmBT8wm8yiUrsavsdzekSpLEBjeV0O/W7FiPF2kvu+w2md5XD9cQosNvoCg0XQRw9Eq6bRdsdnFFF2JeRmkzKCV5Hj+pKLVW6ae51AtSRyVcA8TzNOSU3AJYkRnsI68sta6oNkfHpxuf/4UQT1PoaTsD5+OPa6ruTEHAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ })

};
;