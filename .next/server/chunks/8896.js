exports.id = 8896;
exports.ids = [8896];
exports.modules = {

/***/ 98896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8116);
/* harmony import */ var _Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_banki_icon_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67135);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





const Bonus = (props)=>{
    const { title = "Бонус до 2000 рублей за открытие вклада!", img, text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", height } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bonus),
        style: {
            height: `${height}px`
        },
        children: [
            img ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: img,
                alt: "logo bank"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
                children: "Логотип"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Bonus_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _assets_icons_banki_icon_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
                alt: "иконка стрелки вправо"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bonus);


/***/ }),

/***/ 8116:
/***/ ((module) => {

// Exports
module.exports = {
	"bonus": "Bonus_bonus__9qDkX",
	"logo": "Bonus_logo__wV_UX",
	"info": "Bonus_info__OOsSH",
	"title": "Bonus_title__kciNI"
};


/***/ }),

/***/ 67135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Стрелка_right.22e8dc27.svg","height":43,"width":44,"blurWidth":0,"blurHeight":0});

/***/ })

};
;