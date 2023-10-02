exports.id = 9677;
exports.ids = [9677];
exports.modules = {

/***/ 89677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ QuestionItem_QuestionItem)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/QuestionItem/QuestionItem.module.scss
var QuestionItem_module = __webpack_require__(46732);
var QuestionItem_module_default = /*#__PURE__*/__webpack_require__.n(QuestionItem_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/icons/plus.svg
/* harmony default export */ const plus = ({"src":"/_next/static/media/plus.53238151.svg","height":26,"width":28,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/QuestionItem/QuestionItem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const QuestionItem = ({ item })=>{
    const [open, setOpen] = (0,react_.useState)(false);
    const toggleOpen = ()=>{
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: open ? (QuestionItem_module_default()).item_active : (QuestionItem_module_default()).item,
        onClick: toggleOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (QuestionItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (QuestionItem_module_default()).title,
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: open ? (QuestionItem_module_default()).plus_a : (QuestionItem_module_default()).plus,
                        src: plus,
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (QuestionItem_module_default()).text,
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien vitae tortor vestibulum mollis nec non orci. Phasellus fringilla, odio nec suscipit varius, purus libero bibendum lacus, non vulputate urna tortor eget libero. Etiam efficitur lacus libero, eget blandit libero molestie ut."
            })
        ]
    });
};
/* harmony default export */ const QuestionItem_QuestionItem = (QuestionItem);


/***/ }),

/***/ 46732:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "QuestionItem_item__Ua3yr",
	"info": "QuestionItem_info__WKGCS",
	"title": "QuestionItem_title__ikrJe",
	"text": "QuestionItem_text__K6xtK",
	"item_active": "QuestionItem_item_active__MesBO",
	"plus": "QuestionItem_plus__oWovN",
	"plus_a": "QuestionItem_plus_a__CoIYq"
};


/***/ })

};
;