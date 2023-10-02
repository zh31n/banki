exports.id = 9818;
exports.ids = [9818];
exports.modules = {

/***/ 79818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OffersInvest_OffersInvest)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/screens/InvestmentPage/components/OffersInvest/OffersInvest.module.scss
var OffersInvest_module = __webpack_require__(25449);
var OffersInvest_module_default = /*#__PURE__*/__webpack_require__.n(OffersInvest_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_left.svg
var _left = __webpack_require__(42091);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
var _right = __webpack_require__(67135);
// EXTERNAL MODULE: ./src/screens/InvestmentPage/components/OffersInvest/OffersInvestItem/OffersInvestItem.module.scss
var OffersInvestItem_module = __webpack_require__(40529);
var OffersInvestItem_module_default = /*#__PURE__*/__webpack_require__.n(OffersInvestItem_module);
;// CONCATENATED MODULE: ./src/screens/InvestmentPage/components/OffersInvest/OffersInvestItem/OffersInvestItem.tsx




const OffersInvestItem = ({ img, name, info, title, sub })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OffersInvestItem_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersInvestItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: img,
                        alt: "bank icon"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (OffersInvestItem_module_default()).info_i,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OffersInvestItem_module_default()).title,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (OffersInvestItem_module_default()).sub,
                                children: sub
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersInvestItem_module_default()).item_info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (OffersInvestItem_module_default()).title,
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (OffersInvestItem_module_default()).sub,
                        children: info
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OffersInvestItem_OffersInvestItem = (OffersInvestItem);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 5 modules
var swiper_react = __webpack_require__(62945);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(63754);
;// CONCATENATED MODULE: ./src/screens/InvestmentPage/components/OffersInvest/OffersInvest.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const OffersInvest = ({ items })=>{
    const sliderRef = (0,react_.useRef)(null);
    const nextSlide = ()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    };
    const prevSlide = ()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OffersInvest_module_default()).wrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersInvest_module_default()).title,
                children: [
                    "Предложения ",
                    /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                        children: "месяца"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersInvest_module_default()).cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: _left/* default */.Z,
                        onClick: prevSlide,
                        className: (OffersInvest_module_default()).arr,
                        alt: "arrow left"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                        ref: sliderRef,
                        id: "swiper",
                        loop: true,
                        spaceBetween: 5,
                        slidesPerView: 4,
                        children: items.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(OffersInvestItem_OffersInvestItem, {
                                    img: el.img,
                                    name: el.name,
                                    info: el.info,
                                    title: el.title,
                                    sub: el.sub
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: _right["default"],
                        onClick: nextSlide,
                        className: (OffersInvest_module_default()).arr,
                        alt: "arrow right"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OffersInvest_OffersInvest = (OffersInvest);


/***/ }),

/***/ 25449:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "OffersInvest_wrap__ns3gE",
	"title": "OffersInvest_title__Y_smN",
	"cont": "OffersInvest_cont__RKTFV",
	"arr": "OffersInvest_arr___56cP"
};


/***/ }),

/***/ 40529:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "OffersInvestItem_item__9i0R3",
	"info": "OffersInvestItem_info__KIMds",
	"info_i": "OffersInvestItem_info_i__dMbY7",
	"title": "OffersInvestItem_title__oqSrn",
	"sub": "OffersInvestItem_sub__vICh_",
	"item_info": "OffersInvestItem_item_info__esahS"
};


/***/ }),

/***/ 42091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Стрелка_left.8c8b40c8.svg","height":43,"width":44,"blurWidth":0,"blurHeight":0});

/***/ })

};
;