exports.id = 2372;
exports.ids = [2372];
exports.modules = {

/***/ 34473:
/***/ ((module) => {

// Exports
module.exports = {
	"bonus": "Bonus_bonus__9qDkX",
	"logo": "Bonus_logo__wV_UX",
	"info": "Bonus_info__OOsSH",
	"title": "Bonus_title__kciNI"
};


/***/ }),

/***/ 67525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Bonus_Bonus)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/components/Bonus/Bonus.module.scss
var Bonus_module = __webpack_require__(34473);
var Bonus_module_default = /*#__PURE__*/__webpack_require__.n(Bonus_module);
;// CONCATENATED MODULE: ./src/assets/icons/banki_icon/Стрелка_right.svg
/* harmony default export */ const _right = ({"src":"/_next/static/media/Стрелка_right.22e8dc27.svg","height":43,"width":44,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Bonus/Bonus.tsx





const Bonus = (props)=>{
    const { title = "Бонус до 2000 рублей за открытие вклада!", img, text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", height } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Bonus_module_default()).bonus,
        style: {
            height: `${height}px`
        },
        children: [
            img ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: img,
                alt: "logo bank"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Bonus_module_default()).logo,
                children: "Логотип"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Bonus_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Bonus_module_default()).title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: _right,
                alt: "иконка стрелки вправо"
            })
        ]
    });
};
/* harmony default export */ const Bonus_Bonus = (Bonus);


/***/ }),

/***/ 67135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Стрелка_right.22e8dc27.svg","height":43,"width":44,"blurWidth":0,"blurHeight":0});

/***/ })

};
;