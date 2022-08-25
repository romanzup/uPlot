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
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");


 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'http://localhost:9000/api/v1/pilet';

var _renderInstance = Object(piral__WEBPACK_IMPORTED_MODULE_1__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_2__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_2__["errors"],
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
}),
    root = _renderInstance.root;

root.setData('mainVar', 43);
setTimeout(function () {
  root.setData('mainVar', 100);
}, 1000);

/***/ })

})
//# sourceMappingURL=main.a9ab4fbc616e8626590c.hot-update.js.map