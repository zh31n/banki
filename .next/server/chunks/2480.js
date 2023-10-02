exports.id = 2480;
exports.ids = [2480];
exports.modules = {

/***/ 72480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TopBanks_TopBanks)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/TopBanks/TopBanks.module.scss
var TopBanks_module = __webpack_require__(87802);
var TopBanks_module_default = /*#__PURE__*/__webpack_require__.n(TopBanks_module);
// EXTERNAL MODULE: ./src/components/TopBankItem/TopBankItem.module.scss
var TopBankItem_module = __webpack_require__(96059);
var TopBankItem_module_default = /*#__PURE__*/__webpack_require__.n(TopBankItem_module);
;// CONCATENATED MODULE: ./src/components/TopBankItem/TopBankItem.tsx



const features = "онлайн";
const TopBankItem = (props)=>{
    const { item: { name, rate, min_amount, timeframe_min, description } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TopBankItem_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TopBankItem_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TopBankItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Эффективная ставка"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "до ",
                            rate,
                            " %"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TopBankItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Срок"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            timeframe_min,
                            " дн."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TopBankItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Сумма"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            min_amount,
                            " ₽"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TopBankItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: features ? "Особенности" : ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: features
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TopBankItem_TopBankItem = (TopBankItem);

;// CONCATENATED MODULE: ./src/components/TopBanks/TopBanks.tsx




const TopBanks = (props)=>{
    const { title, sub, banks, fz } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TopBanks_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TopBanks_module_default()).title,
                style: {
                    fontSize: fz ? `${fz}px` : ""
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                        children: !title ? "ТОП 10 банков" : title
                    }),
                    !sub ? " с выгодными вкладами в 2023 году" : sub
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TopBanks_module_default()).banks_items,
                children: banks.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TopBankItem_TopBankItem, {
                        item: item
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const TopBanks_TopBanks = (TopBanks);


/***/ }),

/***/ 96059:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "TopBankItem_item__98mO7",
	"title": "TopBankItem_title__cFkoy",
	"info": "TopBankItem_info__MK4em"
};


/***/ }),

/***/ 87802:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "TopBanks_wrapper__aJ6J6",
	"title": "TopBanks_title__4lF9y",
	"banks_items": "TopBanks_banks_items__QehvB"
};


/***/ })

};
;