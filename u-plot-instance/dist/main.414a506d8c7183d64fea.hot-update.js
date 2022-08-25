webpackHotUpdate("main",{

/***/ "./src/components/Container/Container.tsx":
/*!************************************************!*\
  !*** ./src/components/Container/Container.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");


var defaultTiles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);

var Container = function Container(_ref) {
  var children = _ref.children;
  var mainVar = Object(piral__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])(function (m) {
    return m.data.test;
  });
  var mainVarHandler = Object(piral__WEBPACK_IMPORTED_MODULE_1__["useAction"])('dispatchMainVar');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "The gloabl value (mainVar) is ", mainVar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    onClick: mainVarHandler
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "tiles"
  }, defaultTiles, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=main.414a506d8c7183d64fea.hot-update.js.map