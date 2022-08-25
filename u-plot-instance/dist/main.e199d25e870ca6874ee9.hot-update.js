webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral/polyfills */ "./node_modules/piral/polyfills.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/actions/index.ts");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");



 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'http://localhost:9000/api/v1/pilet';

var _renderInstance = Object(piral__WEBPACK_IMPORTED_MODULE_2__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_3__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_3__["errors"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  state: {
    mainVar: 0
  },
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
}),
    root = _renderInstance.root;

root.setData('mainVar', 0);
root.on('store-data', function (_ref) {
  var name = _ref.name,
      value = _ref.value;
  if (name === 'mainVar') alert('mainVar was changed from Pilet', value);
});

/***/ })

})
//# sourceMappingURL=main.e199d25e870ca6874ee9.hot-update.js.map