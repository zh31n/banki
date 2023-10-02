exports.id = 1001;
exports.ids = [1001];
exports.modules = {

/***/ 83869:
/***/ ((module) => {

// Exports
module.exports = {
	"howWorks": "HowItWorks_howWorks__bF4g9",
	"title": "HowItWorks_title__3h4cw",
	"work_items": "HowItWorks_work_items__KFDkK"
};


/***/ }),

/***/ 92113:
/***/ ((module) => {

// Exports
module.exports = {
	"work_item": "HowItWorksItem_work_item__m_sOa",
	"info": "HowItWorksItem_info__IpOi8",
	"img": "HowItWorksItem_img__MbNhj",
	"name": "HowItWorksItem_name__Dx6q1"
};


/***/ }),

/***/ 51001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ HowItWorks_HowItWorks)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/components/HowItWorks/HowItWorks.module.scss
var HowItWorks_module = __webpack_require__(83869);
var HowItWorks_module_default = /*#__PURE__*/__webpack_require__.n(HowItWorks_module);
// EXTERNAL MODULE: ./src/components/HowItWorks/HowItWorksItem/HowItWorksItem.module.scss
var HowItWorksItem_module = __webpack_require__(92113);
var HowItWorksItem_module_default = /*#__PURE__*/__webpack_require__.n(HowItWorksItem_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/HowItWorks/HowItWorksItem/HowItWorksItem.tsx




const HowItWorksItem = ({ img, title, sub, text, w_text, height })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HowItWorksItem_module_default()).work_item,
        style: {
            height: `${height}px`
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HowItWorksItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (HowItWorksItem_module_default()).img,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: img,
                            alt: "иконка наших сторон"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HowItWorksItem_module_default()).name,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            sub
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    width: `${w_text}px`
                },
                children: text
            })
        ]
    });
};
/* harmony default export */ const HowItWorksItem_HowItWorksItem = (HowItWorksItem);

;// CONCATENATED MODULE: ./src/components/HowItWorks/HowItWorksItemsMap/HowItWorksItemsMap.tsx



const HowItWorksItemsMap = ({ items })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(HowItWorksItem_HowItWorksItem, {
                height: el.height,
                w_text: el.w_text,
                img: el.img,
                title: el.title,
                sub: el.sub,
                text: el.text
            }, index))
    });
};
/* harmony default export */ const HowItWorksItemsMap_HowItWorksItemsMap = (HowItWorksItemsMap);

;// CONCATENATED MODULE: ./src/components/HowItWorks/HowItWorks.tsx




const HowItWorks = ({ title, sub, items })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HowItWorks_module_default()).howWorks,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HowItWorks_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                        children: title
                    }),
                    sub
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (HowItWorks_module_default()).work_items,
                children: /*#__PURE__*/ jsx_runtime_.jsx(HowItWorksItemsMap_HowItWorksItemsMap, {
                    items: items
                })
            })
        ]
    });
};
/* harmony default export */ const HowItWorks_HowItWorks = (HowItWorks);


/***/ })

};
;