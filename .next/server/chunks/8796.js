exports.id = 8796;
exports.ids = [8796];
exports.modules = {

/***/ 68796:
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
/* harmony import */ var _InsuranceCompanys_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26461);
/* harmony import */ var _InsuranceCompanys_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_InsuranceCompanys_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Search_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16611);
/* harmony import */ var _screens_ConsumerCreditsPage_Components_SliderBanksCons_SliderBanksCons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69237);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const InsuranceCompanys = ({ data, title, isTitle, searchItems })=>{
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const filterArr = (items)=>{
        return items.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_InsuranceCompanys_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: [
            isTitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_InsuranceCompanys_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: title || "Страховые компании"
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Search_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
                placeholder: "Введите название компании",
                filterArr: filterArr,
                btnHidden: true,
                value: search,
                setValue: setSearch,
                itemsSearch: searchItems
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_screens_ConsumerCreditsPage_Components_SliderBanksCons_SliderBanksCons__WEBPACK_IMPORTED_MODULE_3__["default"], {
                data: data
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsuranceCompanys);


/***/ }),

/***/ 26461:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "InsuranceCompanys_wrapper__mcZ40",
	"title": "InsuranceCompanys_title__47pXs"
};


/***/ })

};
;