exports.id = 8455;
exports.ids = [8455];
exports.modules = {

/***/ 7941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82941);
/* harmony import */ var _ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ChoiseItem = ({ name, active, setActive, href })=>{
    const setCurrentActive = ()=>{
        setActive && setActive(name);
    };
    if (href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            onClick: setCurrentActive,
            className: active ? (_ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item_active) : (_ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
            href: href ? href : "",
            children: name
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: setCurrentActive,
        className: active ? (_ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item_active) : (_ChoiseItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
        children: name
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoiseItem);


/***/ }),

/***/ 88455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Choise_ChoiseItem_ChoiseItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7941);



const ChoiseItemsMap = ({ choiseItems, currentChoise, setActive })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: choiseItems?.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Choise_ChoiseItem_ChoiseItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: el.name,
                active: currentChoise?.toLowerCase() === el.name.toLowerCase(),
                setActive: setActive,
                href: el.href
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoiseItemsMap);


/***/ }),

/***/ 82941:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "ChoiseItem_item__R9opB",
	"item_active": "ChoiseItem_item_active__lFdTe"
};


/***/ })

};
;