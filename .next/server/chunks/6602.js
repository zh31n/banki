exports.id = 6602;
exports.ids = [6602];
exports.modules = {

/***/ 55639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OffersObligation_OffersObligation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/screens/ObligationsInv/components/OffersObligation/OffersObligation.module.scss
var OffersObligation_module = __webpack_require__(47);
var OffersObligation_module_default = /*#__PURE__*/__webpack_require__.n(OffersObligation_module);
// EXTERNAL MODULE: ./src/UI/CustomSelect/CustomSelect.tsx
var CustomSelect = __webpack_require__(7696);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/3-line.svg
var _3_line = __webpack_require__(32739);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
// EXTERNAL MODULE: ./src/screens/ObligationsInv/components/ObliagtionOfferItem/ObliagtionOfferItem.module.scss
var ObliagtionOfferItem_module = __webpack_require__(22705);
var ObliagtionOfferItem_module_default = /*#__PURE__*/__webpack_require__.n(ObliagtionOfferItem_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/screens/ObligationsInv/components/ObliagtionOfferItem/ObliagtionOfferItem.tsx





const ObliagtionOfferItem = ({ change, img, sub, subPrice, price, name, subChange })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ObliagtionOfferItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ObliagtionOfferItem_module_default()).up,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ObliagtionOfferItem_module_default()).info,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: img,
                            alt: "иконка банка"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (ObliagtionOfferItem_module_default()).name,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: sub
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (ObliagtionOfferItem_module_default()).about_b,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ObliagtionOfferItem_module_default()).info_item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ObliagtionOfferItem_module_default()).title,
                                            children: "Цена за акцию"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: `${price} ₽`
                                        }),
                                        subPrice && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ObliagtionOfferItem_module_default()).subprice,
                                            children: subPrice
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ObliagtionOfferItem_module_default()).info_item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ObliagtionOfferItem_module_default()).title,
                                            children: "Изменение цены, за месяц"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: change
                                        }),
                                        subChange && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ObliagtionOfferItem_module_default()).subprice,
                                            children: subChange
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                    text: "Купить",
                    width: 222,
                    fSize: 20
                })
            ]
        })
    });
};
/* harmony default export */ const ObliagtionOfferItem_ObliagtionOfferItem = (ObliagtionOfferItem);

;// CONCATENATED MODULE: ./src/screens/ObligationsInv/components/OffersObligation/OffersObligation.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const OffersObligation = ({ offers, options, count, changeTime })=>{
    const itemStocks = (0,react_.useRef)();
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [sortType, setSortType] = (0,react_.useState)("Доходность по убыванию");
    const [arrRender, setArrRender] = (0,react_.useState)([
        ...offers
    ].sort((x, y)=>y.price - x.price));
    const heightItem = (0,react_.useMemo)(()=>{
        if (!itemStocks.current) return 128;
        return itemStocks.current.getBoundingClientRect().height;
    }, [
        itemStocks.current
    ]);
    const handleClick = ()=>{
        setIsOpen(!isOpen);
        itemStocks.current.scrollIntoView({
            behavior: "smooth"
        });
    };
    const quantityItems = (0,react_.useMemo)(()=>{
        return offers.length >= 4 ? 4 : 1;
    }, [
        offers.length
    ]);
    (0,react_.useEffect)(()=>{
        if (sortType === "Доходность по убыванию") {
            setArrRender((old)=>{
                return old.sort((x, y)=>x.price - y.price);
            });
        }
        if (sortType === "Доходность по возрастанию") {
            setArrRender((old)=>{
                return old.sort((x, y)=>y.price - x.price);
            });
        }
    }, [
        sortType
    ]);
    const sortStoocks = (e)=>{
        if (sortType === e.currentTarget.value) return;
        setSortType(e.currentTarget.value);
    };
    const offerMap = arrRender.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
            ref: !index ? itemStocks : null,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ObliagtionOfferItem_ObliagtionOfferItem, {
                name: el.name,
                subChange: el.subChange,
                sub: el.sub,
                price: el.price,
                change: el.change,
                img: el.img,
                subPrice: el.subPrice
            }, index)
        }, index));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OffersObligation_module_default()).deposits,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersObligation_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: count
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomSelect/* default */.Z, {
                        img: _3_line["default"],
                        options: options,
                        handleSort: (e)=>sortStoocks(e)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (OffersObligation_module_default()).time,
                        children: `Обновлено ${changeTime.date} в ${changeTime.time}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (OffersObligation_module_default()).deposit_offers,
                style: {
                    height: !isOpen ? `${heightItem * quantityItems + 15}px` : `${heightItem * offers.length + 5 * offers.length - 1}px`
                },
                children: offerMap
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (OffersObligation_module_default()).btn_cont,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                    text: "Смотреть все",
                    width: 235,
                    onClick: handleClick
                })
            })
        ]
    });
};
/* harmony default export */ const OffersObligation_OffersObligation = (OffersObligation);


/***/ }),

/***/ 22705:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "ObliagtionOfferItem_item__V6sps",
	"up": "ObliagtionOfferItem_up__A7mPI",
	"btn_dung": "ObliagtionOfferItem_btn_dung__mI8eY",
	"info": "ObliagtionOfferItem_info__Cz4Tb",
	"name": "ObliagtionOfferItem_name___qEhQ",
	"about_b": "ObliagtionOfferItem_about_b__4X92B",
	"info_item": "ObliagtionOfferItem_info_item__Lo1Pv",
	"title": "ObliagtionOfferItem_title__F62E6",
	"subprice": "ObliagtionOfferItem_subprice__iD7dM",
	"down": "ObliagtionOfferItem_down__nYlsz",
	"count": "ObliagtionOfferItem_count__EwzO1",
	"blue_charc": "ObliagtionOfferItem_blue_charc__q6Joo"
};


/***/ }),

/***/ 47:
/***/ ((module) => {

// Exports
module.exports = {
	"deposits": "OffersObligation_deposits__Llp0y",
	"title": "OffersObligation_title__D0e8G",
	"time": "OffersObligation_time__cRzKB",
	"deposit_offers": "OffersObligation_deposit_offers__7uAZX",
	"btn_cont": "OffersObligation_btn_cont__zNq_s"
};


/***/ }),

/***/ 85073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/gazprom.c1bd3b33.svg","height":50,"width":50,"blurWidth":0,"blurHeight":0});

/***/ })

};
;