exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 90577:
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
/* harmony import */ var _CustomWhiteSelectTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67132);
/* harmony import */ var _CustomWhiteSelectTitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomWhiteSelectTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const CustomWhiteSelectTitle = ({ title, options, width, value, setValue })=>{
    const handleChange = (e)=>setValue && setValue(e.target.value);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CustomWhiteSelectTitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default().years),
        style: {
            width: width ? `${width}px` : ""
        },
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                value: value,
                onChange: handleChange,
                children: options.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: el,
                        children: el
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomWhiteSelectTitle);


/***/ }),

/***/ 67132:
/***/ ((module) => {

// Exports
module.exports = {
	"years": "CustomWhiteSelectTitle_years__cRVe0"
};


/***/ })

};
;