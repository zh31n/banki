exports.id = 3500;
exports.ids = [3500];
exports.modules = {

/***/ 78954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5615);
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


/***/ }),

/***/ 40371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34587);
/* harmony import */ var _CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const CustomInput = ({ width, height, place, border })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cont),
        style: {
            width: `${width}px`,
            height: `${height}px`,
            borderColor: `${border}`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            className: (_CustomInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inp),
            placeholder: place,
            type: "text"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomInput);


/***/ }),

/***/ 21336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* reexport */ ModalInnerWrapper)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/UI/ModalInnerWrapper/modalInnerWrapper.module.scss
var modalInnerWrapper_module = __webpack_require__(44379);
var modalInnerWrapper_module_default = /*#__PURE__*/__webpack_require__.n(modalInnerWrapper_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(89367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/UI/ModalInnerWrapper/ModalInnerWrapper.tsx




function ModalInnerWrapper({ children, className }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()((modalInnerWrapper_module_default()).backDrop, className),
        children: children
    });
}

;// CONCATENATED MODULE: ./src/UI/ModalInnerWrapper/index.ts



/***/ }),

/***/ 54289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(89367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
// EXTERNAL MODULE: ./src/UI/Modal/modal.module.scss
var modal_module = __webpack_require__(54421);
var modal_module_default = /*#__PURE__*/__webpack_require__.n(modal_module);
;// CONCATENATED MODULE: ./src/UI/Modal/Modal.tsx
/* __next_internal_client_entry_do_not_use__ Modal auto */ 




function Modal({ children, className, onClose }) {
    const modal = (0,react_.useRef)();
    (0,react_.useEffect)(()=>{
        const handleWrapperClick = (event)=>{
            const { target } = event;
            if (target instanceof Node && modal.current === target) {
                onClose?.();
            }
        };
        const handleEscapePress = (event)=>{
            if (event.key === "Escape") {
                onClose?.();
            }
        };
        window.addEventListener("click", handleWrapperClick);
        window.addEventListener("keydown", handleEscapePress);
        return ()=>{
            window.removeEventListener("click", handleWrapperClick);
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [
        onClose
    ]);
    (0,react_.useEffect)(()=>{
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "visible";
        };
    }, []);
    return /*#__PURE__*/ (0,server_rendering_stub_.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: modal,
        className: classnames_default()((modal_module_default()).backDrop, className),
        children: children
    }), document.body);
}

;// CONCATENATED MODULE: ./src/UI/Modal/index.ts



/***/ }),

/***/ 5615:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "BlueBtn_btn__Wd1H7"
};


/***/ }),

/***/ 34587:
/***/ ((module) => {

// Exports
module.exports = {
	"cont": "CustomInput_cont__8XN_N",
	"inp": "CustomInput_inp__pFaxM"
};


/***/ }),

/***/ 44379:
/***/ ((module) => {

// Exports
module.exports = {
	"backDrop": "modalInnerWrapper_backDrop__bizc_"
};


/***/ }),

/***/ 54421:
/***/ ((module) => {

// Exports
module.exports = {
	"backDrop": "modal_backDrop__iPfNA"
};


/***/ }),

/***/ 33771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);


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


/***/ })

};
;