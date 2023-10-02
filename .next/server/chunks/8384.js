exports.id = 8384;
exports.ids = [8384];
exports.modules = {

/***/ 84124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97274);
/* harmony import */ var _FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_QuestionItem_QuestionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89677);




const FrequentQuestions = ({ title, items })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().quests),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_FrequentQuestions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().questItems),
                children: items.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QuestionItem_QuestionItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        item: el
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrequentQuestions);


/***/ }),

/***/ 12594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PageWrapper = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "container",
        style: {
            paddingTop: "20px",
            overflowX: "hidden",
            paddingBottom: "2rem"
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);


/***/ }),

/***/ 46918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockInvCalculate_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87166);
/* harmony import */ var _StockInvCalculate_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_StockInvCalculate_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_data_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65286);
/* harmony import */ var _components_Choise_ChoiseItemsMap_ChoiseItemsMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88455);
/* harmony import */ var _UI_Search_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16611);






const StockInvCalculate = ({ chooseD })=>{
    const chooseUp = _core_data_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.StockInvest.calc_choose_up;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_StockInvCalculate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_StockInvCalculate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().choose_up),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Choise_ChoiseItemsMap_ChoiseItemsMap__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    choiseItems: chooseUp
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Search_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
                placeholder: "Введите название"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_StockInvCalculate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().choose_up),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Choise_ChoiseItemsMap_ChoiseItemsMap__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    choiseItems: chooseD
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StockInvCalculate);


/***/ }),

/***/ 97274:
/***/ ((module) => {

// Exports
module.exports = {
	"quests": "FrequentQuestions_quests__8wqkJ",
	"title": "FrequentQuestions_title__fhklN",
	"questItems": "FrequentQuestions_questItems__pZca2"
};


/***/ }),

/***/ 87166:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "StockInvCalculate_wrapper___pAit",
	"choose_up": "StockInvCalculate_choose_up__zPMg6"
};


/***/ })

};
;