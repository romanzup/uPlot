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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");




 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'http://localhost:9000/api/v1/pilet';

var _renderInstance = Object(piral__WEBPACK_IMPORTED_MODULE_3__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_4__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_4__["errors"],
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

setup(root);

function setup(api) {
  var handlerMainVar = Object(piral__WEBPACK_IMPORTED_MODULE_3__["useAction"])('dispatchMainVar');
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    api.on('mainVar', handlerMainVar);
    return function () {
      return api.off('mainVar', handlerMainVar);
    };
  }, []);
}

/***/ })

})
//# sourceMappingURL=main.d38d0b0986bad84b910c.hot-update.js.map