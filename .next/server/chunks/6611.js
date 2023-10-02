exports.id = 6611;
exports.ids = [6611];
exports.modules = {

/***/ 16611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74032);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Search_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30114);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable @typescript-eslint/no-explicit-any */ /* __next_internal_client_entry_do_not_use__ default auto */ 





const Search = (props)=>{
    const { placeholder, margin, height, btnHidden, itemsSearch, setValue, value, filterArr, width } = props;
    const [searchVis, setSearchVis] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [filteredArr, setFilteredArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const onChangeInp = (e)=>setValue && setValue(e.target.value);
    {
        itemsSearch && (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (value?.length === 0) {
                setSearchVis(false);
            } else {
                setSearchVis(true);
            }
            const result = filterArr(itemsSearch);
            setFilteredArr(result);
        }, [
            value
        ]);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Search_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search),
        style: {
            margin: `${margin}px`,
            height: `${height}px`,
            width: `${width}px`
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                alt: "lupa",
                src: _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                height: 40,
                width: 40
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                value: value,
                onChange: onChangeInp,
                placeholder: placeholder
            }),
            btnHidden ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                children: "Найти"
            }),
            searchVis && itemsSearch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Search_module_scss__WEBPACK_IMPORTED_MODULE_5___default().drop_down),
                children: filteredArr?.map((el, index)=>{
                    if (el.link) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: el.link,
                            children: el.text || el.name
                        }, index);
                    } else if (el.a) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            href: el.a,
                            rel: "noreferrer",
                            children: el.name
                        }, index);
                    } else {
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px",
                                borderBottom: "1px solid black",
                                fontSize: "14px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: el.name || el.title
                                }),
                                el.rating && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "рейтинг ",
                                        el.rating
                                    ]
                                })
                            ]
                        }, index);
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 74032:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "Search_search__1H_QS",
	"drop_down": "Search_drop_down__wZQha",
	"drop_item": "Search_drop_item__U_kqf"
};


/***/ })

};
;