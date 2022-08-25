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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");




 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'http://localhost:9000/api/v1/pilet';
var instance = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["createInstance"])({
  state: {
    components: _layout__WEBPACK_IMPORTED_MODULE_4__["layout"],
    errorComponents: _layout__WEBPACK_IMPORTED_MODULE_4__["errors"],
    mainVar: 0
  },
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});
Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(React.createElement(piral_core__WEBPACK_IMPORTED_MODULE_3__["Piral"], {
  instance: instance
}), document.querySelector("#app")); //setInterval(() => root.setData('mainVar', 100), 5000);

/***/ })

})
//# sourceMappingURL=main.68e66d60c43845933623.hot-update.js.map