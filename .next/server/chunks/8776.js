exports.id = 8776;
exports.ids = [8776];
exports.modules = {

/***/ 78954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5615);
/* harmony import */ var _BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BlueBtn = ({ text, width, height, fSize, count, onClick })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        className: (_BlueBtn_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),
        style: {
            width: `${width}px`,
            height: height ? `${height}px` : "",
            fontSize: fSize ? `${fSize}px` : ""
        },
        children: [
            text,
            count && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: count
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueBtn);


/***/ }),

/***/ 58776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Feedback_Feedback)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/FeedBacks/Feedback/Feedback.module.scss
var Feedback_module = __webpack_require__(23469);
var Feedback_module_default = /*#__PURE__*/__webpack_require__.n(Feedback_module);
// EXTERNAL MODULE: ./src/components/FeedBacks/FeedbackItem/FeedbackItem.module.scss
var FeedbackItem_module = __webpack_require__(39718);
var FeedbackItem_module_default = /*#__PURE__*/__webpack_require__.n(FeedbackItem_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/icons/Star.svg
var Star = __webpack_require__(19997);
;// CONCATENATED MODULE: ./src/components/FeedBacks/FeedbackItem/FeedbackItem.tsx





const FeedbackItem = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (FeedbackItem_module_default()).feedback_item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FeedbackItem_module_default()).date,
                children: "29.07.2023"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FeedbackItem_module_default()).title,
                children: "Отличное обслуживание"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (FeedbackItem_module_default()).stars,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "star icon",
                        src: Star["default"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "star icon",
                        src: Star["default"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "star icon",
                        src: Star["default"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "star icon",
                        src: Star["default"]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FeedbackItem_module_default()).text,
                children: "Прежде всего, современная методология разработки однозначно определяет каждого участника как способного. Прежде всего, современная методология разработки однозначно определяет каждого участника как способного..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FeedbackItem_module_default()).more,
                children: "Читать полностью"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (FeedbackItem_module_default()).feed,
                children: "ОТЗЫВЫ О ПОТРЕБИТЕЛЬСКИХ КРЕДИТАХ"
            })
        ]
    });
};
/* harmony default export */ const FeedbackItem_FeedbackItem = (FeedbackItem);

// EXTERNAL MODULE: ./src/UI/BlueBtn/BlueBtn.tsx
var BlueBtn = __webpack_require__(78954);
;// CONCATENATED MODULE: ./src/components/TitleMarkLast/TitleMarkLast.tsx



const TitleMarkLast = ({ title, sub })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Feedback_module_default()).title,
        children: [
            title,
            /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                children: sub
            })
        ]
    });
};
/* harmony default export */ const TitleMarkLast_TitleMarkLast = (TitleMarkLast);

// EXTERNAL MODULE: ./src/components/Choise/ChoiseItemsMap/ChoiseItemsMap.tsx
var ChoiseItemsMap = __webpack_require__(88455);
;// CONCATENATED MODULE: ./src/components/FeedBacks/Feedback/Feedback.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Feedback = ({ title, sub, chois })=>{
    const [currentChoise, setCurrentChoise] = (0,react_.useState)("Банки");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Feedback_module_default()).feedback,
        children: [
            !title || !sub ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Feedback_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                        children: "Что говорят"
                    }),
                    "наши клиенты"
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(TitleMarkLast_TitleMarkLast, {
                title: title,
                sub: sub
            }),
            chois && chois.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Feedback_module_default()).choise_items,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChoiseItemsMap/* default */.Z, {
                    setActive: setCurrentChoise,
                    currentChoise: currentChoise,
                    choiseItems: chois
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Feedback_module_default()).feedback_cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FeedbackItem_FeedbackItem, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(FeedbackItem_FeedbackItem, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(FeedbackItem_FeedbackItem, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Feedback_module_default()).btn_cont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Feedback_module_default()).blueTrBtn,
                        children: "Оставить отзыв"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BlueBtn/* default */.Z, {
                        text: "Смотреть все отзывы",
                        width: 300
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Feedback_Feedback = (Feedback);


/***/ }),

/***/ 5615:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "BlueBtn_btn__Wd1H7"
};


/***/ }),

/***/ 39718:
/***/ ((module) => {

// Exports
module.exports = {
	"feedback_item": "FeedbackItem_feedback_item__XeYGM",
	"date": "FeedbackItem_date__YiERl",
	"title": "FeedbackItem_title__HrRdy",
	"stars": "FeedbackItem_stars__WDzU9",
	"text": "FeedbackItem_text__E9FJA",
	"more": "FeedbackItem_more__piErE",
	"feed": "FeedbackItem_feed__ViDKu"
};


/***/ }),

/***/ 23469:
/***/ ((module) => {

// Exports
module.exports = {
	"feedback": "Feedback_feedback__RyvzP",
	"title": "Feedback_title__xAU8M",
	"choise_items": "Feedback_choise_items__zKF9d",
	"feedback_cont": "Feedback_feedback_cont__00VnU",
	"btn_cont": "Feedback_btn_cont__coNvc",
	"blueTrBtn": "Feedback_blueTrBtn__LzNHH"
};


/***/ }),

/***/ 19997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Star.d126eae7.svg","height":16,"width":16,"blurWidth":0,"blurHeight":0});

/***/ })

};
;