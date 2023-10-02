exports.id = 6433;
exports.ids = [6433];
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

/***/ 64406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49767);
/* harmony import */ var _WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_BlueBtn_BlueBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78954);




const WatchInfo = ({ title, text })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WatchInfo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_BlueBtn_BlueBtn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                text: "Смотреть",
                width: 222
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchInfo);


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

/***/ 97274:
/***/ ((module) => {

// Exports
module.exports = {
	"quests": "FrequentQuestions_quests__8wqkJ",
	"title": "FrequentQuestions_title__fhklN",
	"questItems": "FrequentQuestions_questItems__pZca2"
};


/***/ }),

/***/ 49767:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "WatchInfo_wrapper__JHxi7",
	"info": "WatchInfo_info__vu3pi",
	"title": "WatchInfo_title__lO7nH",
	"text": "WatchInfo_text__0Vp5C"
};


/***/ })

};
;