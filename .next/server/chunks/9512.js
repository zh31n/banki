exports.id = 9512;
exports.ids = [9512];
exports.modules = {

/***/ 60703:
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
/* harmony import */ var _ProfileNav_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60477);
/* harmony import */ var _ProfileNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProfileNav_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const nav = [
    {
        name: "Дашборд",
        link: "/profile/dashboard"
    },
    {
        name: "Мои заявки",
        link: "/profile/applications"
    },
    {
        name: "Настройки профиля",
        link: "/profile/settings"
    },
    {
        name: "Мои отзывы",
        link: "/profile/feedback"
    },
    {
        name: "Уведомления",
        link: "/profile/notifications"
    },
    {
        name: "Сообщения",
        link: "/profile/messages"
    },
    {
        name: "История активности",
        link: "/profile/history"
    },
    {
        name: "Избранное",
        link: "/profile/favourites"
    },
    {
        name: "Помощь",
        link: "/profile/help"
    }
];
const ProfileNav = ()=>{
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (_ProfileNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: nav.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: pathName.includes(el.link) ? (_ProfileNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_item_active) : (_ProfileNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_item),
                href: el.link,
                children: el.name
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileNav);


/***/ }),

/***/ 60477:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "ProfileNav_wrapper__lK5YT",
	"nav_item": "ProfileNav_nav_item__C2YsN",
	"nav_item_active": "ProfileNav_nav_item_active__Is727"
};


/***/ }),

/***/ 78802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ containers_ProfileContainer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/ProfileNav/ProfileNav.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\project-gitHub\banki_ru\banki\src\components\ProfileNav\ProfileNav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ProfileNav = (__default__);
;// CONCATENATED MODULE: ./src/containers/ProfileContainer.tsx



const ProfileContainer = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "container",
        style: {
            paddingTop: "20px",
            overflowX: "hidden",
            paddingBottom: "2rem"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "profileCont",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ProfileNav, {}),
                children
            ]
        })
    });
};
/* harmony default export */ const containers_ProfileContainer = (ProfileContainer);


/***/ })

};
;