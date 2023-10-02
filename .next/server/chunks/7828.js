exports.id = 7828;
exports.ids = [7828];
exports.modules = {

/***/ 47828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SlipsBanksSlider_SlipsBanksSlider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_left.svg
var _left = __webpack_require__(42091);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
var _right = __webpack_require__(67135);
// EXTERNAL MODULE: ./src/screens/SlipsBusinessPage/components/SlipsBanksSlider/SlipsBanksSlider.module.scss
var SlipsBanksSlider_module = __webpack_require__(15861);
var SlipsBanksSlider_module_default = /*#__PURE__*/__webpack_require__.n(SlipsBanksSlider_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/SliderBusinessItem/SliderBusinessItem.module.scss
var SliderBusinessItem_module = __webpack_require__(99374);
var SliderBusinessItem_module_default = /*#__PURE__*/__webpack_require__.n(SliderBusinessItem_module);
;// CONCATENATED MODULE: ./src/components/SliderBusinessItem/SliderBusinessItem.tsx



const SliderBusinessItem = ({ title, sub })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SliderBusinessItem_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (SliderBusinessItem_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (SliderBusinessItem_module_default()).sub,
                children: sub
            })
        ]
    });
};
/* harmony default export */ const SliderBusinessItem_SliderBusinessItem = (SliderBusinessItem);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 5 modules
var swiper_react = __webpack_require__(62945);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(63754);
;// CONCATENATED MODULE: ./src/screens/SlipsBusinessPage/components/SlipsBanksSlider/SlipsBanksSlider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const SlipsBanksSlider = ({ items })=>{
    const swiperRef = (0,react_.useRef)(null);
    const nextSlide = ()=>{
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    };
    const prevSlide = ()=>{
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SlipsBanksSlider_module_default()).cont,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                onClick: prevSlide,
                style: {
                    cursor: "pointer"
                },
                src: _left/* default */.Z,
                alt: "arrow left"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                id: "swiper",
                slidesPerView: 5,
                ref: swiperRef,
                loop: true,
                spaceBetween: 5,
                children: items.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SliderBusinessItem_SliderBusinessItem, {
                            title: el.title,
                            sub: el.sub
                        })
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                onClick: nextSlide,
                style: {
                    cursor: "pointer"
                },
                src: _right["default"],
                alt: "arrow right"
            })
        ]
    });
};
/* harmony default export */ const SlipsBanksSlider_SlipsBanksSlider = (SlipsBanksSlider);


/***/ }),

/***/ 99374:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "SliderBusinessItem_item__NkMWp",
	"title": "SliderBusinessItem_title__gDGxN",
	"sub": "SliderBusinessItem_sub__OedDG"
};


/***/ }),

/***/ 15861:
/***/ ((module) => {

// Exports
module.exports = {
	"cont": "SlipsBanksSlider_cont__147Kn",
	"items_cont": "SlipsBanksSlider_items_cont__qpGCU"
};


/***/ })

};
;