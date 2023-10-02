exports.id = 5945;
exports.ids = [5945];
exports.modules = {

/***/ 65945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BrokersList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/investment/BrokersList/index.module.scss
var index_module = __webpack_require__(8522);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_left.svg
var _left = __webpack_require__(42091);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
var _right = __webpack_require__(67135);
// EXTERNAL MODULE: ./src/components/investment/BrokerItem/index.module.scss
var BrokerItem_index_module = __webpack_require__(48140);
var BrokerItem_index_module_default = /*#__PURE__*/__webpack_require__.n(BrokerItem_index_module);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/ifk_solid.svg
var ifk_solid = __webpack_require__(31320);
;// CONCATENATED MODULE: ./src/components/investment/BrokerItem/index.tsx





const BrokerItem = (props)=>{
    const { item: { name, description } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BrokerItem_index_module_default()).loan_org,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "icon",
                src: ifk_solid["default"]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BrokerItem_index_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const investment_BrokerItem = (BrokerItem);

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 5 modules
var swiper_react = __webpack_require__(62945);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(63754);
;// CONCATENATED MODULE: ./src/components/investment/BrokersList/index.tsx










const BrokerList = (props)=>{
    const { title, brokers } = props;
    const sliderRef = (0,react_.useRef)(null);
    const [slideItems, setSlideItems] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        const slides = brokers.slice(0, 15).map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(investment_BrokerItem, {
                    item: el
                }, (0,nanoid/* nanoid */.x0)())
            }, index));
        setSlideItems(slides);
    }, []);
    const handlePrev = ()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    };
    const handleNext = ()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).item_cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "стрелка влево",
                        className: (index_module_default()).arr,
                        src: _left/* default */.Z,
                        onClick: ()=>handlePrev()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                        id: "swiperBbrokers",
                        ref: sliderRef,
                        spaceBetween: 10,
                        slidesPerView: 3,
                        loop: true,
                        children: slideItems
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: _right["default"],
                        className: (index_module_default()).arr,
                        alt: "стрелка вправо",
                        onClick: ()=>handleNext()
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BrokersList = (BrokerList);


/***/ }),

/***/ 48140:
/***/ ((module) => {

// Exports
module.exports = {
	"loan_org": "BrokerItem_loan_org__dqphM",
	"info": "BrokerItem_info__PDFAB"
};


/***/ }),

/***/ 8522:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "BrokersList_wrapper__dlJGy",
	"title": "BrokersList_title__B_4K1",
	"item_cont": "BrokersList_item_cont___1Daa",
	"wrap": "BrokersList_wrap__INQeT",
	"arr": "BrokersList_arr__P2NU3"
};


/***/ })

};
;