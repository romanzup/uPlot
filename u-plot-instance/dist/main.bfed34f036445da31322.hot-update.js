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
!(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");



 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'http://localhost:9000/api/v1/pilet';

var _renderInstance = Object(piral__WEBPACK_IMPORTED_MODULE_2__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_3__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_3__["errors"],
  actions: !(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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

root.setData('mainVar', mainVar); //setInterval(() => root.setData('mainVar', 100), 5000);

/***/ })

})
//# sourceMappingURL=main.bfed34f036445da31322.hot-update.js.map