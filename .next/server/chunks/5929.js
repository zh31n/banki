exports.id = 5929;
exports.ids = [5929];
exports.modules = {

/***/ 65610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CatalogItems_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63397);
/* harmony import */ var _CatalogItems_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CatalogItems_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Catalog_CatalogItemsMap_CatalogItemsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73430);




const CatalogItems = ({ title, items, width })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CatalogItems_module_scss__WEBPACK_IMPORTED_MODULE_3___default().catalog_items),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CatalogItems_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CatalogItems_module_scss__WEBPACK_IMPORTED_MODULE_3___default().items_cont),
                style: {
                    width: `${width}`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Catalog_CatalogItemsMap_CatalogItemsMap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    items: items
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogItems);


/***/ }),

/***/ 20490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ credits_CreditOfferList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/credits/CreditOfferList/index.module.scss
var index_module = __webpack_require__(34160);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_left.svg
var _left = __webpack_require__(42091);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
var _right = __webpack_require__(67135);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Choise/ChoiseItemsMap/ChoiseItemsMap.tsx
var ChoiseItemsMap = __webpack_require__(88455);
// EXTERNAL MODULE: ./src/components/credits/CreditOfferItem/index.module.scss
var CreditOfferItem_index_module = __webpack_require__(5363);
var CreditOfferItem_index_module_default = /*#__PURE__*/__webpack_require__.n(CreditOfferItem_index_module);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/loco.svg
var loco = __webpack_require__(6692);
;// CONCATENATED MODULE: ./src/components/credits/CreditOfferItem/index.tsx





const CreditOfferItem = (props)=>{
    const { item: { name, max_amount } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CreditOfferItem_index_module_default()).offer_item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditOfferItem_index_module_default()).inf,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "icon",
                        src: loco["default"]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CreditOfferItem_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (CreditOfferItem_index_module_default()).name,
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (CreditOfferItem_index_module_default()).subtitle,
                                children: ""
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CreditOfferItem_index_module_default()).line
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditOfferItem_index_module_default()).tarifs,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CreditOfferItem_index_module_default()).years,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (CreditOfferItem_index_module_default()).title,
                                children: "Годовых"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "от " + "rate" + " %"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CreditOfferItem_index_module_default()).years,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (CreditOfferItem_index_module_default()).title,
                                children: "Годовых"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "до ",
                                    (max_amount + max_amount / 100 * 10) / 1000000,
                                    " млн ₽"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const credits_CreditOfferItem = (CreditOfferItem);

;// CONCATENATED MODULE: ./src/components/credits/CreditOfferList/index.tsx








const CreditOfferList = (props)=>{
    const { choiceItems, credits } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).offer_month,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).title,
                children: [
                    "Предложения ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "месяца"
                    })
                ]
            }),
            choiceItems && choiceItems.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).select_items,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChoiseItemsMap/* default */.Z, {
                    choiseItems: choiceItems
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).offer_cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (index_module_default()).arr,
                        alt: "icon",
                        src: _left/* default */.Z
                    }),
                    credits.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(credits_CreditOfferItem, {
                            item: item
                        }, item.id)),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (index_module_default()).arr,
                        alt: "icon",
                        src: _right["default"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const credits_CreditOfferList = (CreditOfferList);


/***/ }),

/***/ 20937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ credits_CreditTopBankList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/credits/CreditTopBankList/index.module.scss
var index_module = __webpack_require__(37120);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/components/credits/CreditTopBankItem/index.module.scss
var CreditTopBankItem_index_module = __webpack_require__(9855);
var CreditTopBankItem_index_module_default = /*#__PURE__*/__webpack_require__.n(CreditTopBankItem_index_module);
;// CONCATENATED MODULE: ./src/components/credits/CreditTopBankItem/index.tsx



const CreditTopBankItem = (props)=>{
    const { item: { name, min_amount, max_amount, timeframe_min, timeframe_max } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CreditTopBankItem_index_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditTopBankItem_index_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "description"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditTopBankItem_index_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Эффективная ставка"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "rate",
                            " %"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditTopBankItem_index_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Срок"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            timeframe_min,
                            " - ",
                            timeframe_max,
                            " дней"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditTopBankItem_index_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Сумма"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            min_amount,
                            " — ",
                            max_amount,
                            " ₽"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const credits_CreditTopBankItem = (CreditTopBankItem);

;// CONCATENATED MODULE: ./src/components/credits/CreditTopBankList/index.tsx




const CreditTopBankList = (props)=>{
    const { title = "Потребительские кредиты в Бишкеке", subtitle = " - ТОП 10 банков в 2023 году", credits } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                        children: title
                    }),
                    subtitle
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).banks_items,
                children: credits.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(credits_CreditTopBankItem, {
                        item: item
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const credits_CreditTopBankList = (CreditTopBankList);


/***/ }),

/***/ 63397:
/***/ ((module) => {

// Exports
module.exports = {
	"catalog_items": "CatalogItems_catalog_items__ODU_r",
	"title": "CatalogItems_title__irdQ1",
	"items_cont": "CatalogItems_items_cont___0RJq"
};


/***/ }),

/***/ 5363:
/***/ ((module) => {

// Exports
module.exports = {
	"offer_item": "CreditOfferItem_offer_item__v8C4q",
	"inf": "CreditOfferItem_inf__w2x03",
	"info": "CreditOfferItem_info__8gvbW",
	"name": "CreditOfferItem_name__k07jj",
	"subtitle": "CreditOfferItem_subtitle__RBa_p",
	"line": "CreditOfferItem_line__SvtC8",
	"tarifs": "CreditOfferItem_tarifs__zC7Xj",
	"years": "CreditOfferItem_years__GozaX",
	"title": "CreditOfferItem_title__llLom"
};


/***/ }),

/***/ 34160:
/***/ ((module) => {

// Exports
module.exports = {
	"offer_month": "CreditOfferList_offer_month__MafiE",
	"title": "CreditOfferList_title__YVx00",
	"select_items": "CreditOfferList_select_items__UH_NP",
	"offer_cont": "CreditOfferList_offer_cont__3zEGC",
	"arr": "CreditOfferList_arr__vYx2v"
};


/***/ }),

/***/ 9855:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "CreditTopBankItem_item__42ExY",
	"title": "CreditTopBankItem_title__Ovz08",
	"info": "CreditTopBankItem_info__LfvNM"
};


/***/ }),

/***/ 37120:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "CreditTopBankList_wrapper__pAKsJ",
	"title": "CreditTopBankList_title__WdWOM",
	"banks_items": "CreditTopBankList_banks_items__65mbT"
};


/***/ }),

/***/ 42091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Стрелка_left.8c8b40c8.svg","height":43,"width":44,"blurWidth":0,"blurHeight":0});

/***/ })

};
;