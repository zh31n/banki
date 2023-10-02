exports.id = 9237;
exports.ids = [9237];
exports.modules = {

/***/ 4699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BankImgItemSlide_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27914);
/* harmony import */ var _BankImgItemSlide_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BankImgItemSlide_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




const BankImgItemSlide = ({ img })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_BankImgItemSlide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: img,
            alt: "иконка банка"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BankImgItemSlide);


/***/ }),

/***/ 69237:
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
/* harmony import */ var _SliderBanksCons_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38711);
/* harmony import */ var _SliderBanksCons_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SliderBanksCons_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_banki_icon_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67135);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62945);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63754);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Banki_BankiImg_BankImgItemSlide_BankImgItemSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4699);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48350);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const SliderBanksCons = ({ data })=>{
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [slideItems, setSlideItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}, (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .x0)())
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const slides = data.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o5, {
                style: {
                    zIndex: "-1"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banki_BankiImg_BankImgItemSlide_BankImgItemSlide__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    img: el
                })
            }, index));
        setSlideItems(slides);
    }, []);
    const handleNext = ()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SliderBanksCons_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slider),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .tq, {
                id: "swiperBanksCons",
                ref: sliderRef,
                spaceBetween: 5,
                slidesPerView: 6,
                loop: true,
                style: {
                    zIndex: "-1"
                },
                children: slideItems
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _assets_icons_banki_icon_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
                className: (_SliderBanksCons_module_scss__WEBPACK_IMPORTED_MODULE_8___default().arr),
                alt: "стрелка вправо",
                onClick: handleNext
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderBanksCons);


/***/ }),

/***/ 27914:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "BankImgItemSlide_item__QUv5K"
};


/***/ }),

/***/ 38711:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "SliderBanksCons_slider__cOOgq",
	"arr": "SliderBanksCons_arr___cH0v"
};


/***/ })

};
;