exports.id = 2854;
exports.ids = [2854];
exports.modules = {

/***/ 92854:
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
/* harmony import */ var _CustomInputTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8193);
/* harmony import */ var _CustomInputTitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomInputTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const CustomInputTitle = ({ title, width, place, colorTitle, setValue, value })=>{
    const handleChange = (e)=>setValue && setValue(e.target.value);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CustomInputTitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default().years),
        style: {
            width: `${width}px`
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    color: `${colorTitle}`
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: place,
                onChange: handleChange,
                defaultValue: value
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomInputTitle);


/***/ }),

/***/ 8193:
/***/ ((module) => {

// Exports
module.exports = {
	"years": "CustomInputTitle_years__Ij3IS"
};


/***/ })

};
;