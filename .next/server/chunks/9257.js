exports.id = 9257;
exports.ids = [9257];
exports.modules = {

/***/ 99257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ credits_CreditBankList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./src/components/credits/CreditBankList/index.module.scss
var index_module = __webpack_require__(82028);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/UI/CustomSelect/CustomSelect.tsx
var CustomSelect = __webpack_require__(7696);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/3-line.svg
var _3_line = __webpack_require__(32739);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
// EXTERNAL MODULE: ./src/components/credits/ItemAndChildren/index.module.scss
var ItemAndChildren_index_module = __webpack_require__(87922);
var ItemAndChildren_index_module_default = /*#__PURE__*/__webpack_require__.n(ItemAndChildren_index_module);
// EXTERNAL MODULE: ./src/components/credits/CreditBankItem/index.module.scss
var CreditBankItem_index_module = __webpack_require__(17638);
var CreditBankItem_index_module_default = /*#__PURE__*/__webpack_require__.n(CreditBankItem_index_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Question_i.svg
var Question_i = __webpack_require__(94530);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/Danger_i.svg
var Danger_i = __webpack_require__(84395);
// EXTERNAL MODULE: ./src/assets/icons/Arrow_d.svg
var Arrow_d = __webpack_require__(94990);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/loco.svg
var loco = __webpack_require__(6692);
;// CONCATENATED MODULE: ./src/components/credits/CreditBankItem/index.tsx









const CreditBankItem = (props)=>{
    const { item: { bank_name, name, max_procent, min_amount, max_amount, timeframe_min, timeframe_max }, arrChildren, openChildren, child } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CreditBankItem_index_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditBankItem_index_module_default()).up,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CreditBankItem_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: loco["default"],
                                alt: "иконка банка"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (CreditBankItem_index_module_default()).name,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: bank_name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (CreditBankItem_index_module_default()).about_b,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (CreditBankItem_index_module_default()).info_item,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (CreditBankItem_index_module_default()).title,
                                                children: [
                                                    "Ставка",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: Question_i/* default */.Z,
                                                        alt: "иконка вопроса"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    max_procent,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (CreditBankItem_index_module_default()).info_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (CreditBankItem_index_module_default()).title,
                                                children: "Срок"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    timeframe_min,
                                                    " — ",
                                                    timeframe_max,
                                                    " дн."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (CreditBankItem_index_module_default()).info_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (CreditBankItem_index_module_default()).title,
                                                children: "Сумма"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    min_amount,
                                                    " — ",
                                                    max_amount,
                                                    " ₽"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (CreditBankItem_index_module_default()).btn_dung,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Danger_i/* default */.Z,
                            alt: "иконка опасности"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CreditBankItem_index_module_default()).down,
                children: [
                    !child && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CreditBankItem_index_module_default()).count,
                        onClick: (e)=>openChildren(e),
                        children: [
                            arrChildren.length - 2 > 0 && `Ещё ${arrChildren.length - 1} предложений`,
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Arrow_d/* default */.Z,
                                alt: "иконка стрелочки вниз"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (CreditBankItem_index_module_default()).blue_charc,
                        children: [
                            "Партнер раздела"
                        ].map((el, index)=>{
                            if (el !== "") return /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                                text: el,
                                width: 147,
                                height: 36,
                                fSize: 14
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                        text: "Открыть вклад",
                        width: 222,
                        fSize: 20
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const credits_CreditBankItem = (/*#__PURE__*/react_default().memo(CreditBankItem));

;// CONCATENATED MODULE: ./src/components/credits/ItemAndChildren/index.tsx





const ItemAndChildren = (props)=>{
    const { item, arr } = props;
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const headItem = (0,react_.useRef)();
    const heightItem = ()=>{
        if (!headItem.current) return;
        return headItem.current.getBoundingClientRect().height * (arr.length - 1) + 10 * (arr.length - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(credits_CreditBankItem, {
                item: item,
                arrChildren: arr,
                openChildren: ()=>setIsOpen(!isOpen)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (ItemAndChildren_index_module_default()).deposit_offers_children,
                style: {
                    height: isOpen ? `${heightItem()}px` : 0
                },
                children: arr.slice(1).map((child, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        style: {
                            marginTop: "2.5px",
                            marginBottom: "2.5px"
                        },
                        ref: index === 0 ? headItem : null,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(credits_CreditBankItem, {
                            child: true,
                            item: child
                        })
                    }, (0,nanoid/* nanoid */.x0)()))
            })
        ]
    });
};
/* harmony default export */ const credits_ItemAndChildren = (/*#__PURE__*/react_default().memo(ItemAndChildren));

;// CONCATENATED MODULE: ./src/components/credits/CreditBankList/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const CreditBankList = (props)=>{
    const { credits, options, title, sub, isSelect } = props;
    const [loansLength, setLoansLenth] = (0,react_.useState)([]);
    const titleScroll = (0,react_.useRef)(null);
    const [sortValue, setSortValue] = (0,react_.useState)("По процентной ставке");
    const loansCurtailedByBanks = (0,react_.useMemo)(()=>{
        const _loansCurtailedByBanks = credits.reduce((arr, el)=>{
            const avilable = arr.find((bank)=>bank[0].bank_name === el.bank_name);
            if (avilable) {
                avilable.push(el);
            } else {
                const nevArr = [
                    el
                ];
                arr.push(nevArr);
            }
            return arr;
        }, []);
        _loansCurtailedByBanks.map((el)=>{
            return el.map((elem)=>{
                return {
                    ...elem,
                    length: el.length
                };
            });
        });
        return _loansCurtailedByBanks;
    }, [
        credits
    ]);
    const leaderBanks = (0,react_.useMemo)(()=>{
        const _leaderBanks = loansCurtailedByBanks.reduce((arr, el)=>{
            arr.push(el[0]);
            return arr;
        }, []);
        return _leaderBanks;
    }, [
        loansCurtailedByBanks
    ]);
    (0,react_.useEffect)(()=>{
        if (!leaderBanks) return;
        setLoansLenth(leaderBanks.slice(0, 4));
    }, []);
    const handleClick = ()=>{
        titleScroll.current.scrollIntoView({
            behavior: "smooth"
        });
        setLoansLenth((prevState)=>prevState.length === 4 ? leaderBanks : leaderBanks.slice(0, 4));
    };
    const sortOffers = (e)=>{
        if (sortValue === e.currentTarget.value) return;
        setSortValue(e.currentTarget.value);
    };
    function sortOffer(criterion) {
        loansCurtailedByBanks.map((bankOf)=>{
            return bankOf.sort((x, y)=>{
                return y[criterion] - x[criterion];
            });
        });
        leaderBanks.sort((x, y)=>{
            return y[criterion] - x[criterion];
        });
        setLoansLenth(leaderBanks.slice(0, 4));
    }
    (0,react_.useEffect)(()=>{
        if (sortValue === "") return;
        switch(sortValue){
            case "По процентной ставке":
                sortOffer("max_procent");
                break;
            case "По максимальной сумме":
                sortOffer("max_amount");
                break;
            case "По максимальному сроку":
                sortOffer("timeframe_max");
                break;
        }
    }, [
        sortValue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).deposits,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                                children: title
                            }),
                            sub
                        ]
                    }),
                    isSelect && /*#__PURE__*/ jsx_runtime_.jsx(CustomSelect/* default */.Z, {
                        img: _3_line["default"],
                        options: options,
                        handleSort: (e)=>sortOffers(e)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (index_module_default()).deposit_offers,
                ref: titleScroll,
                children: loansLength.map((item)=>{
                    const arrChildren = loansCurtailedByBanks.find((el)=>el[0].bank_name === item.bank_name);
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(credits_ItemAndChildren, {
                            item: item,
                            arr: arrChildren
                        })
                    }, (0,nanoid/* nanoid */.x0)());
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).btn_cont,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                    text: "Смотреть все",
                    width: 235,
                    onClick: ()=>handleClick()
                })
            })
        ]
    });
};
/* harmony default export */ const credits_CreditBankList = (/*#__PURE__*/react_default().memo(CreditBankList));


/***/ }),

/***/ 17638:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "CreditBankItem_item__4Lber",
	"up": "CreditBankItem_up__6NoID",
	"btn_dung": "CreditBankItem_btn_dung__yN8fE",
	"info": "CreditBankItem_info__m8pzT",
	"name": "CreditBankItem_name__xXvCu",
	"about_b": "CreditBankItem_about_b__bG1xt",
	"info_item": "CreditBankItem_info_item__vCEej",
	"title": "CreditBankItem_title__UXYpN",
	"down": "CreditBankItem_down__XEQWm",
	"count": "CreditBankItem_count__jX4e7",
	"blue_charc": "CreditBankItem_blue_charc__W2TP5"
};


/***/ }),

/***/ 82028:
/***/ ((module) => {

// Exports
module.exports = {
	"deposits": "CreditBankList_deposits__3Rd4v",
	"title": "CreditBankList_title__gBHeY",
	"deposit_offers": "CreditBankList_deposit_offers__0HDzs",
	"btn_cont": "CreditBankList_btn_cont__1zrpM"
};


/***/ }),

/***/ 87922:
/***/ ((module) => {

// Exports
module.exports = {
	"deposit_offers_children": "ItemAndChildren_deposit_offers_children__6jaOI"
};


/***/ }),

/***/ 94990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Arrow_d.22db5d7f.svg","height":24,"width":25,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 94530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Question_i.d57fa7da.svg","height":14,"width":15,"blurWidth":0,"blurHeight":0});

/***/ })

};
;