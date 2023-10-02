exports.id = 9743;
exports.ids = [9743];
exports.modules = {

/***/ 99406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ OffersBanks_OffersBanks)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./src/components/Offers/OffersBanks/OffersBanks.module.scss
var OffersBanks_module = __webpack_require__(69976);
var OffersBanks_module_default = /*#__PURE__*/__webpack_require__.n(OffersBanks_module);
// EXTERNAL MODULE: ./src/UI/CustomSelect/CustomSelect.tsx
var CustomSelect = __webpack_require__(7696);
// EXTERNAL MODULE: ./src/assets/icons/banki_icon/3-line.svg
var _3_line = __webpack_require__(32739);
// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
// EXTERNAL MODULE: ./src/components/Deposit/DepositOfferItem/DepositOfferItem.module.scss
var DepositOfferItem_module = __webpack_require__(18318);
var DepositOfferItem_module_default = /*#__PURE__*/__webpack_require__.n(DepositOfferItem_module);
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
;// CONCATENATED MODULE: ./src/components/Deposit/DepositOfferItem/DepositOfferItem.tsx
/* eslint-disable react/display-name */ 








const DepositOfferItem = /*#__PURE__*/ react_default().memo((props)=>{
    const { item: { name, rate, min_amount, max_amount, timeframe_min, timeframe_max, description }, arrChildren, openChildren, child } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (DepositOfferItem_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (DepositOfferItem_module_default()).up,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DepositOfferItem_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: loco["default"],
                                alt: "иконка банка"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (DepositOfferItem_module_default()).name,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (DepositOfferItem_module_default()).about_b,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (DepositOfferItem_module_default()).info_item,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (DepositOfferItem_module_default()).title,
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
                                                    rate,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (DepositOfferItem_module_default()).info_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (DepositOfferItem_module_default()).title,
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
                                        className: (DepositOfferItem_module_default()).info_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (DepositOfferItem_module_default()).title,
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
                        className: (DepositOfferItem_module_default()).btn_dung,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Danger_i/* default */.Z,
                            alt: "иконка опасности"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (DepositOfferItem_module_default()).down,
                children: [
                    !child && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DepositOfferItem_module_default()).count,
                        onClick: (e)=>openChildren(e),
                        children: [
                            "Ещё ",
                            arrChildren ? arrChildren.length : 0,
                            " вкладов",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Arrow_d/* default */.Z,
                                alt: "иконка стрелочки вниз"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (DepositOfferItem_module_default()).blue_charc,
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
});
/* harmony default export */ const DepositOfferItem_DepositOfferItem = (DepositOfferItem);

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(89367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Offers/OffersBanks/OffersBanks.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const OffersBanks = (props)=>{
    const { deposits, options, title, sub, isSelect } = props;
    const titleScroll = (0,react_.useRef)(null);
    const [isOpen, setIsOpen] = (0,react_.useState)([]);
    const [depositsLength, setDepositsLenth] = (0,react_.useState)([]);
    const [higthDepositItem, setHigthDepositItem] = (0,react_.useState)(0);
    const [sortValue, setSortValue] = (0,react_.useState)("По процентной ставке");
    const depositsAreRolledUpAcrossBanks = (0,react_.useMemo)(()=>{
        const _depositsAreRolledUpAcrossBanks = deposits.reduce((arr, el)=>{
            const avilable = arr.find((bank)=>bank[0].bank_id === el.bank_id);
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
        _depositsAreRolledUpAcrossBanks.map((el)=>{
            return el.map((elem)=>{
                return elem.length = el.length;
            });
        });
        return _depositsAreRolledUpAcrossBanks;
    }, [
        deposits
    ]);
    const leaderBanks = (0,react_.useMemo)(()=>{
        const _leaderBanks = depositsAreRolledUpAcrossBanks.reduce((arr, el)=>{
            arr.push(el[0]);
            return arr;
        }, []);
        return _leaderBanks;
    }, [
        depositsAreRolledUpAcrossBanks
    ]);
    (0,react_.useEffect)(()=>{
        if (!leaderBanks) return;
        setDepositsLenth(leaderBanks.slice(0, 4));
    }, []);
    const handleClick = ()=>{
        titleScroll.current.scrollIntoView({
            behavior: "smooth"
        });
        setDepositsLenth((prevState)=>prevState.length === 4 ? leaderBanks : leaderBanks.slice(0, 4));
    };
    const handleOpenChildren = (0,react_.useCallback)((e, item)=>{
        setHigthDepositItem(e.currentTarget.parentElement.parentElement.getBoundingClientRect().height);
        const presence = isOpen.find((el)=>el === item.bank_id);
        if (!presence) {
            setIsOpen((currentVal)=>[
                    ...currentVal,
                    item.bank_id
                ]);
        } else {
            setIsOpen((currentVal)=>currentVal.filter((el)=>el !== item.bank_id));
        }
    }, [
        isOpen
    ]);
    const presenceClassName = (item)=>{
        const presence = isOpen.find((el)=>el === item.bank_id);
        return presence ? true : false;
    };
    const sortOffers = (e)=>{
        if (sortValue === e.currentTarget.value) return;
        setSortValue(e.currentTarget.value);
    };
    function sortOffer(criterion) {
        depositsAreRolledUpAcrossBanks.map((bankOf)=>{
            return bankOf.sort((x, y)=>{
                return y[criterion] - x[criterion];
            });
        });
        leaderBanks.sort((x, y)=>{
            return y[criterion] - x[criterion];
        });
        setDepositsLenth(leaderBanks.slice(0, 4));
    }
    (0,react_.useEffect)(()=>{
        if (sortValue === "") return;
        switch(sortValue){
            case "По процентной ставке":
                sortOffer("rate");
                break;
            case "По рейтингу банка":
                sortOffer("rating");
                break;
            case "По максимальному взносу":
                sortOffer("min_amount");
                break;
        }
    }, [
        sortValue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OffersBanks_module_default()).deposits,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (OffersBanks_module_default()).title,
                ref: titleScroll,
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
                className: (OffersBanks_module_default()).deposit_offers,
                children: depositsLength.map((item)=>{
                    const arrChildren = depositsAreRolledUpAcrossBanks.find((el)=>el[0].bank_id === item.bank_id);
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DepositOfferItem_DepositOfferItem, {
                                item: item,
                                arrChildren: arrChildren ? arrChildren.slice(1) : [],
                                openChildren: (e)=>handleOpenChildren(e, item)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: classnames_default()((OffersBanks_module_default()).deposit_offers_children),
                                style: {
                                    height: presenceClassName(item) ? `${(arrChildren.length - 1) * higthDepositItem + (arrChildren.length - 1) * 10}px` : "0"
                                },
                                children: arrChildren.slice(1).map((child)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        style: {
                                            marginTop: "2.5px",
                                            marginBottom: "2.5px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DepositOfferItem_DepositOfferItem, {
                                            child: true,
                                            item: child
                                        })
                                    }, (0,nanoid/* nanoid */.x0)()))
                            })
                        ]
                    }, (0,nanoid/* nanoid */.x0)());
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (OffersBanks_module_default()).btn_cont,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                    text: "Смотреть все",
                    width: 235,
                    onClick: ()=>handleClick()
                })
            })
        ]
    });
};
/* harmony default export */ const OffersBanks_OffersBanks = (OffersBanks);


/***/ }),

/***/ 18318:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "DepositOfferItem_item__qihLM",
	"up": "DepositOfferItem_up__dOihZ",
	"btn_dung": "DepositOfferItem_btn_dung__fqN3b",
	"info": "DepositOfferItem_info__5pCL2",
	"name": "DepositOfferItem_name__WJ5GM",
	"about_b": "DepositOfferItem_about_b__G2SDR",
	"info_item": "DepositOfferItem_info_item__xDiKn",
	"title": "DepositOfferItem_title__MP60J",
	"down": "DepositOfferItem_down__tM7k5",
	"count": "DepositOfferItem_count__6MtAc",
	"blue_charc": "DepositOfferItem_blue_charc__ZJH5B"
};


/***/ }),

/***/ 69976:
/***/ ((module) => {

// Exports
module.exports = {
	"deposits": "OffersBanks_deposits__x57Cn",
	"title": "OffersBanks_title__b39we",
	"deposit_offers": "OffersBanks_deposit_offers__dqQrG",
	"btn_cont": "OffersBanks_btn_cont__HofsC",
	"deposit_offers_children": "OffersBanks_deposit_offers_children__8iFEH"
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

/***/ 55209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Tuning_icon.7afb93ad.svg","height":24,"width":25,"blurWidth":0,"blurHeight":0});

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