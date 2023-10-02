exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 46886:
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
/* harmony import */ var _CustomCheckboxAround_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2926);
/* harmony import */ var _CustomCheckboxAround_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomCheckboxAround_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const CustomCheckboxAround = ({ type = "checkbox", checked, handleChecked, value, setValue, current })=>{
    const hadleChange = ()=>handleChecked(!checked);
    const setVal = ()=>setValue(value);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: type || "checkbox",
            checked: type === "checkbox" ? checked : value === current,
            onChange: type === "checkbox" ? hadleChange : setVal,
            className: (_CustomCheckboxAround_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inp)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCheckboxAround);


/***/ }),

/***/ 2926:
/***/ ((module) => {

// Exports
module.exports = {
	"inp": "CustomCheckboxAround_inp__bZuoU"
};


/***/ }),

/***/ 72271:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "CustomSelectItemInp_wrap__D0llb"
};


/***/ }),

/***/ 75985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CustomSelectItemInp_CustomSelectItemInp)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/UI/CustomSelectItemInp/CustomSelectItemInp.module.scss
var CustomSelectItemInp_module = __webpack_require__(72271);
var CustomSelectItemInp_module_default = /*#__PURE__*/__webpack_require__.n(CustomSelectItemInp_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/UI/CustomCheckboxAround/CustomCheckboxAround.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\project-gitHub\banki_ru\banki\src\UI\CustomCheckboxAround\CustomCheckboxAround.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const CustomCheckboxAround = (__default__);
;// CONCATENATED MODULE: ./src/UI/CustomSelectItemInp/CustomSelectItemInp.tsx




const CustomSelectItemInp = ({ title, selected })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CustomSelectItemInp_module_default()).wrap,
        style: {
            borderColor: selected ? "#4DA7FF" : "",
            background: selected ? "white" : ""
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CustomCheckboxAround, {
                type: "radio",
                checked: selected
            }),
            title
        ]
    });
};
/* harmony default export */ const CustomSelectItemInp_CustomSelectItemInp = (CustomSelectItemInp);


/***/ })

};
;