exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 94243:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "BlueBtn_btn__Wd1H7"
};


/***/ }),

/***/ 3097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("D:\\project-gitHub\\banki_ru\\banki\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 25124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(3097);


/***/ }),

/***/ 54329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
/* harmony import */ var _BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94243);
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


/***/ })

};
;