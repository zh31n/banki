exports.id = 6937;
exports.ids = [6937];
exports.modules = {

/***/ 96937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Communicate_Communicate)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/Communicate/Communicate.module.scss
var Communicate_module = __webpack_require__(44364);
var Communicate_module_default = /*#__PURE__*/__webpack_require__.n(Communicate_module);
// EXTERNAL MODULE: ./src/components/Accordeon/Accordeon.module.scss
var Accordeon_module = __webpack_require__(97425);
var Accordeon_module_default = /*#__PURE__*/__webpack_require__.n(Accordeon_module);
// EXTERNAL MODULE: ./src/components/Accordeon/components/AccordeonItem/AccordeonItem.module.scss
var AccordeonItem_module = __webpack_require__(70977);
var AccordeonItem_module_default = /*#__PURE__*/__webpack_require__.n(AccordeonItem_module);
// EXTERNAL MODULE: ./src/assets/icons/arr_d_spec.svg
var arr_d_spec = __webpack_require__(93636);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Accordeon/components/AccordeonItem/AccordeonItem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const AccordeonItem = ({ numb, sub })=>{
    const [active, setActive] = (0,react_.useState)(false);
    const handleActive = ()=>setActive(!active);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (AccordeonItem_module_default()).acc_item,
        onClick: handleActive,
        style: {
            maxHeight: active && "250px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (AccordeonItem_module_default()).info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: numb
                            }),
                            sub
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: active ? (AccordeonItem_module_default()).image_a : (AccordeonItem_module_default()).image,
                        src: arr_d_spec/* default */.Z,
                        alt: "стрелочка вниз"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (AccordeonItem_module_default()).text,
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque sagittis dolor in ornare. Morbi vitae metus tempor, maximus ante vel, suscipit libero. Vivamus sagittis nunc nec laoreet eleifend. P"
            })
        ]
    });
};
/* harmony default export */ const AccordeonItem_AccordeonItem = (AccordeonItem);

;// CONCATENATED MODULE: ./src/components/Accordeon/Accordeon.tsx




const Accordeon = ({ items })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Accordeon_module_default()).acc_items,
        children: items.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(AccordeonItem_AccordeonItem, {
                numb: el.numb,
                sub: el.sub,
                text: el.text
            }, index))
    });
};
/* harmony default export */ const Accordeon_Accordeon = (Accordeon);

;// CONCATENATED MODULE: ./src/components/Communicate/Communicate.tsx




const acc = [
    {
        numb: "01",
        sub: "Вопрос - ответ",
        text: ""
    },
    {
        numb: "02",
        sub: "Отзывы о вкладах",
        text: "Оставьте свое мнение о банковских продуктах. Помогите другим сделать выбор финансового партнёра."
    },
    {
        numb: "03",
        sub: "Собственный форум",
        text: ""
    }
];
const Communicate = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Communicate_module_default()).comm,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Communicate_module_default()).comm_i,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Communicate_module_default()).title,
                    children: [
                        "Как мы ",
                        /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                            children: "ведем коммуникацию"
                        }),
                        " с нашими клиентами"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Accordeon_Accordeon, {
                    items: acc
                })
            ]
        })
    });
};
/* harmony default export */ const Communicate_Communicate = (Communicate);


/***/ }),

/***/ 97425:
/***/ ((module) => {

// Exports
module.exports = {
	"acc_items": "Accordeon_acc_items__3Mzwj"
};


/***/ }),

/***/ 70977:
/***/ ((module) => {

// Exports
module.exports = {
	"acc_item": "AccordeonItem_acc_item__XgOdX",
	"info": "AccordeonItem_info__Tdt35",
	"text": "AccordeonItem_text__o_OKP",
	"image": "AccordeonItem_image__8WWSB",
	"image_a": "AccordeonItem_image_a__gA7pk"
};


/***/ }),

/***/ 44364:
/***/ ((module) => {

// Exports
module.exports = {
	"comm": "Communicate_comm__ciTne",
	"comm_i": "Communicate_comm_i__bJhsF",
	"title": "Communicate_title__MQQyZ"
};


/***/ })

};
;