webpackHotUpdate("main",{

/***/ "./src/actions/incrementTestValue.ts":
/*!*******************************************!*\
  !*** ./src/actions/incrementTestValue.ts ***!
  \*******************************************/
/*! exports provided: incrementTestValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementTestValue", function() { return incrementTestValue; });
function incrementTestValue(ctx) {
  ctx.dispatch(function (state) {
    return Object.assign(Object.assign({}, state), {
      data: Object.assign(Object.assign({}, state.data), {
        test: Object.assign(Object.assign({}, state.data.test), {
          value: state.data.test.value + 1
        })
      })
    });
  });
}

/***/ }),

/***/ "./src/actions/index.ts":
false,

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral/polyfills */ "./node_modules/piral/polyfills.js");
/* harmony import */ var _actions_incrementTestValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/incrementTestValue */ "./src/actions/incrementTestValue.ts");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");



 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'http://localhost:9000/api/v1/pilet';
Object(piral__WEBPACK_IMPORTED_MODULE_2__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_3__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_3__["errors"],
  actions: _actions_incrementTestValue__WEBPACK_IMPORTED_MODULE_1__,
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});

/***/ })

})
//# sourceMappingURL=main.4ecc0006ca0b5512491a.hot-update.js.map