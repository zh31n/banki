exports.id = 6617;
exports.ids = [6617];
exports.modules = {

/***/ 93631:
/***/ ((module) => {

// Exports
module.exports = {
	"catalog_item": "CatalogItem_catalog_item__Y6q8S"
};


/***/ }),

/***/ 46617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CatalogItemsMap_CatalogItemsMap)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/components/Catalog/CatalogItem/CatalogItem.module.scss
var CatalogItem_module = __webpack_require__(93631);
var CatalogItem_module_default = /*#__PURE__*/__webpack_require__.n(CatalogItem_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Catalog/CatalogItem/CatalogItem.tsx




const CatalogItem = ({ name, img })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CatalogItem_module_default()).catalog_item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "catalog image",
                src: img,
                width: 35,
                height: 35
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: name
            })
        ]
    });
};
/* harmony default export */ const CatalogItem_CatalogItem = (CatalogItem);

;// CONCATENATED MODULE: ./src/components/Catalog/CatalogItemsMap/CatalogItemsMap.tsx



const CatalogItemsMap = ({ items })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CatalogItem_CatalogItem, {
                name: el.name,
                img: el.img
            }, index))
    });
};
/* harmony default export */ const CatalogItemsMap_CatalogItemsMap = (CatalogItemsMap);


/***/ })

};
;