exports.id = 3996;
exports.ids = [3996];
exports.modules = {

/***/ 70523:
/***/ ((module) => {

// Exports
module.exports = {
	"quests": "FrequentQuestions_quests__8wqkJ",
	"title": "FrequentQuestions_title__fhklN",
	"questItems": "FrequentQuestions_questItems__pZca2"
};


/***/ }),

/***/ 23996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ FrequentQuestions_FrequentQuestions)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/components/FrequentQuestions/FrequentQuestions.module.scss
var FrequentQuestions_module = __webpack_require__(70523);
var FrequentQuestions_module_default = /*#__PURE__*/__webpack_require__.n(FrequentQuestions_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/QuestionItem/QuestionItem.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\project-gitHub\banki_ru\banki\src\components\QuestionItem\QuestionItem.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const QuestionItem = (__default__);
;// CONCATENATED MODULE: ./src/components/FrequentQuestions/FrequentQuestions.tsx




const FrequentQuestions = ({ title, items })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (FrequentQuestions_module_default()).quests,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FrequentQuestions_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FrequentQuestions_module_default()).questItems,
                children: items.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(QuestionItem, {
                        item: el
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const FrequentQuestions_FrequentQuestions = (FrequentQuestions);


/***/ })

};
;