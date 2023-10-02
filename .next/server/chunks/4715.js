exports.id = 4715;
exports.ids = [4715];
exports.modules = {

/***/ 34715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76648);
/* harmony import */ var _SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_BlueBtn_BlueBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78954);
/* harmony import */ var _assets_icons_offer_img1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59919);
/* harmony import */ var _assets_icons_banki_icon_dom_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16206);







const SpecialOfferItem = (props)=>{
    const { item: { name, rate, timeframe_min, timeframe_max, count2, count1, title_2, title_1 } } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                alt: "icon",
                className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),
                src: _assets_icons_offer_img1_png__WEBPACK_IMPORTED_MODULE_4__["default"]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item_info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        alt: "icon",
                        src: _assets_icons_banki_icon_dom_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().name),
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bonus),
                        style: {
                            height: "12px"
                        },
                        children: "Бонус 500 ₽ за вклад"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().line)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info_more),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info_item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                        children: title_1 || "Ставка"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: count1 || `до ${rate}%`
                                    })
                                ]
                            }),
                            (count2 || timeframe_min || timeframe_max) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info_item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_SpecialOfferItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                        children: title_2 || "Срок"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: count2 || `${timeframe_min} - ${timeframe_max} дней`
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_BlueBtn_BlueBtn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        text: "Посмотреть",
                        width: 230,
                        height: 40,
                        fSize: 16
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecialOfferItem);


/***/ }),

/***/ 76648:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "SpecialOfferItem_item__x7QYS",
	"img": "SpecialOfferItem_img__EEMqj",
	"item_info": "SpecialOfferItem_item_info__iNdDP",
	"name": "SpecialOfferItem_name__DcPMl",
	"bonus": "SpecialOfferItem_bonus__YPE5V",
	"line": "SpecialOfferItem_line__bNLRU",
	"info_more": "SpecialOfferItem_info_more__cfs8X",
	"info_item": "SpecialOfferItem_info_item__wYmmq",
	"title": "SpecialOfferItem_title__JMo22"
};


/***/ })

};
;