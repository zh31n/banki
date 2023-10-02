exports.id = 4886;
exports.ids = [4886];
exports.modules = {

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

/***/ 26992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ OffersBanks_OffersBanks)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/screens/SpecialCardsOfffersPage/components/OffersBanks/OffersBanks.module.scss
var OffersBanks_module = __webpack_require__(86628);
var OffersBanks_module_default = /*#__PURE__*/__webpack_require__.n(OffersBanks_module);
// EXTERNAL MODULE: ./src/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items.module.scss
var Items_module = __webpack_require__(44178);
var Items_module_default = /*#__PURE__*/__webpack_require__.n(Items_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
// EXTERNAL MODULE: ./src/assets/icons/offer_img1.png
var offer_img1 = __webpack_require__(59919);
// EXTERNAL MODULE: ./src/assets/icons/gasprom.svg
var gasprom = __webpack_require__(49783);
;// CONCATENATED MODULE: ./src/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items.tsx







const Items = ({ item })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Items_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: offer_img1["default"],
                alt: "",
                width: 279,
                height: 165
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: gasprom["default"],
                alt: "",
                width: 40,
                height: 40,
                className: (Items_module_default()).img
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Items_module_default()).content_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Items_module_default()).text_main,
                        children: item.bank_name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Items_module_default()).sub,
                        children: "Акция \xabПутешествий с Level.Travel\xbb с картой UnionPay от Газпромбанка"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Items_module_default()).blue_text,
                        children: "Кэшбек до 10 000 ₽ за покупку тура"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Items_module_default()).blue_text_container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "88px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Items_module_default()).blue_text,
                                        children: "Обслуживание"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Items_module_default()).text,
                                        children: "0 ₽"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "112px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Items_module_default()).blue_text,
                                        children: "Кэшбек на все покупки"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Items_module_default()).text,
                                        children: "1,5%"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                        text: "Посмотреть",
                        width: 231,
                        height: 40,
                        fSize: 16
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Items_Items = (Items);

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
;// CONCATENATED MODULE: ./src/screens/SpecialCardsOfffersPage/components/OffersBanks/OffersBanks.tsx






const OffersBanks = (props)=>{
    const { cards, title } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OffersBanks_module_default()).container,
        children: [
            title ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (OffersBanks_module_default()).title,
                children: title
            }) : "",
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (OffersBanks_module_default()).map_cont,
                children: cards.slice(0, 12).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Items_Items, {
                        item: item
                    }, (0,nanoid/* nanoid */.x0)()))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                text: "Показать еще",
                width: 236,
                fSize: 20,
                height: 60
            })
        ]
    });
};
/* harmony default export */ const OffersBanks_OffersBanks = (OffersBanks);


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

/***/ 44178:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Items_container__EpcXk",
	"img": "Items_img__AogJh",
	"content_container": "Items_content_container__mJN6y",
	"text_main": "Items_text_main__sfspp",
	"text": "Items_text__41H8E",
	"sub": "Items_sub__x_GDr",
	"blue_text": "Items_blue_text__0t3b6",
	"blue_text_container": "Items_blue_text_container__f_Zar"
};


/***/ }),

/***/ 86628:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "OffersBanks_container__yH0lZ",
	"title": "OffersBanks_title__pMMXz",
	"map_cont": "OffersBanks_map_cont__q9vWK",
	"image": "OffersBanks_image__0ZhpB"
};


/***/ })

};
;