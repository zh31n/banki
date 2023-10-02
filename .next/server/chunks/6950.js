exports.id = 6950;
exports.ids = [6950];
exports.modules = {

/***/ 78954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5615);
/* harmony import */ var _BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BlueBtn = ({ text, width, height, fSize, count, onClick })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        className: (_BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),
        style: {
            width: `${width}px`,
            height: height ? `${height}px` : "",
            fontSize: fSize ? `${fSize}px` : ""
        },
        children: [
            text,
            count && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: count
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueBtn);


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

/***/ 52774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Navigation_Navigation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/screens/SpecialCardsOfffersPage/components/Navigation/Navigation.module.scss
var Navigation_module = __webpack_require__(5751);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
// EXTERNAL MODULE: ./src/screens/SpecialCardsOfffersPage/components/Navigation/Parametrs/Parametrs.module.scss
var Parametrs_module = __webpack_require__(63994);
var Parametrs_module_default = /*#__PURE__*/__webpack_require__.n(Parametrs_module);
// EXTERNAL MODULE: ./src/screens/SpecialCardsOfffersPage/components/Navigation/Parametrs/ParametrsItem/ParametrsItem.module.scss
var ParametrsItem_module = __webpack_require__(10618);
var ParametrsItem_module_default = /*#__PURE__*/__webpack_require__.n(ParametrsItem_module);
;// CONCATENATED MODULE: ./src/screens/SpecialCardsOfffersPage/components/Navigation/Parametrs/ParametrsItem/ParametrsItem.tsx



const ParametrsItem = ({ active, text })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: active ? (ParametrsItem_module_default()).parametr_container_active : (ParametrsItem_module_default()).parametr_container,
        children: text
    });
};
/* harmony default export */ const ParametrsItem_ParametrsItem = (ParametrsItem);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/screens/SpecialCardsOfffersPage/components/Navigation/Parametrs/Parametrs.tsx





const Parametrs = (props)=>{
    const { data } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Parametrs_module_default()).main_container,
        children: data?.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: el.link,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ParametrsItem_ParametrsItem, {
                    text: el.name,
                    active: el.active
                })
            }, index))
    });
};
/* harmony default export */ const Parametrs_Parametrs = (Parametrs);

;// CONCATENATED MODULE: ./src/screens/SpecialCardsOfffersPage/components/Navigation/Navigation.tsx




const Navigation = ({ data })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navigation_module_default()).main_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navigation_module_default()).nav_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Главная"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Карты"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Navigation_module_default()).grey_text,
                        children: "Специальные предложения"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navigation_module_default()).main_cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Navigation_module_default()).text,
                        children: "Специальные"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Navigation_module_default()).blue_text,
                        children: "предложения"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parametrs_Parametrs, {
                data: data
            })
        ]
    });
};
/* harmony default export */ const Navigation_Navigation = (Navigation);


/***/ }),

/***/ 5615:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "BlueBtn_btn__Wd1H7"
};


/***/ }),

/***/ 5751:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "Navigation_main_container__DDScF",
	"nav_container": "Navigation_nav_container__0ohnv",
	"grey_text": "Navigation_grey_text__ALeeC",
	"main_cont": "Navigation_main_cont__Cx3NB",
	"text": "Navigation_text__ZBqU2",
	"blue_text": "Navigation_blue_text__tBKLw",
	"top_container": "Navigation_top_container__ThKLe",
	"text_container": "Navigation_text_container__fWBN2",
	"bottom_container": "Navigation_bottom_container__hwqoy",
	"little_text_cont": "Navigation_little_text_cont__SVr_Z"
};


/***/ }),

/***/ 63994:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "Parametrs_main_container__wIhrP"
};


/***/ }),

/***/ 10618:
/***/ ((module) => {

// Exports
module.exports = {
	"parametr_container": "ParametrsItem_parametr_container__3ztnv",
	"parametr_container_active": "ParametrsItem_parametr_container_active__IDhtl",
	"item": "ParametrsItem_item__p1NEn"
};


/***/ })

};
;