exports.id = 4255;
exports.ids = [4255];
exports.modules = {

/***/ 44255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LastBuy_LastBuy)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/LastBuy/LastBuy.module.scss
var LastBuy_module = __webpack_require__(11470);
var LastBuy_module_default = /*#__PURE__*/__webpack_require__.n(LastBuy_module);
// EXTERNAL MODULE: ./src/components/LastBuy/Item/Item.module.scss
var Item_module = __webpack_require__(48555);
var Item_module_default = /*#__PURE__*/__webpack_require__.n(Item_module);
;// CONCATENATED MODULE: ./src/assets/icons/alfa_strahovanie.svg
/* harmony default export */ const alfa_strahovanie = ({"src":"/_next/static/media/alfa_strahovanie.d5f31e70.svg","height":49,"width":123,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
;// CONCATENATED MODULE: ./src/components/LastBuy/Item/Item.tsx






const Item = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Item_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Item_module_default()).top_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: alfa_strahovanie,
                        alt: "альфа страхование"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Item_module_default()).text_cont,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Item_module_default()).text,
                                children: "9 781 ₽"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Item_module_default()).text_grey,
                                children: "9 781 ₽"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Item_module_default()).text_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "BMW X5 2008 г.в., 355 л.с"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Водитель 43 года, стаж 18 лет"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "г. Москва"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                text: "Купить в АЛЬФАСТРАХОВАНИЕ",
                width: 231,
                fSize: 14,
                height: 40
            })
        ]
    });
};
/* harmony default export */ const Item_Item = (Item);

// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
var _right = __webpack_require__(67135);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 5 modules
var swiper_react = __webpack_require__(62945);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(63754);
;// CONCATENATED MODULE: ./src/components/LastBuy/LastBuy.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const LastBuy = ()=>{
    const sliderRef = (0,react_.useRef)();
    const nextSlide = ()=>{
        if (!sliderRef.current) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LastBuy_module_default()).main_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Последние купленные полисы"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (LastBuy_module_default()).items_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(swiper_react/* Swiper */.tq, {
                        id: "swiper",
                        ref: sliderRef,
                        spaceBetween: 10,
                        slidesPerView: 4,
                        loop: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item_Item, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        onClick: nextSlide,
                        style: {
                            cursor: "pointer"
                        },
                        src: _right["default"],
                        alt: "arr"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const LastBuy_LastBuy = (LastBuy);


/***/ }),

/***/ 48555:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Item_container__8OT0E",
	"top_container": "Item_top_container__27WZd",
	"text_cont": "Item_text_cont__8jRWr",
	"text": "Item_text__ymNq9",
	"text_grey": "Item_text_grey__mFzn2",
	"text_container": "Item_text_container__F1Onm"
};


/***/ }),

/***/ 11470:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "LastBuy_main_container__u_maM",
	"items_container": "LastBuy_items_container__QBcxY"
};


/***/ })

};
;