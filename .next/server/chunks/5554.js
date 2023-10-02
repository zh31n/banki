exports.id = 5554;
exports.ids = [5554];
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

/***/ 25554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mailing_Mailing)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/Mailing/Mailing.module.scss
var Mailing_module = __webpack_require__(19617);
var Mailing_module_default = /*#__PURE__*/__webpack_require__.n(Mailing_module);
;// CONCATENATED MODULE: ./src/assets/icons/rassilka.svg
/* harmony default export */ const rassilka = ({"src":"/_next/static/media/rassilka.8e46a562.svg","height":446,"width":522,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
// EXTERNAL MODULE: ./src/UI/CustomCheckboxAround/CustomCheckboxAround.tsx
var CustomCheckboxAround = __webpack_require__(46886);
;// CONCATENATED MODULE: ./src/components/Mailing/Mailing.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Mailing = ()=>{
    const [accessOne, setAccessOne] = (0,react_.useState)(true);
    const [accessTwo, setAccessTwo] = (0,react_.useState)(true);
    const handleChangeOne = ()=>setAccessOne(!accessOne);
    const handleChangeTwo = ()=>setAccessTwo(!accessTwo);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Mailing_module_default()).mailing,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Mailing_module_default()).info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Mailing_module_default()).title,
                        children: [
                            "Подпишитесь на нашу рассылку, ",
                            /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                                children: "чтобы быть в курсе новых предложений"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Mailing_module_default()).mailing_i,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Mailing_module_default()).mail_cont,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        placeholder: "Введите вашу почту"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                                        text: "Подписаться",
                                        width: 170
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Mailing_module_default()).inp_label,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomCheckboxAround["default"], {
                                            handleChecked: handleChangeOne,
                                            checked: accessOne
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Предоставляю своё ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "согласие"
                                            }),
                                            " на обработку персональных данных"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Mailing_module_default()).inp_label,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomCheckboxAround["default"], {
                                            handleChecked: handleChangeTwo,
                                            checked: accessTwo
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Предоставляю своё ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "согласие"
                                            }),
                                            " на получение рекламы и информационных сообщений"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: rassilka,
                alt: "рассылка фото"
            })
        ]
    });
};
/* harmony default export */ const Mailing_Mailing = (Mailing);


/***/ }),

/***/ 2926:
/***/ ((module) => {

// Exports
module.exports = {
	"inp": "CustomCheckboxAround_inp__bZuoU"
};


/***/ }),

/***/ 19617:
/***/ ((module) => {

// Exports
module.exports = {
	"mailing": "Mailing_mailing__TRxDO",
	"info": "Mailing_info__8oK4p",
	"title": "Mailing_title__vB1YI",
	"mailing_i": "Mailing_mailing_i__ygwKX",
	"mail_cont": "Mailing_mail_cont__Dould",
	"inp_label": "Mailing_inp_label__TrPKc"
};


/***/ })

};
;