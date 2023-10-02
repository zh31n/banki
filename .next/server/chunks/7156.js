exports.id = 7156;
exports.ids = [7156];
exports.modules = {

/***/ 97156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ OffersMonth_OffersMonth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/OffersMonth/OffersMonth.module.scss
var OffersMonth_module = __webpack_require__(32219);
var OffersMonth_module_default = /*#__PURE__*/__webpack_require__.n(OffersMonth_module);
// EXTERNAL MODULE: ./src/containers/Wrapper.tsx
var Wrapper = __webpack_require__(58689);
// EXTERNAL MODULE: ./src/assets/icons/bank_icons/alfa_bank.svg
var alfa_bank = __webpack_require__(56725);
// EXTERNAL MODULE: ./src/assets/icons/bank_icons/open_bank.svg
var open_bank = __webpack_require__(299);
// EXTERNAL MODULE: ./src/assets/icons/bank_icons/ros_bank.svg
var ros_bank = __webpack_require__(10269);
// EXTERNAL MODULE: ./src/assets/icons/bank_icons/vtb_bank.svg
var vtb_bank = __webpack_require__(66307);
// EXTERNAL MODULE: ./src/components/OffersMonth/BankItems/BankItems.module.scss
var BankItems_module = __webpack_require__(81479);
var BankItems_module_default = /*#__PURE__*/__webpack_require__.n(BankItems_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/OffersMonth/BankItems/BankItems.tsx




const BankItems = ({ img, procent_text, value })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BankItems_module_default()).bank_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: img,
                alt: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BankItems_module_default()).text_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankItems_module_default()).procent_text,
                        children: procent_text
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankItems_module_default()).rub_text,
                        children: "RUB"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (BankItems_module_default()).value_text,
                        children: value
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BankItems_BankItems = (BankItems);

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
;// CONCATENATED MODULE: ./src/components/OffersMonth/OffersMonth.tsx










const data = [
    {
        img: alfa_bank["default"],
        procent_text: "от 0%",
        value: "\xabПлатинум\xbb"
    },
    {
        img: open_bank["default"],
        procent_text: "До 12% на остаток",
        value: "\xabБесплатное обслуживание\xbb"
    },
    {
        img: ros_bank["default"],
        procent_text: "180 дней без %",
        value: "\xab0 руб. за обслуживание\xbb"
    },
    {
        img: vtb_bank["default"],
        procent_text: "Кредитка \xabГод без %\xbb",
        value: "\xab0 руб. за обслуживание и кешбек на все покупки\xbb"
    }
];
const OffersMonth = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (OffersMonth_module_default()).main_container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (OffersMonth_module_default()).text,
                    children: "Предложение месяца"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (OffersMonth_module_default()).banks_container,
                    children: data.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx(BankItems_BankItems, {
                            img: el.img,
                            procent_text: el.procent_text,
                            value: el.value
                        }, (0,nanoid/* nanoid */.x0)()))
                })
            ]
        })
    });
};
/* harmony default export */ const OffersMonth_OffersMonth = (OffersMonth);


/***/ }),

/***/ 58689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "container",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);


/***/ }),

/***/ 81479:
/***/ ((module) => {

// Exports
module.exports = {
	"bank_container": "BankItems_bank_container__zPWKE",
	"text_container": "BankItems_text_container__tp9TH",
	"procent_text": "BankItems_procent_text__9D3FH",
	"rub_text": "BankItems_rub_text__5PoQD",
	"value_text": "BankItems_value_text__C8Ugs"
};


/***/ }),

/***/ 32219:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "OffersMonth_main_container__PfAn9",
	"text": "OffersMonth_text__hwBrK",
	"banks_container": "OffersMonth_banks_container__xUJdW"
};


/***/ }),

/***/ 56725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/alfa_bank.e36a4a23.svg","height":35,"width":126,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/open_bank.b8fb0f74.svg","height":35,"width":126,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 10269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ros_bank.8312c665.svg","height":35,"width":126,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 66307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/vtb_bank.04a5e95c.svg","height":35,"width":139,"blurWidth":0,"blurHeight":0});

/***/ })

};
;