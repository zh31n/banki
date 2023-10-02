exports.id = 6762;
exports.ids = [6762];
exports.modules = {

/***/ 36762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ OfferMoth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/Offers/OfferMoth/OfferMoth.module.scss
var OfferMoth_module = __webpack_require__(1068);
var OfferMoth_module_default = /*#__PURE__*/__webpack_require__.n(OfferMoth_module);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_left.svg
var _left = __webpack_require__(42091);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
var _right = __webpack_require__(67135);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Choise/ChoiseItemsMap/ChoiseItemsMap.tsx
var ChoiseItemsMap = __webpack_require__(88455);
// EXTERNAL MODULE: ./src/components/Offers/OfferItem/OfferItem.module.scss
var OfferItem_module = __webpack_require__(53275);
var OfferItem_module_default = /*#__PURE__*/__webpack_require__.n(OfferItem_module);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/loco.svg
var loco = __webpack_require__(6692);
;// CONCATENATED MODULE: ./src/components/Offers/OfferItem/OfferItem.tsx





const OfferItem = (props)=>{
    const { item: { name, rate, timeframe_min, description } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OfferItem_module_default()).offer_item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OfferItem_module_default()).inf,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "icon",
                        src: loco["default"]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OfferItem_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OfferItem_module_default()).name,
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OfferItem_module_default()).subtitle,
                                children: description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (OfferItem_module_default()).line
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OfferItem_module_default()).tarifs,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OfferItem_module_default()).years,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OfferItem_module_default()).title,
                                children: "Годовых"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "до " + rate + " %"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OfferItem_module_default()).years,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OfferItem_module_default()).title,
                                children: "Срок"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: timeframe_min + " дн."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OfferItem_OfferItem = (OfferItem);

;// CONCATENATED MODULE: ./src/components/Offers/OfferMoth/OfferMoth.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const OfferMonth = (props)=>{
    const [currentChoise, setCurrentChoise] = (0,react_.useState)("Вклады");
    const { choiceItems, offers } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OfferMoth_module_default()).offer_month,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OfferMoth_module_default()).title,
                children: [
                    "Предложения ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "месяца"
                    })
                ]
            }),
            choiceItems && choiceItems.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (OfferMoth_module_default()).select_items,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChoiseItemsMap/* default */.Z, {
                    setActive: setCurrentChoise,
                    currentChoise: currentChoise,
                    choiseItems: choiceItems
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OfferMoth_module_default()).offer_cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (OfferMoth_module_default()).arr,
                        alt: "icon",
                        src: _left/* default */.Z
                    }),
                    offers.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(OfferItem_OfferItem, {
                            item: item
                        }, item.id)),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (OfferMoth_module_default()).arr,
                        alt: "icon",
                        src: _right["default"]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OfferMoth = (OfferMonth);


/***/ }),

/***/ 53275:
/***/ ((module) => {

// Exports
module.exports = {
	"offer_item": "OfferItem_offer_item__gqu9i",
	"inf": "OfferItem_inf__MTgdF",
	"info": "OfferItem_info__opDrb",
	"name": "OfferItem_name__O6qLA",
	"subtitle": "OfferItem_subtitle__A9kbP",
	"line": "OfferItem_line__C8m2s",
	"tarifs": "OfferItem_tarifs__UXuSG",
	"years": "OfferItem_years__XEtiN",
	"title": "OfferItem_title__C8UCB"
};


/***/ }),

/***/ 1068:
/***/ ((module) => {

// Exports
module.exports = {
	"offer_month": "OfferMoth_offer_month__3_Wh8",
	"title": "OfferMoth_title__oVNXH",
	"select_items": "OfferMoth_select_items__7SnFp",
	"offer_cont": "OfferMoth_offer_cont__tPlXk",
	"arr": "OfferMoth_arr__grsWz"
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