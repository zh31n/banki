exports.id = 4602;
exports.ids = [4602];
exports.modules = {

/***/ 94602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LatestNews_LatestNews)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/LatestNews/LatestNews.module.scss
var LatestNews_module = __webpack_require__(43813);
var LatestNews_module_default = /*#__PURE__*/__webpack_require__.n(LatestNews_module);
// EXTERNAL MODULE: ./src/components/NewsItem/NewsItem.module.scss
var NewsItem_module = __webpack_require__(3259);
var NewsItem_module_default = /*#__PURE__*/__webpack_require__.n(NewsItem_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/icons/Smile.svg
var Smile = __webpack_require__(6632);
;// CONCATENATED MODULE: ./src/components/NewsItem/NewsItem.tsx





const NewsItem = (props)=>{
    const { item: { title, text, subtitle } } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NewsItem_module_default()).item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewsItem_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (NewsItem_module_default()).date,
                        children: "30.06.2023"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Smile/* default */.Z,
                                alt: "smile",
                                width: 14,
                                height: 14
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: 124242
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewsItem_module_default()).text,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("mark", {
                        children: [
                            title,
                            ":"
                        ]
                    }),
                    " ",
                    subtitle
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NewsItem_module_default()).subtitle,
                children: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NewsItem_module_default()).line
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewsItem_module_default()).info,
                style: {
                    marginTop: "1rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (NewsItem_module_default()).date,
                        children: "30.06.2023"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Smile/* default */.Z,
                                alt: "smile",
                                width: 14,
                                height: 14
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: 124242
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewsItem_module_default()).text,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("mark", {
                        children: [
                            title,
                            ":"
                        ]
                    }),
                    " ",
                    text
                ]
            })
        ]
    });
};
/* harmony default export */ const NewsItem_NewsItem = (NewsItem);

// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
// EXTERNAL MODULE: ./src/components/Choise/ChoiseItemsMap/ChoiseItemsMap.tsx
var ChoiseItemsMap = __webpack_require__(88455);
// EXTERNAL MODULE: ./src/hooks/redux.ts
var redux = __webpack_require__(14891);
;// CONCATENATED MODULE: ./src/components/LatestNews/LatestNews.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const mockFilterItems = [
    {
        name: "Все",
        active: true
    },
    {
        name: "Накопления",
        active: false
    },
    {
        name: "Займы",
        active: false
    },
    {
        name: "Страхование",
        active: false
    },
    {
        name: "Безопасность",
        active: false
    }
];
const LatestNews = ()=>{
    const { list, saveList, loansList, insuranceList, safeList } = (0,redux/* useTypedSelector */.i)((state)=>state.news);
    const [currentChoise, setCurrentChoise] = (0,react_.useState)("Все");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LatestNews_module_default()).news,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (LatestNews_module_default()).title,
                children: [
                    "Свежие ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "новости"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (LatestNews_module_default()).choises_cont,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChoiseItemsMap/* default */.Z, {
                    currentChoise: currentChoise,
                    setActive: setCurrentChoise,
                    choiseItems: mockFilterItems
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (LatestNews_module_default()).news_cont,
                children: [
                    currentChoise === "Все" && list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsItem_NewsItem, {
                            item: item
                        }, item.id)),
                    currentChoise === "Накопления" && saveList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsItem_NewsItem, {
                            item: item
                        }, item.id)),
                    currentChoise === "Займы" && loansList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsItem_NewsItem, {
                            item: item
                        }, item.id)),
                    currentChoise === "Страхование" && insuranceList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsItem_NewsItem, {
                            item: item
                        }, item.id)),
                    currentChoise === "Безопасность" && safeList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsItem_NewsItem, {
                            item: item
                        }, item.id))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (LatestNews_module_default()).btn_cont,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                    text: "Смотреть все новости",
                    width: 300
                })
            })
        ]
    });
};
/* harmony default export */ const LatestNews_LatestNews = (LatestNews);


/***/ }),

/***/ 14891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useTypedSelector)
/* harmony export */ });
/* unused harmony export useTypedDispatch */
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedDispatch = (/* unused pure expression or super */ null && (useDispatch));
const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 43813:
/***/ ((module) => {

// Exports
module.exports = {
	"news": "LatestNews_news__p4cMY",
	"title": "LatestNews_title__uspY8",
	"choises_cont": "LatestNews_choises_cont__75xZV",
	"news_cont": "LatestNews_news_cont__HMADy",
	"btn_cont": "LatestNews_btn_cont__I4i79"
};


/***/ }),

/***/ 3259:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "NewsItem_item__URmv6",
	"info": "NewsItem_info__AgbDF",
	"text": "NewsItem_text__LhH14",
	"subtitle": "NewsItem_subtitle__Ni_y8",
	"line": "NewsItem_line__l_sQC"
};


/***/ }),

/***/ 6632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Smile.94286c9e.svg","height":15,"width":14,"blurWidth":0,"blurHeight":0});

/***/ })

};
;