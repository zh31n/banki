exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 30440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoneySelect_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98205);
/* harmony import */ var _MoneySelect_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MoneySelect_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MoneySelect = ({ width, value, setValue, title })=>{
    const handleChange = (e)=>setValue(e.target.value);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_MoneySelect_module_scss__WEBPACK_IMPORTED_MODULE_2___default().summa),
        style: {
            width: `${width}px`
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_MoneySelect_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sum_info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: title || "Cумма"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        value: value,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_MoneySelect_module_scss__WEBPACK_IMPORTED_MODULE_2___default().select),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                    defaultValue: "₽",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "₽",
                        children: "₽"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneySelect);


/***/ }),

/***/ 98205:
/***/ ((module) => {

// Exports
module.exports = {
	"summa": "MoneySelect_summa__EBpo6",
	"select": "MoneySelect_select__yrN2K",
	"sum_info": "MoneySelect_sum_info__P4vl3"
};


/***/ })

};
;